import React, {useEffect, useState} from 'react';
import { Container, Owner, Loading, BackButton, IssuesList } from './styles';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../services/api'

export default function Repositorio({match}){
    const [repositorio, setRepositorio] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true)

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

    if(loading){
        return(
            <Loading/> 
        )
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
        </Container>
    )
}