import React, { useState } from "react";
import { TouchableOpacity, Text, Alert } from 'react-native';
import styles from "../style/UnBundEmailButtonStyle";

const UnBundButtonEmail = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleButtonPress = () => {
    setIsButtonPressed(true);
    Alert.alert('Success', 'Button is Pressed!');
  };

  return (
    <TouchableOpacity
      style={[styles.button, isButtonPressed && styles.buttonPressed]}
      onPress={handleButtonPress}
    >
      <Text style={[styles.buttonText, isButtonPressed && styles.buttonTextPressed]}>
        取消绑定
      </Text>
    </TouchableOpacity>
  );
};

export default UnBundButtonEmail;
