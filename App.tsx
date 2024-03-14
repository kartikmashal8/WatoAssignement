import React, {useEffect} from 'react';
import InitialNavigation from './src/navigations/stackNavigator/InitialNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import Orientation from 'react-native-orientation-locker';
const App = () => {
  useEffect(() => {
    Orientation.lockToPortrait(); // Lock orientation to portrait mode when the component mounts
    return () => {
      Orientation.unlockAllOrientations(); // Unlock orientation when the component unmounts
    };
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar
          barStyle={'dark-content'}
          //hidden
          translucent
          backgroundColor={'transparent'}
        />
        <InitialNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
