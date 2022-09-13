import { View, LogBox, StyleSheet } from 'react-native';
import * as React from 'react';
import MainContainer from './navigation/MainContainer';

export default function App() {

  
LogBox.ignoreLogs(['Remote debugger']);
  return (
    <View style={styles.appView}>
      <MainContainer />
    </View>
  );

  }

  const styles = StyleSheet.create({
   appView: {
    flex: 1,
   }
})