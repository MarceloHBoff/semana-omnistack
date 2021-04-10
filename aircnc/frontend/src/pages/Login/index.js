import React, { useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';

export default function Login({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/session', { email });

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }

  return (
    <Container>
      <p>
        Ofereça spots para programadores e encontre talentos para sua empresa
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="Seu email"
          value={email}
          autoComplete={false}
          onChange={event => setEmail(event.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}
