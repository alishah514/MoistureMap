import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/splash/SplashScreen';
import LoginScreen from '../screens/login/LoginScreen';
import EntryScreen from '../screens/entry/EntryScreen';
import RegisterScreen from '../screens/register/RegisterScreen';
import VerificationScreen from '../screens/verification/VerificationScreen';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Entry">
      <Stack.Screen name="Entry" component={EntryScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Verification" component={VerificationScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
