import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const LoginScreen = () => {
    return (
        <View>
            <Text>This is the "Login Screen"</Text>
            <Text>This screen is for returning users who hap[pened to be logged off.</Text>


            <Text>Manual Log In Credentials would go here</Text>
            <Text>Forgotten Password Check? would go here</Text>
            <Button title = 'New User?' />
            <Text> The button above should go to the New User Screen </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default LoginScreen;