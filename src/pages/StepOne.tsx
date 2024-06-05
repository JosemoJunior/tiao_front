import { useState } from 'react';
import {
    ContentInputs,
    ContainerPasswordsStepOneContent,
    ContentStepTitlesAndText,
    StepOneContent,
    StepText,
    StepTitles,
    Inputs,
} from '../style/styles';

import { IconButton, Typography, Box, InputAdornment } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import colors from '../utils/colors';

//import { useForm } from 'react-hook-form';
//import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff, Email } from '@mui/icons-material';

const StepOne: React.FC<{ formData: any; setFormData: (data: any) => void }> = ({ formData, setFormData }) => {
    const [image, setImage] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
                setFormData({ ...formData, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {     
        setFormData({ ...formData, email: event.target.value });
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {       
        setFormData({ ...formData, password: event.target.value });
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, confirmPassword: event.target.value });
    };

    return (
        <>
            <ContentStepTitlesAndText>
                <StepTitles variant="h5">
                    Informações Cadastrais
                </StepTitles>
                <StepText variant='h6'>
                    Essas são suas informações para entrar na plataforma
                </StepText>
            </ContentStepTitlesAndText>

            <StepOneContent>
                <div style={{ textAlign: 'center' }}>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="upload-button-file"
                        type="file"
                        onChange={handleImageChange}
                    />
                    <Box
                        sx={{
                            width: 200,
                            height: 166,
                            border: `2px dashed ${colors.blueDark}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '20px auto',
                            overflow: 'hidden',
                        }}
                    >
                        {image ? (
                            <img src={image} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly',
                                }}
                                component='div'
                            >
                                <label htmlFor="upload-button-file">
                                    <IconButton sx={{ 
                                        width: '70px', 
                                        height: '70px', 
                                        borderRadius: '50%', 
                                        backgroundColor: colors.blueDark, 
                                        color: colors.light, 
                                        '&: hover': {
                                            backgroundColor: colors.blueDark,
                                            color: colors.light,
                                            opacity: 0.8
                                        }

                                    }} aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                    </IconButton>
                                </label>
                                <Typography variant="caption">Adicione sua foto</Typography>
                            </Box>
                        )}
                    </Box>
                </div>
                
                <ContentInputs>
                    <Inputs
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        size='small'
                        type='email'
                        sx={{ width: '100%' }}
                        required
                        value={formData.email}
                        onChange={handleEmailChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="email"                                
                                        edge="end"
                                    >
                                        <Email />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <ContainerPasswordsStepOneContent>
                        <Inputs
                            id="password"
                            label="Senha"
                            variant="outlined"
                            size='small'
                            required
                            sx={{ width: '100%' }}
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={handlePasswordChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Inputs
                            id="confirmPassword"
                            label="Confirme a senha"
                            variant="outlined"
                            size='small'
                            sx={{ width: '100%' }}
                            required
                            type={showPassword ? 'text' : 'password'}
                            value={formData.confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </ContainerPasswordsStepOneContent>
                </ContentInputs>

                
            </StepOneContent>
        </>
        
    )
}

export default StepOne;