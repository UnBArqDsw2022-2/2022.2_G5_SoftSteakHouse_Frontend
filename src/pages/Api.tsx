import { useEffect, useState } from "react";

type Repository = {
    full_name: string;
    description: string;
}

export function Api() {
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/ocaiooliveira/repos')
            .then(response => response.json())
            .then(data => {
                setRepositories(data);
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <ul>
            {repositories.map(repo => {
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