import {
    createSwitchNavigator,
    createStackNavigator,
  } from 'react-navigation';
  import { default as ROUTES } from '../constants/routeNames';
  
  // Screens
  import {
    Home,
    Main
  } from '../screens';
  
  const stackNavigatior = createStackNavigator(
    {
      [ROUTES.SCREENS.HOME]: {
        screen: Home,
        navigationOptions: {
          header: () => null,
        },
      },
      [ROUTES.SCREENS.MAIN]: {
        screen: Main,
        navigationOptions: {
          header: () => null,
        },
      },
    },
    {
      headerMode: 'none',
    },
  );
  
  export default createSwitchNavigator({
    stackNavigatior,
  });
  