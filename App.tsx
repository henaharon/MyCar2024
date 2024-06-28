import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import TimerScreen from "./src/screens/Timer/TimerScreen";
import HomePage from "./src/screens/homepage/HomePage";
import DriversCall from "./src/screens/DriversCall/DriversCall";
import DriversContactUs from "./src/screens/DriversContactUs/components/DriversContactUs";
import SelectService from "./src/screens/SelectService/SelectService";
import ServiceDetailsScreen from "./src/screens/ServiceDetailsScreen/ServiceDetailsScreen";
import SummaryScreen from "./src/screens/Summary/SummaryScreen";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Placeholder ProfileScreen component
function ProfileScreen() {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="SelectService" component={SelectService} />
      <Stack.Screen name="ServiceDetailsScreen" component={ServiceDetailsScreen} />
      <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="DriversContactUs" component={DriversContactUs} />
      <Drawer.Screen name="DriversCall" component={DriversCall} />
      <Drawer.Screen name="TimerScreen" component={TimerScreen} />
      <Drawer.Screen name="Profile" component={TimerScreen} />

    </Drawer.Navigator >
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;
