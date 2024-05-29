import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { CLIENTE_PATH, PROFISSIONAL_PATH } from '../routes/routes'
import { CLIENTE, PROFISSIONAL } from '../config';
import { profissaoData } from '../interface/profissaoData';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../hooks/useAuthHooks';
import { userData } from '../interface/userData';
import '../style/Login.css';


function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [phone2, setPhone2] = useState('');
    const [bio, setBio] = useState('');
    const [profissoes, setProfissoes] = useState<profissaoData[]>([]);
    
    //const [photo, setPhoto] = useState('');
    //const [sex, setSex] = useState('');
    
    const [error, setError] = useState('');

    const { mutate, isSuccess } = useRegister();
    const navigate = useNavigate();

    enum ProfissaoEnum {
        EngenheiroCivil = 'Engenheiro Civil',
        Arquiteto = 'Arquiteto'
    }

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
            localStorage.setItem('name', "");

            localStorage.setItem('email', email);
            localStorage.setItem('type', "P");
            const type = localStorage.getItem('type') ?? "";

            const newUser: userData = { name, password, email, phone, phone2, birthday,
                                        cpf, bio, type, profissoes };

            await mutate(newUser);
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

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleBirthdayChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBirthday(e.target.value);
    };

    const handleCPFChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCpf(e.target.value);
    };

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    const handlePhone2Change = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone2(e.target.value);
    };

    const handleBioChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBio(e.target.value);
    };


    const handleProfissaoChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        const updatedProfissoes = [...profissoes];
        updatedProfissoes[index].nome = e.target.value;
        setProfissoes(updatedProfissoes);
    };

    const handleDataInicioChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        const updatedProfissoes = [...profissoes];
        updatedProfissoes[index].dataInicio = e.target.value;
        setProfissoes(updatedProfissoes);
    };

    const addProfissao = () => {
        setProfissoes([...profissoes, { nome: '', dataInicio: '' }]);
    };
    
    return (
        <div className="login-container">
            <div className="card">
                <h2>Cadastro</h2>
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
                    <div className="form-group">
                        <label className="label-log" htmlFor="name">Nome:</label>
                        <input className="input-log"
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label-log" htmlFor="birthday">Data de Nascimento:</label>
                        <input className="input-log"
                            type="date"
                            id="birthday"
                            value={birthday}
                            onChange={handleBirthdayChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label-log" htmlFor="cpf">CPF:</label>
                        <input className="input-log"
                            type="text"
                            id="cpf"
                            value={cpf}
                            onChange={handleCPFChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label-log" htmlFor="phone">Telefone:</label>
                        <input className="input-log"
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label-log" htmlFor="phone2">Telefone 2:</label>
                        <input className="input-log"
                            type="text"
                            id="phone2"
                            value={phone2}
                            onChange={handlePhone2Change}
                        />
                    </div>
                    <div className="form-group">
                        <label className="label-log" htmlFor="bio">Biografia:</label>
                        <input className="input-log"
                            type="text"
                            id="bio"
                            value={bio}
                            onChange={handleBioChange}
                        />
                    </div>
                    {profissoes.map((profissao, index) => (
                        <div key={index}>
                            <div className="form-group">
                                <label className="label-log" htmlFor={`profissao-${index}`}>
                                    Profissão {index + 1}:
                                </label>
                                <input
                                    className="input-log"
                                    type="text"
                                    id={`profissao-${index}`}
                                    value={profissao.nome}
                                    onChange={(e) => handleProfissaoChange(index, e)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="label-log" htmlFor={`dataInicio-${index}`}>
                                    Data de Início {index + 1}:
                                </label>
                                <input
                                    className="input-log"
                                    type="date"
                                    id={`dataInicio-${index}`}
                                    value={profissao.dataInicio}
                                    onChange={(e) => handleDataInicioChange(index, e)}
                                    required
                                />
                            </div>
                        </div>
                    ))}
                    <button className="button-log" type="button" onClick={addProfissao}>Adicionar Profissão</button>
                    <button className="button-log" type="submit">Cadastrar</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Register;