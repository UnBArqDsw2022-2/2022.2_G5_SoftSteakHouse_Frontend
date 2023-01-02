import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { api } from "./useFetch";

export function usePost<T = unknown>(url: string, body: any, options?: AxiosRequestConfig) {
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        api.post(url, body, options)
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
