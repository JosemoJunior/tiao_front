import axios, { AxiosPromise } from "axios"
import { userData } from "../interface/userData";
import { useQuery } from "@tanstack/react-query";

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<userData[]> => {
    const email = localStorage.getItem('email');
    const emailData = { email: email };
    const response = axios.post(API_URL + '/user/profile', emailData);
    return response;
}

export function useUserData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['user-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}