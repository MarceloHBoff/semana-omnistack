import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  margin-left: 30px;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 30px;
  }

  @media (max-width: 650px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`;

export const List = styled.li`
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 20px;

  p {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
  }

  a {
    color: #8e4dff;
    font-size: 14px;

    :hover {
      color: #5a2ea6;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  img {
    height: 54px;
    width: 54px;
    border-radius: 50%;
  }

  div {
    margin-left: 10px;

    strong {
      display: block;
      font-size: 16px;
      color: #333;
    }

    span {
      font-size: 13px;
      color: #999;
      margin-top: 2px;
    }
  }
`;
