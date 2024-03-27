// SignUp.js
import React, { useState } from 'react';
import axios from 'axios';

const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', { username, password });
      onSignUp(response.data.username); 
    } catch (error) {
      setError('Não foi possível criar conta. Tente novamente');
    }
  };

  return (
    <div>
      <h2>Crie sua conta</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default SignUp;