/* eslint-disable @typescript-eslint/no-unused-vars */
import { StackNavigationProp } from '@react-navigation/stack';
import { Logo } from 'assets/svgs';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Container from 'shared/container';
import LongButton from 'shared/long-button';
import { styles } from './style';

type AuthNavigationProps = StackNavigationProp<any, 'Onboarding'>;

type Props = {
  navigation: AuthNavigationProps;
};

const Onboarding = ({ navigation }: Props) => {
  return (
    <Container>
      <View>
        <View style={styles.logoContainer}>
          <Logo />
        </View>

        <Text style={styles.headerText}>
          Millions of Songs. {'\n'}Free on Spotify.
        </Text>

        <LongButton
          isNotBottom
          title="Sign up free"
          buttonStyle={styles.buttonStyle}
        />
        <LongButton
          title="Log in"
          isNotBottom
          onPress={() => navigation.navigate('Login')}
          titleStyle={styles.titleStyle}
          buttonStyle={styles.loginButtonStyle}
        />
      </View>
    </Container>
  );
};

export default Onboarding;
