import { View, Text, ScrollView, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomListItem from '../components/CustomListItem'
import { Avatar } from "react-native-elements"
import { auth, db } from '../firebase'
import {AntDesign, SimpleLineIcons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {

    const signOutUser = () =>{
        auth.signOut().then(() =>{
            navigation.replace("Login");
        })
    }

    useLayoutEffect(() =>{
        navigation.setOptions({
            title: "ChatApp",
            headerStyle : { backgroundColor: 'white'},
            headerTitleStyle: {color: "black"},
            headerTintColor: 'black',
            headerLeft: () => (
                <View style={{ marginLeft: 20}}>
                    <TouchableOpacity acriveOpacity={0.5} onPress={signOutUser}>
                        <Avatar rounded source={{ uri: auth?.currentUser?.photoURL}} />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () =>(
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20,
                }}>
                    <TouchableOpacity activeOpacity={0.1}>
                        <AntDesign name='camera' size={24} color='black' />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.1}>
                        <SimpleLineIcons name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            )
        });
    }, []);

  return (
    <SafeAreaView>
        <ScrollView style={styles.Container}>
            <CustomListItem />
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    Container:{
        height: '100%',
    }
});