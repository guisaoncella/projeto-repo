import React, {useEffect, useState, useCallback} from 'react';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'
import { Container, Form, SubmitButton, List, DeleteButton } from './styles';
import {Link} from 'react-router-dom'
import api from '../../services/api'

export default function Main(){
    const [newRepo, setNewRepo] = useState('')
    const [repositorios, setRepositorios] = useState([])
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState('');

    //buscar lista quando iniciar
    useEffect(() => {
        const repoStorage = localStorage.getItem('repos');
        if(repoStorage){
            setRepositorios(JSON.parse(repoStorage));
        }
    }, []);

    //salvar lista
    useEffect(() => {
        localStorage.setItem('repos', JSON.stringify(repositorios));
    }, [repositorios]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        setLoading(true)
        setAlert('');
        async function submit(){
            try{
                if(newRepo === ''){
                    throw new Error('Repositório vazio!');
                }
                const response = await api.get(`repos/${newRepo}`)
                const hasRepo = repositorios.find(repo => repo.name === newRepo);

                if (hasRepo){
                    throw new Error('Repositório duplicado!')     
                }

                const data = {
                    name: response.data.full_name,
                }
                setRepositorios([...repositorios, data])
                setNewRepo('')
            }catch(error){
                console.log(error);
                setAlert(error.message);
            }finally{
                setLoading(false)
            }
        }
        submit()
    }, [newRepo, repositorios])

    const handleDelete = useCallback((repo) => {
        const find = repositorios.filter(r => r.name !== repo)
        setRepositorios(find)
    }, [repositorios])

    return(
        <Container>
            <h1>
                <FaGithub size={25} />
                Meus Repositórios
            </h1>

            <Form onSubmit={handleSubmit} error={alert}>
                <div>
                    <input type="text" placeholder="Adicionar Repositórios" value={newRepo} onChange={e => {
                        setAlert('');
                        setNewRepo(e.target.value);}} />

                    <SubmitButton loading={loading ? 1 : 0}>
                        {loading ? (
                            <FaSpinner color="#FFF" size={14} />
                        ): (
                            <FaPlus color="#FFF" size={14} />
                        )}
                        
                    </SubmitButton>
                </div>
                <label>{alert}</label>
            </Form>
            <List>
               {repositorios.map(repo => (
                    <li key={repo.name}>
                        <span>
                            <DeleteButton onClick={() => handleDelete(repo.name)}>
                                <FaTrash size={14} />    
                            </DeleteButton>  
                            {repo.name}
                        </span> 
                        <Link to={`/repositorio/${encodeURIComponent(repo.name)}`}>
                            <FaBars size={20} />   
                        </Link>  
                    </li>    
               ))} 
            </List>

        </Container>
    )
}