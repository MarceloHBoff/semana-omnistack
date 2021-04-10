import React, { useEffect, useState } from 'react';

import Form from '../../components/Form';
import DevList from '../../components/DevList';
import api from '../../services/api';

export default function Dashboard() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();
  }, [devs]);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <>
      <Form save={handleAddDev} />
      <DevList devs={devs} />
    </>
  );
}
