import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CLIENTE_PATH, PROFISSIONAL_PATH } from '../../../routes/routes'
import { CLIENTE, PROFISSIONAL } from '../../../config';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../../../hooks/useAuthHooks';
import {
  ContentTextAndLink,
  LoginButton,
  LoginCard,
  LoginContentForgotPassword,
  LoginBoxActions,
  LoginBoxInputs,
  LoginLink,
  LoginTextField,
  LoginTitle,
  LoginAlert,
  Text
} from './styles';
import CustomButtonModal from '../../../modal/modal';

const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
  password: yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

const FormLogin: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const { mutate, isSuccess } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
      if(!isSuccess) return;
      if(localStorage.getItem('type') == CLIENTE){
          navigate(CLIENTE_PATH);
      } else if (localStorage.getItem('type') == PROFISSIONAL){
          navigate(PROFISSIONAL_PATH);
      }
  }, [isSuccess])

  const onSubmit = async (data: any) => {
    console.log(data);
    console.log(data.email);
    console.log(data.password);
    
    try {
      localStorage.setItem('token', "");
      localStorage.setItem('type', "");
      localStorage.setItem('name', "");

      localStorage.setItem('email', data.email);

      await mutate({ email: data.email, password: data.password });
    } catch (error) {
      navigate('/error/400');
    }
    reset();
  };

  return (
    <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onSubmit={handleSubmit(onSubmit)}>
      <LoginCard>
        <LoginBoxInputs>
            <LoginTitle>Login</LoginTitle>
            <LoginTextField
                id="email"
                label="E-mail"
                type="email"
                variant="outlined"
                error={!!errors.email}
                {...register('email')}
            />
            {errors.email && <LoginAlert severity='error'>{errors.email.message}</LoginAlert>}
            <LoginTextField
                id="password"
                label="Senha"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                error={!!errors.password}
                {...register('password')}
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
            {errors.password && <LoginAlert severity='error'>{errors.password.message}</LoginAlert>}
        </LoginBoxInputs>

        <LoginBoxActions>
            <LoginContentForgotPassword>
                <LoginLink>Esqueceu a senha?</LoginLink>
            </LoginContentForgotPassword>
            <LoginButton variant='outlined' type="submit">Entrar</LoginButton>
            <ContentTextAndLink component='div'>
              <Text>Não tem uma conta?</Text>
              <CustomButtonModal modalType="login"/>
            </ContentTextAndLink>
        </LoginBoxActions>
      </LoginCard>
    </form>
  );
};

export default FormLogin;
