import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
    password: yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter no mínimo 6 caracteres'),

    
});