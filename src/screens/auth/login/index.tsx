/* eslint-disable @typescript-eslint/no-unused-vars */
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Container from 'shared/container';
import HeaderBar from 'shared/header-bar';
import FormTextInput from 'shared/text-input';
import { colors } from 'styles/colors';
import { styles } from './style';

type AuthNavigationProps = StackNavigationProp<any, 'Login'>;

type Props = {
  navigation: AuthNavigationProps;
};

const Login = ({ navigation }: Props) => {
  return (
    <Container>
      <View>
        <HeaderBar
          onPressLeftIcon={() => navigation.goBack()}
          hasBackButton
          headerTitle="Log in"
          tintColor={colors.white}
        />

        <View style={styles.formContainer}>
          <FormTextInput label={'Email or username'} autoCapitalize="none" />
          <FormTextInput label={'Password'} autoCapitalize="none" />
        </View>
      </View>
    </Container>
  );
};

export default Login;
