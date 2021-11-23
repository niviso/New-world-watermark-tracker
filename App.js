import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AppProvider} from './contexts/appContext';
import Profile from './views/profile';
import {View} from 'react-native';
export default function App() {
  return (
    <AppProvider>
      <StatusBar style="light" />
      <View style={{position:'absolute',top:0,left:0,height:'100%',width:'100%',paddingTop:50,backgroundColor:'#1e1e1e'}}>
      <Profile/>
      </View>
    </AppProvider>
  );
}

