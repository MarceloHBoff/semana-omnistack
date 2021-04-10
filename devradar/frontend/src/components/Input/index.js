import React from 'react';

import { Container } from './styles';

export default function Input({ name, label, ...rest }) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} required {...rest} />
    </Container>
  );
}
