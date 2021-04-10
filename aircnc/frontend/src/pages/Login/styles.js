import styled from 'styled-components';

export const Container = styled.div`
  p {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 16px;
      margin-bottom: 8px;
      font-weight: bold;
    }

    input {
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
