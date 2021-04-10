import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin: 30px;
`;

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  border: 1px #ddd;
  padding: 0 20px;
  font-size: 16px;
  color: #444;
  height: 44px;
  margin-bottom: 20px;
  border-radius: 4px;
`;

export const Button = styled.TouchableOpacity`
  height: 42px;
  background: #f05a5b;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
