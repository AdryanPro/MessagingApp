import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator();
//gobalScreenOptions is use to crete the style for the header of the screen can also do it in <Stack.Screen options={{ }} 
const gobalScreenOptions= {
  headerStyle : { backgroundColor: 'purple'},
  headerTitleStyle: { color: "white" },
  headerTintColor: "white"
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={gobalScreenOptions}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
