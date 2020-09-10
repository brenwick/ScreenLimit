import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const UserScreen = () => {
    const urName = 'User Name Here';
    const urMethod = 'User Method Here';

    return (
        <View>
            <Text>User Screen</Text>
            <Text>This will great the user once they are completely logged in</Text>
            <Text> {urName} </Text>
            <Text> {urMethod} </Text>
            <Button title = 'User History' />
            <Button title = 'User Settings'/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default UserScreen;