import React, { useEffect, useState } from 'react';

import { Container, Group } from './styles';

import Input from '../Input';

export default function Form({ save }) {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      positon => {
        setLatitude(positon.coords.latitude);
        setLongitude(positon.coords.longitude);
      },
      err => {
        console.log(err);
      },
      { timeout: 30000 }
    );
  }, []);

  async function handleAddDev() {
    await save({ github_username, techs, latitude, longitude });

    setGithubUsername('');
    setTechs('');
  }

  return (
    <Container>
      <strong>Cadastrar</strong>
      <Input
        name="github_username"
        label="Usuário do Github"
        value={github_username}
        onChange={e => setGithubUsername(e.target.value)}
      />
      <Input
        name="techs"
        label="Tecnologias"
        value={techs}
        onChange={e => setTechs(e.target.value)}
      />
      <Group>
        <Input
          type="number"
          name="latitude"
          label="Latitude"
          value={latitude}
          onChange={e => setLatitude(e.target.value)}
        />
        <Input
          type="number"
          name="longitude"
          label="Longitude"
          value={longitude}
          onChange={e => setLongitude(e.target.value)}
        />
      </Group>
      <button type="button" onClick={handleAddDev}>
        Salvar
      </button>
    </Container>
  );
}
