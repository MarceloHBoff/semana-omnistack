import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { Alert, AsyncStorage } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import logo from '../../assets/logo.png';
import { Container, Logo } from './styles';

import SpotList from '../../components/SpotList';

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('user').then(user_id => {
      const socket = socketio('http://localhost:3333', { query: { user_id } });

      socket.on('booking_response', booking => {
        Alert.alert(
          `Sua reserva em ${booking.spot.company} em ${booking.date} foi ${
            booking.approved ? 'APROVADA' : 'REJEITADA'
          }`
        );
      });
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storageTechs => {
      const techArray = storageTechs.split(',').map(tech => tech.trim());
      setTechs(techArray);
    });
  }, []);

  return (
    <Container>
      <Logo source={logo} style={{ resizeMode: 'contain' }} />
      <ScrollView>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
    </Container>
  );
}
