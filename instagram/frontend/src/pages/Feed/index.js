import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import io from 'socket.io-client';

import {
  Container,
  Post,
  UserInfo,
  Author,
  Place,
  Footer,
  Actions,
} from './styles';

import more from '../../images/more.svg';
import like from '../../images/like.svg';
import comment from '../../images/comment.svg';
import send from '../../images/send.svg';

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

    socket.on('post', (newPost) => {
      setFeed([newPost, ...feed]);
    });

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
      {feed.map((post) => (
        <Post key={post._id}>
          <header>
            <UserInfo>
              <Author>{post.author}</Author>
              <Place>{post.place}</Place>
            </UserInfo>
            <img src={more} alt="Mais" />
          </header>

          <img
            className="foto"
            src={`http://localhost:3333/files/${post.image}`}
            alt="Foto"
          />

          <Footer>
            <Actions>
              <button type="button" onClick={() => handleLike(post._id)}>
                <img src={like} alt="Like" />
              </button>
              <img src={comment} alt="Comentário" />
              <img src={send} alt="Enviar" />
            </Actions>
            <strong>{`${post.likes} likes`}</strong>
            <p>
              {post.description}
              <span>{post.hashtags}</span>
            </p>
          </Footer>
        </Post>
      ))}
    </Container>
  );
}

export default Feed;
