import React from 'react';
import GetStartedScreen from '../../Screens/GetStarted';
import LoginScreen from '../../Screens/Login';
import SignUpScreen from '../../Screens/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const InitialNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right', // Set custom animation
      }}
      initialRouteName="GetStarted">
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default InitialNavigation;
