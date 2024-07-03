import React from 'react';
import { View, Image, Pressable, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Form from './Form';
import Confirm from './Confirm';

const Stack = createNativeStackNavigator();

export default function ElectricVehicle() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="form"
        component={Form}
        options={{
          headerShown: true,
          headerLeft: () => <LeftArrowButton />,
          headerRight: () => <RightArrowButton />,
          headerTitle: () => (
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
              עמדת טעינה
            </Text>
          ),
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#000' },
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="confirm"
        component={Confirm}
        options={{
          headerShown: true,
          headerRight: () => <RightArrowButton />,
          headerTitle: () => (
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
              סיכום קריאה
            </Text>
          ),
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#000' },
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

function RightArrowButton() {
  const navigation = useNavigation();
  return (
    <View style={{ width: 40, height: 40, marginHorizontal: 8 }}>
      <Pressable onPress={() => navigation.navigate('HomePage')}>
        <Image
          source={require('../../assets/icons/componentsNavBarXButtonsRoundedWhiteAlpha.png')}
          style={{ width: 40, height: 40 }}
        />
      </Pressable>
    </View>
  );
}

function LeftArrowButton() {
  const navigation = useNavigation();
  return (
    <View style={{ width: 40, height: 40, marginHorizontal: 8 }}>
      <Pressable onPress={() => navigation.navigate('confirm')}>
        <Image
          source={require('../../assets/icons/componentsNavBarXButtonsRoundedBlack.png')}
          style={{ width: 40, height: 40 }}
        />
      </Pressable>
    </View>
  );
}
