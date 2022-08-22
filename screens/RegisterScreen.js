import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from 'react'
import { Input , Text } from 'react-native-elements';
import { Button } from '@rneui/themed';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername]= useState('');
  const [imageUri, setImageUri] = useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  useLayoutEffect(() =>{
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    })
  }, [navigation])

  const register= () =>{
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
      authUser.user.updateProfile({
        displayName: username,
        photoURL:
        imageUri ||
        "https://toppng.com/uploads/preview/avatar-png-11554021730vd6yjirkxh.png",
      });
    })
    .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />

      <Text h3 style={{marginBottom: 50}}>
        Create an account
      </Text>

      <View style={styles.inputContainer}>
        <Input 
          placeholder='Enter your username'  type='text' value={username} onChangeText={(text) => setUsername(text)}
        />

        <Input 
          placeholder='Enter your Email'  type='text' value={email} onChangeText={(text) => setEmail(text)}
        />

        <Input 
          placeholder='Enter your Profile Image'  type='text' value={imageUri} onChangeText={(text) => setImageUri(text)}
        />

        <Input 
          placeholder='Enter your Password' secureTextEntry  type='text' value={password} onChangeText={(text) => setPassword(text)} //onSubmitEditing={register}
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