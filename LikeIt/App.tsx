import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';

function App(): JSX.Element {

  return (
    <SafeAreaView style={{ backgroundColor: '#C5CAE9'}}>
      <Header/>
      <ScrollView style={styles.container}>
        <View>
          <Text>Hello World!</Text>
        </View>
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
