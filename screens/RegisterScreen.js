import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from 'react'
import { Input , Text } from 'react-native-elements';
import { Button } from '@rneui/themed';

const RegisterScreen = ({ navigation }) => {
  const [lastName, setLastName]= useState('');
  const [firstName, setFirstName]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  useLayoutEffect(() =>{
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    })
  }, [navigation])

  const register= () =>{}
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />

      <Text h3 style={{marginBottom: 50}}>
        Create an account
      </Text>

      <View style={styles.inputContainer}>
        <Input 
          placeholder='First name'  type='text' value={firstName} onChangeText={(text) => setFirstName(text)}
        />

        <Input 
          placeholder='Last name'  type='text' value={lastName} onChangeText={(text) => setLastName(text)}
        />

        <Input 
          placeholder='Email'  type='text' value={email} onChangeText={(text) => setEmail(text)}
        />

        <Input 
          placeholder='Password' secureTextEntry  type='text' value={password} onChangeText={(text) => setPassword(text)} onSubmitEditing={register}
        />
      </View>

      <Button raised onPress={register} title="Register" />
      <View style={{height: 100}} />
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container :{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  button:{
    width: 200,
    marginTop: 10,
  },
  inputContainer:{
    width: 300,
  },
});