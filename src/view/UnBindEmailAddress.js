import React from 'react';
import { View, Text } from 'react-native';
import styles, { textStyle } from '../style/UnBindEmailAddressStyle';

const UnBindEmailAddress = ({ emailAddress }) => {
    return (
        <>
            <Text style={styles.label}>当前邮箱号</Text>
            <View style={styles.emailContainer}>
                <Text style={[textStyle.text, styles.emailText]}>{emailAddress}</Text>
            </View>
        </>
    );
};
export default UnBindEmailAddress;
