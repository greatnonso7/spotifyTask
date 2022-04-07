/* eslint-disable @typescript-eslint/no-unused-vars */
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Container from 'shared/container';
import HeaderBar from 'shared/header-bar';
import LongButton from 'shared/long-button';
import FormTextInput from 'shared/text-input';
import { colors } from 'styles/colors';
import { onLogin } from 'utils/auth-handler';
import { styles } from './style';

type AuthNavigationProps = StackNavigationProp<any, 'Login'>;

type Props = {
  navigation: AuthNavigationProps;
};

const Login = ({ navigation }: Props) => {
  const [show, setShow] = useState<boolean>(true);
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
          <FormTextInput
            label={'Password'}
            autoCapitalize="none"
            isPassword
            show={show}
            showPassword={() => setShow(!show)}
          />
        </View>

        <LongButton
          isNotBottom
          onPress={() => onLogin()}
          buttonStyle={styles.buttonStyle}
          title="Log in"
        />
      </View>
    </Container>
  );
};

export default Login;
