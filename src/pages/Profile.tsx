import ProfileThree from './ProfileThree';
import photo from '../assets/Professions/trabM.png';
import { useUserData } from '../hooks/useUserData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    ContainerForm,
    Steps
} from '../style/styles';
import ProfileTop from './ProfileTop';
import FooterButtons2 from './FooterButtons2';

const Profile: React.FC = () => {
    const { email } = useParams<{ email: string }>();
    const { data } = useUserData(email || '');

    const [formData, setFormData] = useState({
        // Inicialização dos dados
        stepOneData: { email: '', image: '', fullName: '', phone1: '', phone2: ''   },
        stepThreeData: { profession: '', sinceWhen: '', about: '' }
    });

    useEffect(() => {
        if (data) {
            setFormData({
                stepOneData: {
                    email: data.email || '',
                    image: photo.toString(),
                    phone1: data.phone || '',
                    phone2: data.phone2 || '',
                    fullName: data.name || '',
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
        <ContainerForm>
            <Steps>
                <ProfileTop
                    formData={formData.stepOneData}
                    setFormData={newStepOneData => setFormData(prevState => ({ ...prevState, stepOneData: newStepOneData }))}
                />
            </Steps>

            <Steps>
                <ProfileThree
                    formData={formData.stepThreeData}
                    setFormData={newStepThreeData => setFormData(prevState => ({ ...prevState, stepThreeData: newStepThreeData }))}
                />
            </Steps>
            <FooterButtons2/>
        </ContainerForm>
    );
};

export default Profile;