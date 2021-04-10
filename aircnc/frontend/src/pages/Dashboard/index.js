import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import socketio from 'socket.io-client';
import api from '../../services/api';

import {
  Container,
  SpotList,
  Spot,
  Notification,
  Request,
  B,
  Accept,
  Reject,
  NewSpot,
} from './styles';

export default function Dashboard() {
  const [spots, setSpots] = useState([]);
  const [requests, setRequests] = useState([]);

  const user_id = localStorage.getItem('user');
  const socket = useMemo(
    () =>
      socketio('http://localhost:3333', {
        query: { user_id },
      }),
    [user_id]
  );

  useEffect(() => {
    socket.on('booking_rquest', data => {
      setRequests([...requests, data]);
    });
  }, [requests, socket]);

  useEffect(() => {
    async function loadSpot() {
      const response = await api.get('dashboard', {
        headers: { user_id },
      });

      setSpots(response.data);
    }
    loadSpot();
  }, [user_id]);

  async function handleAccept(id) {
    await api.post(`/bookings/${id}/approvals`);

    setRequests(requests.filter(r => r._id !== id));
  }

  async function handleReject(id) {
    await api.post(`/bookings/${id}/rejections`);

    setRequests(requests.filter(r => r._id !== id));
  }

  return (
    <Container>
      <Notification>
        {requests.map(request => (
          <Request key={request._id}>
            <p>
              <B>{request.user.email}</B> está solicitando uma reserva em
              <B> {request.spot.company}</B> para a data: <B>{request.date}</B>
            </p>
            <Accept onClick={() => handleAccept(request._id)}>ACEITAR</Accept>
            <Reject onClick={() => handleReject(request._id)}>REJEITAR</Reject>
          </Request>
        ))}
      </Notification>
      <SpotList>
        {spots.map(spot => (
          <Spot key={spot._id}>
            <img src={spot.thumbnail_url} alt={spot.company} />

            <strong>{spot.company}</strong>

            <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
          </Spot>
        ))}
      </SpotList>
      <Link to="/new">
        <NewSpot type="button">Cadastrar novo spot</NewSpot>
      </Link>
    </Container>
  );
}
