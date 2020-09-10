import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const NewUserScreen = () => {
    return (
        <View>
            <Text>New User Screen</Text>
            <Text> This is the first screen users will see. Buttons are self explanatory.</Text>


            <Text>Here's A short About Us</Text>
            <Button title = 'Create A Profile' />
            <Button title = 'Try The Test Trial' />
            <Button title = 'Returning User?' />
        </View>
    );
};

const styles = StyleSheet.create({});

export default NewUserScreen;