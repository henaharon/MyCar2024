import { View, Image, Pressable, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Form from './Form';
import Confirm from './Confirm';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function ElectricVehicle() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: true,
            headerTitle: () => (
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
                מסך הבית
              </Text>
            ),
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#000' },
            headerBackVisible: false,
          }}
        />
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
    </NavigationContainer>
  );
}

function RightArrowButton() {
  const navigation = useNavigation();
  return (
    <View style={{ width: 40, height: 40, marginHorizontal: 8 }}>
      <Pressable onPress={() => navigation.navigate('home')}>
        <Image
          source={require('./assets/componentsNavBarXButtonsRoundedWhiteAlpha.png')}
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
          source={require('./assets/componentsNavBarXButtonsRoundedBlack.png')}
          style={{ width: 40, height: 40 }}
        />
      </Pressable>
    </View>
  );
}
