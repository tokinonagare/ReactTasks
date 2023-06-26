import React from 'react';
import { View, Text } from 'react-native';
import styles, { textStyle } from '../style/UnBindEmailAddressStyle';
import { Localization } from 'laiwan_localization';

const UnBindEmailAddress = ({ emailAddress }) => {
    return (
        <>
            <Text style={styles.label}>{Localization.translate('current_email_account')}</Text>
            <View style={styles.emailContainer}>
                <Text style={[textStyle.text, styles.emailText]}>{emailAddress}</Text>
            </View>
        </>
    );
};
export default UnBindEmailAddress;
