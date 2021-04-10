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

export const TotalCases = styled.Text`
  font-size: 15px;
  color: #737380;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: #13131a;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`;

export const List = styled.FlatList`
  margin-top: 32px;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 10px;
  background: #fff;
  margin-bottom: 16px;
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

export const DetailButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailButtonText = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;
