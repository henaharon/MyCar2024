import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import TimerScreen from "./src/screens/Timer/TimerScreen";
import HomePage from "./src/screens/homepage/HomePage";
<<<<<<< HEAD
import DriversCall from "./src/screens/DriversCall/DriversCall";
import DriversContactUs from "./src/screens/DriversContactUs/components/DriversContactUs";
import SelectService from "./src/screens/SelectService/SelectService";
import ServiceDetailsScreen from "./src/screens/ServiceDetailsScreen/ServiceDetailsScreen";
import SummaryScreen from "./src/screens/Summary/SummaryScreen";

=======
import ServiceDetailsScreen from "./src/screens/ServiceDetailsScreen/ServiceDetailsScreen";
import SummaryScreen from "./src/screens/Summary/SummaryScreen";
>>>>>>> 30b5389ca936006cc1ace70636d8ad7a3a4778bd

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
<<<<<<< HEAD
      <Stack.Screen name="SelectService" component={SelectService} />
=======
>>>>>>> 30b5389ca936006cc1ace70636d8ad7a3a4778bd
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
<<<<<<< HEAD
      <Drawer.Screen name="Profile" component={TimerScreen} />

    </Drawer.Navigator >
=======
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
>>>>>>> 30b5389ca936006cc1ace70636d8ad7a3a4778bd
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
