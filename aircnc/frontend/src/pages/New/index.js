import React, { useState, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '../../services/api';

import camera from '../../assets/camera.svg';
import { Container, Image } from './styles';

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(data) {
    const user_id = localStorage.getItem('user');
    const file = new FormData();

    file.append('thumbnail', thumbnail);
    file.append('company', data.company);
    file.append('techs', data.techs);
    file.append('price', data.price);

    await api.post('/spots', file, {
      headers: { user_id },
    });

    history.push('/dashboard');
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Image style={{ backgroundImage: `url(${preview}` }}>
          <input
            type="file"
            onChange={event => setThumbnail(event.target.files[0])}
          />
          {preview ? null : <img src={camera} alt="Selecione uma imagem" />}
        </Image>

        <label htmlFor="company">Empresa</label>
        <Input
          id="company"
          autoComplete={false}
          name="company"
          placeholder="Sua empresa"
        />

        <label htmlFor="techs">Tecnologias</label>
        <Input id="techs" name="techs" placeholder="Quais tecnologias usam?" />

        <label htmlFor="price">Valor da diária</label>
        <Input id="price" name="price" placeholder="Qual o valor da diária?" />

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}
