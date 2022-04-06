import { Logo } from 'assets/svgs';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import LongButton from 'shared/long-button';
import { styles } from './style';

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
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
        titleStyle={styles.titleStyle}
        buttonStyle={styles.loginButtonStyle}
      />
    </SafeAreaView>
  );
};

export default Onboarding;
