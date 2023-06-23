import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import ChangeEmail from './assets/components/email_components';
import { styles, textStyle } from './assets/components/design_components';

export default function App() {
  return (
    <View style={styles.container}>
     
      <ChangeEmail />
      <StatusBar style="auto" />
    </View>
  );
}
