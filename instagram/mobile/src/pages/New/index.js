import React, { useState, useEffect } from 'react';
import ImagePicker from 'react-native-image-picker';

import api from '../../services/api';

import {
  Container,
  SelectButton,
  SelectButtonText,
  Input,
  Preview,
  ShareButton,
  ShareButtonText,
} from './styles';

function New({ navigation }) {
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState('');
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');

  useEffect(() => {
    navigation.setOptions({ title: 'New Post' });
  }, []);

  async function handleSubmit() {
    const data = new FormData();

    data.append('image', image);
    data.append('author', author);
    data.append('place', place);
    data.append('description', description);
    data.append('hashtags', hashtags);

    try {
      await api.post('posts', data);
    } catch (err) {
      console.log(err);
    }

    navigation.navigate('Feed');
  }

  function handleSelectImage() {
    ImagePicker.showImagePicker(
      {
        title: 'Selecionar imagem',
      },
      (upload) => {
        if (upload.error) {
          console.log('Error');
          console.log(upload.error);
        } else if (upload.didCancel) {
          console.log('User cancel');
        } else {
          const preview = {
            uri: `data:image/jpeg;base64,${upload.data}`,
          };

          let prefix, ext;

          if (upload.fileName) {
            [prefix, ext] = upload.fileName.split('.');

            ext = ext.toLowerCase() == 'heic' ? 'jpg' : ext;
          } else {
            prefix = new Date().getTime();

            ext = 'jpg';
          }

          const image = {
            uri: upload.uri,
            type: upload.type,
            name: `${prefix}.${ext}`,
          };

          setPreview(preview);
          setImage(image);
        }
      }
    );
  }

  return (
    <Container>
      <SelectButton onPress={handleSelectImage}>
        <SelectButtonText>Selecionar Imagem</SelectButtonText>
      </SelectButton>

      {preview && <Preview source={preview} />}

      <Input
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Nome"
        placeholderTextColor="#999"
        value={author}
        onChangeText={(author) => setAuthor(author)}
      />

      <Input
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Lugar"
        placeholderTextColor="#999"
        value={place}
        onChangeText={(place) => setPlace(place)}
      />

      <Input
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Descrição"
        placeholderTextColor="#999"
        value={description}
        onChangeText={(description) => setDescription(description)}
      />

      <Input
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Hashtags"
        placeholderTextColor="#999"
        value={hashtags}
        onChangeText={(hashtags) => setHashtags(hashtags)}
      />

      <ShareButton onPress={handleSubmit}>
        <ShareButtonText>Compartilhar</ShareButtonText>
      </ShareButton>
    </Container>
  );
}

export default New;
