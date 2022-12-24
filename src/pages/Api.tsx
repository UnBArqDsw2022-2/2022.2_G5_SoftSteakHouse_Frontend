import { useFetch } from "../hooks/useFetch";

type Repository = {
    full_name: string;
    description: string;
}

export function Api() {
    const { data: repositories, error, isFetching } = 
        useFetch<Repository[]>('users/ocaiooliveira/repos')

    return (
        <ul>
            { isFetching && <p>Carregando...</p> }
            {repositories?.map(repo => {
                return (
                    <li key={repo.full_name}>
                        <strong>{repo.full_name}</strong>
                        <p>{repo.description}</p>
                    </li>
                )
            })}
        </ul>
    )
}