import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TimerScreen from "./src/screens/Timer/TimerScreen";
import HardwareIntro from "./src/screens/E1/HardwareIntro";
import ConnectToChat from "./src/screens/E1/HardwareConnectToChat";
import HomePage from "./src/screens/homepage/HomePage";
import RoadsideAssistance from "./src/screens/E1/RoadsideAssistance";

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
      <Drawer.Screen name="TimerScreen" component={TimerScreen} />
      <Drawer.Screen name="Profile" component={TimerScreen} />
      <Drawer.Screen name="HardwareIntro" component={HardwareIntro} />
      <Drawer.Screen name="ConnectToChat" component={ConnectToChat} />
      <Drawer.Screen name="RoadsideAssistance" component={RoadsideAssistance} />
    </Drawer.Navigator>
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
