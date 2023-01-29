import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

export const api = axios.create({
    baseURL: 'https://abraao1231.pythonanywhere.com'

})

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        api.get(url, options)
            .then(response => {
                setData(response.data);
            })
            .catch(exception => {
                setError(exception);
            })
            .finally(() => {
                setIsFetching(false);
            })
    }, [])

    return { data, error, isFetching }
}