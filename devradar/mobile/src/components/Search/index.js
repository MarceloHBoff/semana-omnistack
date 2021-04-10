import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Input, Button } from './styles';

export default function Search({ onClick, setTechs }) {
  return (
    <Container>
      <Input
        placeholder="Buscar devs por techs..."
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        onChangeText={setTechs}
        style={{
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: { width: 4, height: 4 },
          elevation: 4,
        }}
      />
      <Button onPress={onClick}>
        <MaterialIcons name="my-location" size={20} color="#fff" />
      </Button>
    </Container>
  );
}
