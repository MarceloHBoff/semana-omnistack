import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #444;
  padding: 0 20px;
  margin-bottom: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const List = styled.FlatList`
  padding: 0 20px;
`;

export const ListItem = styled.View`
  margin-right: 15px;
  padding: 2px;
`;

export const Thumbnail = styled.Image`
  width: 200px;
  height: 120px;
  border-radius: 2;
`;

export const Company = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
`;

export const Price = styled.Text`
  font-size: 15px;
  color: #999;
  margin-top: 5px;
`;

export const Button = styled.TouchableOpacity`
  height: 32px;
  background: #f05a5b;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
