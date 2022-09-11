//import liraries
import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DATA = [
    {
      id: "1",
      title: "Vegetables",
      type: "Cabbage",
      price:"R25.00"
    },
    {
      id: "2",
      title: "Fruits",
      type: "Banana",
      price:"R15.00"
    },
    {
      id: "3",
      title: "Meat",
      type: "Short Ribs",
      price:"R55.00"
    },
    {
        id: "4",
        title: "Drinks",
        type: "Juice",
        price:"R17.00"
      },
  ];

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// create a component
const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                renderItem={({item})=>{
                    return (
                            <TouchableOpacity style = {{margin:15, padding:10, backgroundColor: '#FFD700', height: screenHeight/7}}>
                                <View>
                                    <Text style={styles.title}>
                                        {item.title}
                                    </Text>
                                    <Text style ={styles.type}>
                                        {item.type}
                                    </Text>
                                    <Text style = {styles.price}>
                                        {item.price}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                    )

                }}
            >

            </FlatList>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    title: {
        fontSize:20,
    },
    type: {
        fontSize:15,
    },
    price: {
        color:'green',
        weight:'Bold',
        fontSize:30,
    },
});

//make this component available to the app
export default Home;
