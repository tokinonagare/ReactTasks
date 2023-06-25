import React from 'react';
import { StatusBar, View, StyleSheet, Alert } from 'react-native';
import UnBindButtonEmail from './src/view/UnBindEmailButton';
import UnBindEmailAddress from './src/view/UnBindEmailAddress';

const DEFAULT_EMAIl_ADDRESS = '139******@139.com'

export default function App() {
    const onPress = () => {
        Alert.alert('Success', `Email is : ${DEFAULT_EMAIl_ADDRESS}`);
    }

  return (
    <View style={styles.container}>
      <UnBindEmailAddress emailAddress={DEFAULT_EMAIl_ADDRESS}/>
      <UnBindButtonEmail onPress={onPress}/>
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
