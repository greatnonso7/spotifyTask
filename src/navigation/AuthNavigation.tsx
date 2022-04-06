/* eslint-disable @typescript-eslint/no-unused-vars */
import { StackNavigationOptions } from '@react-navigation/stack';
import Onboarding from 'screens/auth';
import Login from 'screens/auth/login';

const options: StackNavigationOptions = {
  headerShown: false,
};

export const AuthRoutes = {
  initialRoute: 'Onboarding',
  screenOptions: options,
  routes: [
    {
      name: 'Onboarding',
      component: Onboarding,
    },
    {
      name: 'Login',
      component: Login,
    },
  ],
};
