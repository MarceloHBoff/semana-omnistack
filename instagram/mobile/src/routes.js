import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image } from 'react-native';

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png';
import camera from './assets/camera.png';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={({ navigation }) => ({
            headerTitle: <Image source={logo} />,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('New')}>
                <Image style={{ marginHorizontal: 20 }} source={camera} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="New" component={New} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
