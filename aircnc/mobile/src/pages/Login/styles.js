import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 15px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image``;

export const Form = styled.View`
  align-self: stretch;
  padding: 0 30px;
  margin-top: 20px;
`;

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
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
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
