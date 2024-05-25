import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { userData } from '../interface/userData';

const API_URL = 'http://localhost:8080';

const postData = async (data: userData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/user/profile', data);
    return response;
}

export function useFoodDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['food-data']});
        }
    })

    return mutate;
}