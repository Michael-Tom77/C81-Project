import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigation.js';
//import BottomTabNavigator from './navigation/TabNavigator.js';

export default function App(){
  return(
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}