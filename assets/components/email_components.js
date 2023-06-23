import React, { useState } from "react";
import { View, Button } from "react-native";
import { TouchableOpacity, Text, Alert, StyleSheet, TextInput, Modal } from 'react-native';
import { textStyle } from './design_components';

const ChangeEmail = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newEmail, setNewEmail] = useState('');

  const handleButtonPress = () => {
    setIsButtonPressed(true);
  };

  const handleTextPress = () => {
    setIsModalVisible(true);
  };

  const handleChangeEmail = () => {
    // Perform email change logic here
    Alert.alert('Success', `Email changed to ${newEmail}`);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>当前邮箱号</Text>
      <TouchableOpacity onPress={handleTextPress} style={styles.emailContainer}>
        <Text style={[textStyle.text, styles.emailText]}>{newEmail !== '' ? newEmail : '139******@139.com'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, isButtonPressed && styles.buttonPressed]}
        onPress={handleButtonPress}
      >
        <Text style={[styles.buttonText, isButtonPressed && styles.buttonTextPressed]}>
          取消绑定
        </Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="请输入新邮箱"
              onChangeText={(text) => setNewEmail(text)}
              value={newEmail}
            />
            <TouchableOpacity style={styles.submitButton} onPress={handleChangeEmail}>
              <Text style={styles.submitButtonText}>提交</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  emailContainer: {
    marginTop: 10,
  },
  emailText: {
    textAlign: 'center',
  },
  button: {
    marginTop: 420,
    width: 300,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#5271FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#5271FF',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  buttonTextPressed: {
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: '#5271FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ChangeEmail;
