import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from "./src/pages/login"
import CadastroPage from './src/pages/cadastro';
import HomePage from './src/pages/home';
import Toast from "react-native-toast-message";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
       headerShown: false
      }} initialRouteName="login">
        <Stack.Screen name="login" component={LoginPage} />

        <Stack.Screen name="cadastro" component={CadastroPage} />

        <Stack.Screen name="home" component={HomePage} />
      </Stack.Navigator>

      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}
