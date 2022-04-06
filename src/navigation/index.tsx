import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './AuthNavigation';

const AppNavigation = () => {
  const Stack = createStackNavigator();

  const ActiveRoute = AuthRoutes;

  const { initialRoute, screenOptions } = AuthRoutes;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={screenOptions}>
        {ActiveRoute.routes.map((route, index) => (
          <Stack.Screen key={index} {...route} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
