import { useState } from 'react';
import {
    ModalButton,
    ModalButtonClose,
    ModalText,
    ModalContainer,
    ModalContent,
    ModalTitle,
    Line,
    ContentImage,
    ContentButtons,
    ButtonAndText,
    ModalButtonOpen
} from './styles';

import {
    REGISTER_PATH
  } from '../utils/paths';

import colors from '../utils/colors';
import logo from '../assets/logo.webp';

import { Person as PersonIcon, Work } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { LoginLink } from '../shared/components/FormLogin/styles';


type ModalProps = {
    modalType: 'login' | 'signup' | '' ;
};

const CustomButtonModal: React.FC<ModalProps> = ({ modalType }) => {

    const [open, setOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('client');
    const navigate = useNavigate();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOptionSelect = (option: string) => {       
        setSelectedOption(option);

        if (option === 'client') {
            navigate(REGISTER_PATH+'/cliente');
        } else if (option === 'professional'){
            navigate(REGISTER_PATH+'/profissional');
        } else {
            navigate('/error/400');
        }
        handleClose();
    };

    return (
        <div>
            {
                modalType === 'login' ?
                    <LoginLink style={{ textAlign: 'center' }} onClick={handleOpen}>Faça seu Cadastro!</LoginLink>
                :
                modalType === '' ?
                    null
                :
                modalType === 'signup' ?
                    <ModalButtonOpen sx={{ color: colors.blueDark, border:`1px solid ${colors.blueDark}`}} variant="outlined" onClick={handleOpen}>
                        Quero me cadastrar
                    </ModalButtonOpen>
                :
                null
            }

            <ModalContainer open={open} onClose={handleClose}>
                <ModalContent>
                    <ContentImage component='div'>
                        <img src={logo} alt="logo" />
                    </ContentImage>
                    <Line />
                    <ModalTitle>Selecione como vai utilizar o sistema:</ModalTitle>
                    <ContentButtons>
                        <ButtonAndText>
                            <ModalButton
                                onClick={() => handleOptionSelect('client')} 
                                variant='contained'
                                sx={{
                                    backgroundColor: selectedOption === 'client' ? colors.blueDark : colors.light,
                                    trasition: 'all ease-in 0.5s',
                                    '&:hover': {
                                        backgroundColor: selectedOption === 'client' ? colors.blueDark : colors.light,
                                        opacity: 0.8
                                    }
                                }}
                            >
                                <PersonIcon sx={{ 
                                    color: selectedOption === 'client' ? colors.light : colors.blueDark, fontSize: '35px' 
                                }} />
                            </ModalButton>
                            <ModalText>Cliente</ModalText>
                        </ButtonAndText>

                        <ButtonAndText>
                            <ModalButton
                                onClick={() => handleOptionSelect('professional')}
                                variant='contained'
                                sx={{ 
                                    backgroundColor: selectedOption === 'professional' ? colors.blueDark : colors.light,
                                    trasition: 'all ease-in 0.5s',
                                    '&:hover': {
                                        backgroundColor: selectedOption === 'professional' ? colors.blueDark : colors.light,
                                        opacity: 0.8
                                    }
                                }}
                            >
                                <Work sx={{ color: selectedOption === 'professional' ? colors.light : colors.blueDark, fontSize: '35px' }}/>
                            </ModalButton>
                            <ModalText>Profissional</ModalText>
                        </ButtonAndText>
                    </ContentButtons>
                    
                </ModalContent>
                
                
            </ModalContainer>
        </div>
    );
};

export default CustomButtonModal;
