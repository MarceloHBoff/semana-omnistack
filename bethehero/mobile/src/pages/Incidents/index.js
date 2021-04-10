import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Image } from 'react-native';

import {
  Container,
  Header,
  TotalCases,
  Title,
  Description,
  List,
  Incident,
  Head,
  Content,
  DetailButton,
  DetailButtonText,
} from './styles';

import api from '../../services/api';

import logo from '../../assets/logo.png';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function loadIncidents() {
    if (loading) return;

    if (total > 0 && incidents.length === total) return;

    setLoading(true);

    const response = await api.get('incidents', {
      params: { page },
    });

    setTotal(response.headers['x-total-count']);
    setIncidents([...incidents, ...response.data]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <TotalCases>Total de {total} casos</TotalCases>
      </Header>
      <Title>Bem vindo</Title>
      <Description>Escolha um caso e salve o dia</Description>
      <List
        data={incidents}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <Incident>
            <Head>ONG:</Head>
            <Content>{incident.name}</Content>
            <Head>CASO:</Head>
            <Content>{incident.title}</Content>
            <Head>VALOR:</Head>
            <Content>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </Content>
            <DetailButton onPress={() => navigateToDetail(incident)}>
              <DetailButtonText>Ver mais detalhes</DetailButtonText>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </DetailButton>
          </Incident>
        )}
      />
    </Container>
  );
}
