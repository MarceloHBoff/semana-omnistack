import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Image, TouchableOpacity, Linking } from 'react-native';
import * as MailCompose from 'expo-mail-composer';

import {
  Container,
  Header,
  Incident,
  Head,
  Content,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ActionText,
} from './styles';

import logo from '../../assets/logo.png';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { incident } = route.params;

  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de ${Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(incident.value)}`;

  function sendMail() {
    MailCompose.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  }

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </Header>
      <Incident>
        <Head>ONG:</Head>
        <Content>
          {incident.name} de {incident.city}/{incident.uf}
        </Content>
        <Head>CASO:</Head>
        <Content>{incident.title}</Content>
        <Head>VALOR:</Head>
        <Content style={{ marginBottom: 0 }}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident.value)}
        </Content>
      </Incident>
      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>
        <HeroDescription>Entre em contato:</HeroDescription>
        <Actions>
          <Action onPress={sendWhatsapp}>
            <ActionText>Whatsapp</ActionText>
          </Action>
          <Action onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
