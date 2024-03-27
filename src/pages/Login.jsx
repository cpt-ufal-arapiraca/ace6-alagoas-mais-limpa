import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = ({ onLogin }) => {
    const navigate = useNavigate();

    const redirecionarParaRota = (rota) => {
        navigate(rota);
    };
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('/login', { username, password });
        onLogin(response.data.username); 
        } catch (error) {
        setError('Usuário ou senha inválida');
        }
    };

    return (
        <div>

        <h2><h1>Faça login ou crie sua conta</h1></h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin}>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Entrar</button>
        </form>
        
        <p>Não tem uma conta?</p>
        <button onClick={() => redirecionarParaRota('/criarConta')}>Criar</button>
        
        </div>
    );
    };

export default Login;