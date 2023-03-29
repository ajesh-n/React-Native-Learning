import React from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/card';
import Header from './components/header';

function App(): JSX.Element {

  return (
    <SafeAreaView style={{ backgroundColor: '#C5CAE9', flex: 1}}>
      <Header/>
      <ScrollView style={styles.container}>
        <Card image={require('./assets/pic_1.jpg')}/>
        <Card image={require('./assets/pic_2.jpg')}/>
        <Card image={require('./assets/pic_3.jpg')}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  },
});

export default App;
