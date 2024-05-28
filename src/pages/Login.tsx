import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useAuthHooks';
import { CLIENTE_PATH, PROFISSIONAL_PATH } from '../routes/routes'
import { CLIENTE, PROFISSIONAL } from '../config';
import '../style/Login.css';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            localStorage.setItem('token', "");
            localStorage.setItem('type', "");
            localStorage.setItem('name', "");

            await mutate({ email, password });
        } catch (error) {
            setError('Erro ao fazer login. Verifique suas credenciais.');
        }
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div className="login-container">
            <div className="card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="labelLog" htmlFor="email">Email:</label>
                        <input className="input-log"
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label-log" htmlFor="password">Senha:</label>
                        <input className="input-log"
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <button className="button-log" type="submit">Entrar</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Login;