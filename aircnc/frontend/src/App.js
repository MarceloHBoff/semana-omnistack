import React from 'react';

import Routes from './routes';

import GlobalStyle from './styles/global';

import { Container, Content } from './styles';
import logo from './assets/logo.svg';

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <img src={logo} alt="Aircnc" />
      <Content>
        <Routes />
      </Content>
    </Container>
  );
}
