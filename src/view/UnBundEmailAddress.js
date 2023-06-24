import React, { useState } from "react";
import { View } from "react-native";
import { TouchableOpacity, Text, Alert, TextInput, Modal } from 'react-native';
import styles, {textStyle} from "../style/UnBundEmailAddressStyle";

const UnBundEmailAdress =()=>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newEmail, setNewEmail] = useState('');
  
    const handleTextPress = () => { 
      setIsModalVisible(true);
    };
  
    const handleChangeEmail = () => {
      // Perform email change logic here
      Alert.alert('Success', `Email changed to : ${newEmail}`);
      setIsModalVisible(false); 
    };
  
    return(
        <>
          <Text style={styles.label}>当前邮箱号</Text>
          <TouchableOpacity onPress={handleTextPress} style={styles.emailContainer}>
            <Text style={[textStyle.text, styles.emailText]}>{newEmail !== '' ? newEmail : '139******@139.com'}</Text>
          </TouchableOpacity>

          <Modal visible={isModalVisible} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TextInput style={styles.input} placeholder="请输入新邮箱" onChangeText={(text) => setNewEmail(text)} value={newEmail}/>
                    <TouchableOpacity style={styles.submitButton} onPress={handleChangeEmail}>
                        <Text style={styles.submitButtonText}>提交</Text>
                    </TouchableOpacity>
                </View>
            </View>
           </Modal>
        </>
    )
}
export default UnBundEmailAdress;