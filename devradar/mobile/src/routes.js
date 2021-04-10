import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

export default createAppContainer(
  createStackNavigator(
    {
      Dashboard: {
        screen: Dashboard,
        navigationOptions: {
          title: 'DevRadar',
        },
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: 'Perfil',
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#7d40e7',
        },
      },
    }
  )
);
