import { Logo } from 'assets/svgs';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './style';

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
    </SafeAreaView>
  );
};

export default Onboarding;
