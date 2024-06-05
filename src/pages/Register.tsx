import {
    ContainerText,
    TextOfContainer,
    ContainerForm,
    Steps
} from '../style/styles';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import FooterButtons from './FooterButtons';
import { useEffect, useState } from 'react';
import { CLIENTE_PATH, PROFISSIONAL_PATH } from '../routes/routes'
import { CLIENTE, PROFISSIONAL } from '../config';
import { Link, useNavigate } from 'react-router-dom';
import { useRegister } from '../hooks/useAuthHooks';
import { userData } from '../interface/userData';

type RegisterProps = {
    type: 'P' | 'C' | '' ;
};
const FormSignUpProfessional: React.FC<RegisterProps> = ({ type }: RegisterProps) => {

    const { mutate, isSuccess } = useRegister();
    const navigate = useNavigate();
    const isProfissional = (type == PROFISSIONAL);

    const [formData, setFormData] = useState({
        // Inicialização dos dados
        stepOneData: { email: '', password: '', confirmPassword: '', image: null },
        stepTwoData: { fullName: '', dateOfBirth: '', sex: '', cpf: '', phone1: '', phone2: '' },
        stepThreeData: { profession: '', sinceWhen: '', about: '' }
    });

    useEffect(() => {
        if(!isSuccess) return;
        if(localStorage.getItem('type') == CLIENTE){
            navigate(CLIENTE_PATH);
        } else if (localStorage.getItem('type') == PROFISSIONAL){
            navigate(PROFISSIONAL_PATH);
        }
    }, [isSuccess])
   
    const handleSubmit = async () => {

        // Extrair os dados de formData
        const { email, password, image } = formData.stepOneData;
        const { fullName, sex, phone1, phone2, dateOfBirth, cpf } = formData.stepTwoData;
        const { profession, about, sinceWhen } = formData.stepThreeData;

        //e.preventDefault();
        console.log('Dados do formulário:', formData);
        try {
            localStorage.setItem('token', "");
            localStorage.setItem('name', "");

            localStorage.setItem('email', formData.stepOneData.email);
            //const type = localStorage.getItem('type')!;

            const newUser: userData = {
                email: email,
                password: password,
                phone: phone1,
                phone2: phone2,
                birthday: dateOfBirth,
                cpf: cpf,
                bio: about,
                type: type, 
                name: fullName,
                // sex: sex
                // photo: image
                profissoes: profession ? [{ nome: profession, dataInicio: sinceWhen }] : undefined
            };

            console.log('Dados do newUser', newUser);
            await mutate(newUser);
        } catch (error) {
            console.log('Erro ao fazer login. Verifique suas credenciais.');
        }
    };

    return (
        <>
            <ContainerText>
                <TextOfContainer>
                    Faça seu cadastro
                </TextOfContainer>
            </ContainerText>

            <ContainerForm>
                <Steps>
                    <StepOne
                        formData={formData.stepOneData}
                        setFormData={newStepOneData => setFormData(prevState => ({ ...prevState, stepOneData: newStepOneData }))}
                    />
                </Steps>

                <Steps>
                    <StepTwo
                        formData={formData.stepTwoData}
                        setFormData={newStepTwoData => setFormData(prevState => ({ ...prevState, stepTwoData: newStepTwoData }))}
                    />
                </Steps>

                { isProfissional && 
                    <Steps>
                        <StepThree
                            formData={formData.stepThreeData}
                            setFormData={newStepThreeData => setFormData(prevState => ({ ...prevState, stepThreeData: newStepThreeData }))}
                        />
                    </Steps>
                }

                <FooterButtons onSubmit={handleSubmit} />
            </ContainerForm>
        </>
    )
};

export default FormSignUpProfessional;