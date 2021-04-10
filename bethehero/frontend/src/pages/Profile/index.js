import React, { useEffect, useState } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import { ButtonLink } from '~/components/Button';
import api from '~/services/api';

import { Container, Header, LogOut, Title, Incidents } from './styles';

export default function Profile() {
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function loadIncidents() {
      try {
        const response = await api.get('/incidents', {
          headers: { Authorization: ongId },
        });

        setIncidents(response.data);
      } catch (err) {
        alert('Erro ao carregar incidentes');
      }
    }
    loadIncidents();
  }, [ongId]);

  async function handleDelete(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: { Authorization: ongId },
      });

      setIncidents(incidents.filter(i => i.id !== id));
    } catch (err) {
      alert('Erro ao deletar caso');
    }
  }

  function handleLogOut() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <ButtonLink to="/incidents/new">Cadastrar novo caso</ButtonLink>
        <LogOut type="button" onClick={handleLogOut}>
          <FiPower size={18} color="#e02041" />
        </LogOut>
      </Header>

      <Title>Casos cadastrados</Title>
      <Incidents>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button type="button" onClick={() => handleDelete(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </Incidents>
    </Container>
  );
}
