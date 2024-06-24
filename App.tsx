// App.tsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomePage from './src/screens/homepage/HomePage';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomePage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
