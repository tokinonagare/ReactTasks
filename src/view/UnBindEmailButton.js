import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../style/UnBindEmailButtonStyle';

const UnBindButtonEmail = ({ onPress }) => {
    const [isButtonPressed, setIsButtonPressed] = useState(false);

    const handleButtonPress = () => {
        setIsButtonPressed(true);
        onPress();
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

export default UnBindButtonEmail;
