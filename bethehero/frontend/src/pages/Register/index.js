import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { LinkTo } from '~/components/Link';
import api from '~/services/api';

import { Container, Content, Section, Form } from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const response = await api.post('/ongs', {
        name,
        email,
        whatsapp,
        city,
        uf,
      });

      history.push('/');

      alert(`Seu ID de acesso: ${response.data.id}`);
    } catch (err) {
      alert('Erro ao fazer cadastro');
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude a encontrarem os
            casos da sua ONG.
          </p>

          <LinkTo to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar ao cadastro
          </LinkTo>
        </Section>
        <Form onSubmit={handleRegister}>
          <Input
            placeholder="Nome da ONG"
            onChange={e => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="Whatsapp"
            onChange={e => setWhatsapp(e.target.value)}
          />
          <div>
            <Input
              placeholder="Cidade"
              onChange={e => setCity(e.target.value)}
            />
            <Input
              placeholder="UF"
              style={{ width: 80 }}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
