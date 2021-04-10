import React, { useState } from 'react';
import { Alert, AsyncStorage } from 'react-native';
import api from '../../services/api';

import { Container, Label, Input, Button, ButtonText } from './styles';

export default function Book({ navigation }) {
  const [date, setDate] = useState('');
  const id = navigation.getParam('id');

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user');
    await api.post(
      `/spots/${id}/bookings`,
      { date },
      {
        headers: { user_id },
      }
    );

    Alert.alert('Solicitação de reserva enviada');
    navigation.navigate('List');
  }

  function handleCancel() {
    navigation.navigate('List');
  }

  return (
    <Container>
      <Label>DATA DE INTERESSE</Label>
      <Input
        placeholder="Data de interesse"
        autoCapitalize="words"
        value={date}
        onChangeText={setDate}
        autoCorrect={false}
      />
      <Button onPress={handleSubmit}>
        <ButtonText>Solicitar reserva</ButtonText>
      </Button>
      <Button onPress={handleCancel} style={{ backgroundColor: '#ccc' }}>
        <ButtonText>Cancelar</ButtonText>
      </Button>
    </Container>
  );
}
