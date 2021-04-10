import styled from 'styled-components';

export const Container = styled.div``;

export const SpotList = styled.ul`
  width: 100%;
  display: grid;
  list-style: none;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
`;

export const Spot = styled.li`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 120px;
    background-size: cover;
    border-radius: 10px;
  }

  strong {
    margin-top: 10px;
    font-size: 24px;
    color: #444;
  }

  span {
    font-size: 15px;
    color: #999;
  }
`;

export const Notification = styled.ul`
  list-style: none;
  margin-bottom: 15px;
`;

export const Request = styled.li`
  font-size: 16px;
  line-height: 24px;
`;

export const B = styled.strong``;

export const Accept = styled.button`
  margin-right: 10px;
  border: 0;
  font-weight: bold;
  margin-top: 10px;
  color: #84c870;
  background: none;
`;

export const Reject = styled.button`
  margin-right: 10px;
  border: 0;
  font-weight: bold;
  margin-top: 10px;
  color: #e55e5e;
  background: none;
`;

export const NewSpot = styled.button`
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
`;
