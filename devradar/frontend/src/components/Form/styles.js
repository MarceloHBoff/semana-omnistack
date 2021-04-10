import styled from 'styled-components';

export const Container = styled.aside`
  width: 320px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 30px 20px;

  @media (max-width: 1000px) {
    width: 100%;
  }

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;

    margin-bottom: 30px;
  }

  button {
    width: 100%;
    border: 0;
    background: #7d40e7;
    border-radius: 4px;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    transition: background 0.5;

    :hover {
      background: #6931ca;
    }
  }
`;

export const Group = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1rf;
`;
