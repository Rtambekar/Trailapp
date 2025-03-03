import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import SplashScreen from './src/screens/Splash/SplashScreen';
import IndexScreen from './src/screens/Splash/IndexScreen';
import SignInScreen from './src/screens/Auth/SignInScreen';
import SignUpScreen from './src/screens/Auth/SignUpScreen';
import ExploreScreen from './src/screens/Main/ExploreScreen';
import Search from './src/screens/Main/SearchScreen';
import Savings from './src/screens/Main/SavingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Savings" component={Savings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
