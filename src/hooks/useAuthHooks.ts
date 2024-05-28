import axios, { AxiosPromise, AxiosResponse } from "axios"
import { userData } from "../interface/userData";
import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../config";


interface LoginData {
    email: string;
    password: string;
}

const postLogin = async ({ email, password }: LoginData): AxiosPromise<any> => {
    const loginData = { email, password };
    const response = await axios.post(API_URL + '/auth/login', loginData);
    return response;
};

export function useLogin() {
    const mutate = useMutation({
        mutationFn: postLogin,
        retry: 2,
        onSuccess: (data: AxiosResponse<any, any>) => {
            localStorage.setItem('token', data.data?.Token);
            //localStorage.setItem('token', "");
            localStorage.setItem('type', data.data?.type);
            localStorage.setItem('name', data.data?.name);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.data?.Token;
        }
    });

    return mutate;
}

// CADASTRO
const postRegister = async (data: userData): AxiosPromise<any> => {
    const response = await axios.post(API_URL + '/auth/register', data);
    return response;
} 

export function useRegister() {
    const mutate = useMutation({
        mutationFn: postRegister,
        retry: 2
    });

    return mutate;
}