import ProfileThree from './ProfileThree';
import ProfileTwo from './ProfileTwo';
import ProfileOne from './ProfileOne';
import photo from '../assets/Professions/trabM.png'
import { useUserData } from '../hooks/useUserData';
import { useEffect, useState } from 'react';
import {
    ContainerForm,
    Steps
} from '../style/styles';


const FormSignUpProfessional = () => {

    const { data } = useUserData(localStorage.getItem('email')!);

    const [formData, setFormData] = useState({
        // Inicialização dos dados
        stepOneData: { email: '', image: '' },
        stepTwoData: { fullName: '', dateOfBirth: '', sex: '', cpf: '', phone1: '', phone2: '' },
        stepThreeData: { profession: '', sinceWhen: '', about: '' }
    });

    useEffect(() => {
        if (data) {
            setFormData({
                stepOneData: {
                email: data.email || '',
                image: photo.toString()
                },
                stepTwoData: {
                fullName: data.name || '',
                dateOfBirth: data.birthday || '',
                sex: '',
                cpf: data.cpf || '',
                phone1: data.phone || '',
                phone2: data.phone2 || ''
                },
                stepThreeData: {
                profession: data.profissoes![0].nome || '',
                sinceWhen: data.profissoes![0].dataInicio || '',
                about: data.bio || ''
                }
            });
        }
      }, [data]);

    


    return (
        <>

            <ContainerForm>
                <Steps>
                    <ProfileOne
                        formData={formData.stepOneData}
                        setFormData={newStepOneData => setFormData(prevState => ({ ...prevState, stepOneData: newStepOneData }))}
                    />
                </Steps>

                <Steps>
                    <ProfileTwo
                        formData={formData.stepTwoData}
                        setFormData={newStepTwoData => setFormData(prevState => ({ ...prevState, stepTwoData: newStepTwoData }))}
                    />
                </Steps>

                
                <Steps>
                    <ProfileThree
                        formData={formData.stepThreeData}
                        setFormData={newStepThreeData => setFormData(prevState => ({ ...prevState, stepThreeData: newStepThreeData }))}
                    />
                </Steps>
                

            </ContainerForm>
        </>
    )
};

export default FormSignUpProfessional;