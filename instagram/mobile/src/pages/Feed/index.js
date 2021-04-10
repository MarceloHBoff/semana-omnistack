import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import io from 'socket.io-client';

import { FlatList, View, Image } from 'react-native';

import more from '../../assets/more.png';
import comment from '../../assets/comment.png';
import like from '../../assets/like.png';
import send from '../../assets/send.png';

import {
  Container,
  FeedItem,
  FeedItemHeader,
  FeedItemFooter,
  FeedImage,
  Name,
  Place,
  Actions,
  Action,
  Description,
  Likes,
  Hashtags,
} from './styles';

function Feed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function loadFeed() {
      registerToSocket();

      const response = await api.get('posts');

      setFeed(response.data);
    }

    loadFeed();
  }, []);

  function registerToSocket() {
    const socket = io('http://localhost:3333');

    socket.on('post', (newPost) => setFeed([newPost, ...feed]));

    socket.on('like', (likedPost) => {
      setFeed((state) =>
        state.map((post) => (post._id == likedPost._id ? likedPost : post))
      );
    });
  }

  function handleLike(id) {
    api.post(`/posts/${id}/like`);
  }

  return (
    <Container>
      <FlatList
        data={feed}
        keyExtractor={(post) => post._id}
        renderItem={({ item }) => (
          <FeedItem>
            <FeedItemHeader>
              <View>
                <Name>{item.author}</Name>
                <Place>{item.place}</Place>
              </View>
              <Image source={more} />
            </FeedItemHeader>
            <FeedImage
              source={{ uri: `http://localhost:3333/files/${item.image}` }}
            />
            <FeedItemFooter>
              <Actions>
                <Action onPress={() => handleLike(item._id)}>
                  <Image source={like} />
                </Action>
                <Action onPress={() => {}}>
                  <Image source={comment} />
                </Action>
                <Action onPress={() => {}}>
                  <Image source={send} />
                </Action>
              </Actions>
              <Likes>{item.likes} curtidas</Likes>
              <Description>{item.description}</Description>
              <Hashtags>{item.hashtags}</Hashtags>
            </FeedItemFooter>
          </FeedItem>
        )}
      />
    </Container>
  );
}

export default Feed;
