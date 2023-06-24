import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import UnBundButtonEmail from './src/view/UnBundEmailButton';
import UnBundEmailAdress from './src/view/UnBundEmailAddress';
export default function App() {
  return (
    <View style={styles.container}>
      <UnBundEmailAdress />
      <UnBundButtonEmail />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 667,
    // width: 375,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
    backgroundColor: '#0000000f',
    alignItems: 'center',
  },
});
