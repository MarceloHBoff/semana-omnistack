import React from 'react';

import { Container, List, Header } from './styles';

export default function DevList({ devs }) {
  return (
    <Container>
      <ul>
        {devs.map(dev => (
          <List key={dev._id}>
            <Header>
              <img src={dev.avatar_url} alt={dev.name} />
              <div>
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
              </div>
            </Header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>
              Acessar perfil
            </a>
          </List>
        ))}
      </ul>
    </Container>
  );
}
