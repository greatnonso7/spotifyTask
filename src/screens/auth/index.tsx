import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './style';

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: '#fff' }}>Hello World</Text>
    </SafeAreaView>
  );
};

export default Onboarding;
