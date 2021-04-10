import React from 'react';

import GlobalStyle from './styles/global';

import Dashboard from './pages/Dashboard';

import { Container } from './styles';

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Dashboard />
    </Container>
  );
}
