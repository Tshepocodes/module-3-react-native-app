//import liraries
import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const screenHeight = Dimensions.get('window').height;
// create a component
const RecoverPassword = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style = {styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email address!"
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() =>{navigation.navigate('Login Page')}}
            >
                <Text>Recover Password</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
      },
    button: {
        alignItems: "center",
        backgroundColor: "#FFD700",
        padding: 10,
        margin: 10,
        borderRadius: 20,
    },
    form: {
        margin: 5,
        paddingTop: screenHeight/3,

    }
});

//make this component available to the app
export default RecoverPassword;
