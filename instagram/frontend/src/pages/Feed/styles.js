import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Post = styled.article`
  background: #fff;
  border: 2px solid #ddd;
  margin-top: 30px;

  header {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > img {
    width: 100%;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Author = styled.span`
  font: 13px;
`;

export const Place = styled.span`
  font: 11px;
  color: blue;
  margin-top: 3px;
`;

export const Footer = styled.footer`
  padding: 20px;

  p {
    font: 13px;
    margin-top: 2px;
    line-height: 18px;

    span {
      color: rgb(0, 97, 187);
      margin-top: 2px;
      display: block;
    }
  }
`;

export const Actions = styled.div`
  margin-bottom: 10px;

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }

  img {
    height: 20px;
    margin-right: 10px;
  }
`;
