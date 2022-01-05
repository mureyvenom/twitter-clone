import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import DrawerStack from './src/stacks/drawer.stack';
import Colors from './src/colors/Colors';

//load fonts to be used in app
const getFonts = Font.loadAsync({
  RRegular: require('./assets/fonts/Roboto-Regular.ttf'),
  RLight: require('./assets/fonts/Roboto-Light.ttf'),
  RItalic: require('./assets/fonts/Roboto-Italic.ttf'),
  RBold: require('./assets/fonts/Roboto-Bold.ttf'),
  RThin: require('./assets/fonts/Roboto-Thin.ttf')
});

//switch stack for splash screen and main app 
const SwitchStack = createStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: Colors.primary,
    background: 'rgb(0, 0, 0)',
    card: 'rgb(0, 0, 0)',
    text: 'rgb(255,255, 255)',
    border: 'rgb(110, 118, 125)',
    notification: Colors.primary,
  },
};

const App = () => {
  const [splash, setSpalsh] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpalsh(false);
    }, 1000);
  }, []);

  return(
    <NavigationContainer theme={MyTheme}>
      <SwitchStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#000'
        }
      }}
      >
        {
          splash ?
          <SwitchStack.Screen 
          name='splash'
          component={SplashScreen}
          options={{
            headerShown: false
          }}
          />
          :
          null
        }
        <SwitchStack.Screen 
        name='drawer'
        component={DrawerStack}
        />
      </SwitchStack.Navigator>
    </NavigationContainer>
  )

}

export default () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return(
      <App />
    )
  }else{
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
