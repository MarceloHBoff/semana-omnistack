import React, { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

function New() {
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState('');
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();

    data.append('image', image);
    data.append('author', author);
    data.append('place', place);
    data.append('description', description);
    data.append('hashtags', hashtags);

    await api.post('posts', data);

    history.push('/');
  }

  return (
    <Container onSubmit={handleSubmit}>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <input
        type="text"
        name="author"
        placeholder="Autor do post"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      />

      <input
        type="text"
        name="place"
        placeholder="Lugar"
        onChange={(e) => setPlace(e.target.value)}
        value={place}
      />

      <input
        type="text"
        name="description"
        placeholder="Descrição"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <input
        type="text"
        name="hashtags"
        placeholder="Hashtags"
        onChange={(e) => setHashtags(e.target.value)}
        value={hashtags}
      />

      <button type="submit">Enviar</button>
    </Container>
  );
}

export default New;
