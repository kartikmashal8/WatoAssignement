import React from 'react';
import InitialNavigation from './src/navigations/stackNavigator/InitialNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar translucent backgroundColor={'transparent'} />
        <InitialNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
