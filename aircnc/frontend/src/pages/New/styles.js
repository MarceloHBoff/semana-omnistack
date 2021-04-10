import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 16px;
      margin-bottom: 8px;
      font-weight: bold;
    }

    input {
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 10px;
      margin: 5px 0;
      padding: 10px;
    }

    button {
      margin-top: 20px;
      font-size: 16px;
      width: 100%;
      height: 36px;
      border: 0;
      background: #f05a5b;
      color: #fff;
      font-weight: bold;

      &:hover {
        background: #e14f50;
      }
    }
  }
`;

export const Image = styled.label`
  margin-bottom: 20px;
  height: 200px;
  border: 2px solid #ddd;
  background-size: cover;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    display: none;
  }
`;
