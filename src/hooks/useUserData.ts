import axios, { AxiosPromise } from "axios"
import { userData } from "../interface/userData";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../config";

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

const KEY = 'user-data';

const fetchData = async (): AxiosPromise<userData> => {
    const email = localStorage.getItem('email');
    const emailData = { email: email };
    const response = axios.post(API_URL + '/user/profile', emailData);
    return response;
}

export function useUserData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: [KEY],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}