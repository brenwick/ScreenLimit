import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SettingScreen = () => {
    return (
        <View>
            <Text>Setting Screen</Text>
            <Text>Here Users should be able to update their profile due to their change in preference or by making a mistake in selecting their desired methods and/or apps to watch.</Text>

            <Button title = 'Change User Name Method' />
            <Button title = 'Change Password Method' />
            <Button title = 'Change Desired Method' />
            <Button title = 'Change Apps to Watch' />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SettingScreen;