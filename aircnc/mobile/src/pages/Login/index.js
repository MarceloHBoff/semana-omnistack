import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import api from '../../services/api';

import logo from '../../assets/logo.png';
import {
  Container,
  Logo,
  Form,
  Label,
  Input,
  Button,
  ButtonText,
} from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    async function hasUser() {
      if (await AsyncStorage.setItem('user')) {
        navigation.navigate('List');
      }
    }

    hasUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit() {
    const response = await api.post('/session', { email });
    const { _id } = response.data;

    await AsyncStorage.setItem('user', _id);
    await AsyncStorage.setItem('techs', techs);

    navigation.navigate('List');
  }

  return (
    <Container>
      <Logo source={logo} />
      <Form>
        <Label>SEU E-MAIL</Label>

        <Input
          placeholder="Seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
        />

        <Label>TECNOLOGIAS</Label>
        <Input
          placeholder="Tecnologias de interesse"
          autoCapitalize="words"
          value={techs}
          onChangeText={setTechs}
          autoCorrect={false}
        />

        <Button onPress={handleSubmit}>
          <ButtonText>Encontrar spots</ButtonText>
        </Button>
      </Form>
    </Container>
  );
}
