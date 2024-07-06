import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyCar from './src/screens/MyCar/MyCar';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyCar">
        <Stack.Screen name="MyCar" component={MyCar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
