import { profissaoData } from "./profissaoData";

export interface userData {
    name: string;
    email: string;
    password?: string;
    birthday: string; // tipo Date?
    phone: string;
    phone2?: string;
    cpf: string;
    bio?: string;
    type?: string;
    profissoes?: profissaoData[];
}