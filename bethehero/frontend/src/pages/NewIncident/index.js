import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import { Button } from '~/components/Button';
import { Input, TextArea } from '~/components/Input';
import { LinkTo } from '~/components/Link';
import api from '~/services/api';

import { Container, Content, Section, Form } from './styles';

export default function NewIncident() {
  const ongId = localStorage.getItem('ongId');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post(
        '/incidents',
        { title, description, value },
        {
          headers: { Authorization: ongId },
        }
      );

      history.push('/profile');
    } catch (err) {
      alert('Erro ao fazer cadastro');
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhamente para encontrar um herói para resolver
            isso.
          </p>

          <LinkTo to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </LinkTo>
        </Section>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Título do caso"
            onChange={e => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Descrição"
            onChange={e => setDescription(e.target.value)}
          />
          <Input
            placeholder="Valor em reais"
            onChange={e => setValue(e.target.value)}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
