<<<<<<< HEAD
import React from 'react';
import { BaseView } from './src/uiKit/BaseView';
import ServiceCenter from './src/screens/ServiceCenter/ServiceCenter.js';
function App(): React.JSX.Element {
  return (
    <ServiceCenter />
  );
}
export default App;
=======
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TimerScreen from "./src/screens/Timer/TimerScreen";
import HomePage from "./src/screens/homepage/HomePage";
import DriversCall from "./src/screens/DriversCall/DriversCall";
import DriversContactUs from "./src/screens/DriversContactUs/components/DriversContactUs";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
}

// function LoginStack() {
//   return (
//     // <Stack.Navigator screenOptions={{ headerShown: false }}>
//     //   <Stack.Screen name="HomePage" component={HomePage} />
//     // </Stack.Navigator>
//   );
// }

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

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;
>>>>>>> 3fad94fe1f49dd21ba7e148a3cfe0fa1bf3cf9f1
