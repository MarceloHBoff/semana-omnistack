import React, { useState, useEffect } from 'react';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { Marker, Callout } from 'react-native-maps';

import api from '../../services/api';
import { connect, disconnect, subscribeToNewDevs } from '../../services/socket';

import {
  Container,
  Map,
  Avatar,
  CalloutWrapper,
  Name,
  Bio,
  Techs,
} from './styles';
import Search from '../../components/Search';

export default function Dashboard({ navigation }) {
  const [techs, setTechs] = useState('');
  const [devs, setDevs] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const location = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = location.coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }
    loadInitialPosition();
  }, []);

  useEffect(() => {
    subscribeToNewDevs(dev => setDevs([...devs, dev]));
  }, [devs]);

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    try {
      const reponse = await api.get('/search', {
        params: {
          latitude,
          longitude,
          techs,
        },
      });

      setDevs(reponse.data);

      disconnect();
      connect(latitude, longitude, techs);
    } catch (err) {
      console.log(err.message);
    }
  }

  function handleReionChange(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) return null;

  return (
    <Container>
      <Map
        onRegionChangeComplete={handleReionChange}
        initialRegion={currentRegion}
      >
        {devs.map(dev => (
          <Marker
            key={dev._id}
            coordinate={{
              latitude: dev.location.coordinates[1],
              longitude: dev.location.coordinates[0],
            }}
          >
            <Avatar source={{ uri: dev.avatar_url }} />
            <Callout
              onPress={() =>
                navigation.navigate('Profile', {
                  github_username: dev.github_username,
                })
              }
            >
              <CalloutWrapper>
                <Name>{dev.name}</Name>
                <Bio>{dev.bio}</Bio>
                <Techs>{dev.techs.join(', ')}</Techs>
              </CalloutWrapper>
            </Callout>
          </Marker>
        ))}
      </Map>
      <Search onClick={loadDevs} setTechs={setTechs} />
    </Container>
  );
}
