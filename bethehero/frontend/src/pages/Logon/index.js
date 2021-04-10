import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import heroesImg from '~/assets/heroes.png';
import logo from '~/assets/logo.svg';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { LinkTo } from '~/components/Link';
import api from '~/services/api';

import { Container, Section, Form } from './styles';

export default function SignIn() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogOn() {
    try {
      const response = await api.post('/session', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Erro ao fazer Log On');
    }
  }

  return (
    <Container>
      <Section>
        <img src={logo} alt="Be The Hero" />

        <Form>
          <h1>Faça seu logon</h1>
          <Input placeholder="Sua ID" onChange={e => setId(e.target.value)} />
          <Button type="button" onClick={handleLogOn}>
            Entrar
          </Button>

          <LinkTo to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </LinkTo>
        </Form>
      </Section>
      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
