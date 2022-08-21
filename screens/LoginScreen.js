import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Button, Input, Image } from '@rneui/base'
import { StatusBar } from 'expo-status-bar'
import { auth } from '../firebase'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged((authUser) =>{
            if(authUser){
                navigation.replace('Home');
            }
        });

        return unsubscribe;
    }, []);

    const signIn = () =>{}
  return (
    <KeyboardAvoidingView behavior='padding'  style={styles.container}>
        <StatusBar style="light" />
        <Image source={{
            uri: "https://lezebre.lu/images/detailed/19/Tete_de_mort_3_37ph-9m.png"
        }} 
        style={{width: 100, height: 100 }}
        />
        <View style={styles.inputContainer}>
            <Input  placeholder='Email' type="email"  value={email} onChangeText={(text) => setEmail(text)} />
            <Input  placeholder='Password' secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)} />
        </View>
        <Button containerStyle={styles.button} title="Login" onPress={signIn} />
        <Button onPress={() => navigation.navigate('Register')} containerStyle={styles.button} title="Register" type='outline' />
    </KeyboardAvoidingView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
    inputContainer:{
        width: 300,
        marginTop: 10,
        color: 'red',
    },
    button: {
        width: 100,
        marginTop: 10
    },
    container:{
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },

});