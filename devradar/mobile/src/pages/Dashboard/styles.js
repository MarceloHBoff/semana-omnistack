import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Map = styled(MapView)`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`;

export const Avatar = styled.Image`
  width: 54;
  height: 54;
  border-radius: 4px;
  border-width: 4px;
  border-color: #fff;
`;

export const CalloutWrapper = styled.View`
  width: 260px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const Bio = styled.Text`
  color: #666;
  margin-top: 5px;
`;

export const Techs = styled.Text`
  margin-top: 5px;
`;
