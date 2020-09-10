import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const MasterScreen = ({navigation}) => {
    return (
        <View>
            <Text>This Is The Master Screen</Text>
            <Text>This screen is main connection to all the other screens and will generally be used for quick Visual Editing and Testing. However, it will be removed when product is ready for release.</Text>

            <Button
                title = "Go To Login Screen"
                onPress = {() => navigation.navigate('Login')}
            />
            
            <Button
                title = "Go To New User Screen"
                onPress = {() => navigation.navigate('NUser')}
            />
            <Button
                title = "Go To New User Profile Screen"
                onPress = {() => navigation.navigate('NProfile')}
            />
            <Button
                title = "Go To Trial Screen"
                onPress = {() => navigation.navigate('Trial')}
            />
            <Button
                title = "Go To User Screen"
                onPress = {() => navigation.navigate('User')}
            />
            <Button
                title = "Go To History Screen"
                onPress = {() => navigation.navigate('History')}
            />
            <Button
                title = "Go To Settings Screen"
                onPress = {() => navigation.navigate('Setting')}
            />
            <Button
                title = "Go To App Selection Screen"
                onPress = {() => navigation.navigate('AppPrep')}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default MasterScreen;