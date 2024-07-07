import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyCar from '../screens/MyCar/MyCar';
import DocumentSharingScreen from '../screens/MyCar/components/DocumentSharingScreen'; // אם יש לך את המסך הזה בקובץ אחר

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyCar" component={MyCar} options={{ title: 'פרטי רכב' }} />
      <Stack.Screen name="DocumentSharing" component={DocumentSharingScreen} options={{ title: 'שיתוף מסמכים' }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
