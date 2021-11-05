import React, {useEffect, useState} from 'react';
import { Container, Owner, Loading, BackButton, IssuesList, PageActions } from './styles';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../services/api'

export default function Repositorio({match}){
    const [repositorio, setRepositorio] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function load(){
            const nomeRepo = decodeURIComponent(match.params.repositorio);
            
            const [repoData, issuesData] = await Promise.all([
                api.get(`/repos/${nomeRepo}`),
                api.get(`/repos/${nomeRepo}/issues`, {params: {
                    state: 'open',
                    per_page: 5
                }})
            ])

            setRepositorio(repoData.data);
            setIssues(issuesData.data);
            setLoading(false);
        }

        load();
    }, [match.params.repositorio]);

    useEffect(() => {
        async function loadIssue(){
            const nomeRepo = decodeURIComponent(match.params.repositorio);
            const response = await api.get(`/repos/${nomeRepo}/issues`, {params: {
                state: 'open',
                per_page: 5,
                page
            }})
            setIssues(response.data);
        }
        loadIssue()
    }, [match.params.repositorio, page]);

    if(loading){
        return(
            <Loading/> 
        )
    }

    function handlePage(it){
        let pagina = page + it;
        if(pagina == 0){
            setPage(1);
        }else{
            setPage(pagina);
        }      
    }

    return(
        <Container>
            <BackButton to="/">
                <FaArrowLeft color="#000" size={50} />
            </BackButton>
            <Owner>
                <img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
                <h1>{repositorio.name}</h1>
                <p>{repositorio.description}</p>   
            </Owner>
            <IssuesList>
                {issues.map(issues => (
                    <li key={String(issues.id)}>
                        <img src={issues.user.avatar_url} alt={issues.user.login} />
                        <div>
                            <a href={issues.html_url} target="_blank">{issues.title}</a>
                            
                            {issues.labels.map(label => (
                                    <span key={String(label.id)}>{label.name}</span>
                                ))}
                            <p>Autor: {issues.user.login}</p>
                        </div>
                    </li>
                ))}
            </IssuesList>
            <PageActions>
                <button type="button" onClick={() => handlePage(-1)} disabled={page < 2} >Voltar</button>
                <button type="button" onClick={() => handlePage(1)}>Avançar</button>
            </PageActions>
        </Container>
    )
}