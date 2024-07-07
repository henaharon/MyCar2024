import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyCar from '../screens/MyCar/MyCar';
import DocumentSharingScreen from '../screens/MyCar/components/DocumentSharingScreen';
import AirPressureInfo from '../screens/MyCar/components/AirPressureInfo';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MyCar" component={MyCar} options={{ headerShown: false }} />
            <Stack.Screen name="DocumentSharing" component={DocumentSharingScreen} options={{ title: 'שיתוף מסמכים' }} />
            <Stack.Screen name="AirPressureInfo" component={AirPressureInfo} options={{ title: 'לחץ אוויר' }} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
