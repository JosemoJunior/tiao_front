import axios, { AxiosError, AxiosPromise } from "axios"
import { userData } from "../interface/userData";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../config";

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

const KEY = 'profissional-data';

const fetchAllData = async (): AxiosPromise<userData[]> => {
    try {
        const response = axios.get(API_URL + '/user/profissional');
        //localStorage.setItem("error", (await response).status.toString());
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                localStorage.setItem("error", axiosError.response.status.toString());
            } else {
                localStorage.setItem("error", "undefined");
            }
        }
        throw error;
    }
}

// Não está sendo utilizado ainda
export function useProfissionalData() {
    const query = useQuery({
        queryFn: fetchAllData,
        queryKey: [KEY],
        retry: 2,
    })

    return {
        ...query,
        data: query.data?.data
    }
}

export function useAllProfissionalData() {
    const query = useQuery({
        queryFn: fetchAllData,
        queryKey: [KEY],
        retry: 2
    })
    return {
        ...query,
        data: query.data?.data
    }
}