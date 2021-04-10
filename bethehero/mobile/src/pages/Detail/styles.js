import styled from 'styled-components/native';
import Contants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: ${Contants.statusBarHeight + 20}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 10px;
  background: #fff;
  margin-top: 48px;
`;

export const Head = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;

export const Content = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: #737380;
`;

export const ContactBox = styled(Incident)`
  margin-top: 10px;
`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled.TouchableOpacity`
  background: #e02041;
  border-radius: 10px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #fff;
`;
