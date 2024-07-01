import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TimerScreen from "./src/screens/Timer/TimerScreen";
import HomePage from "./src/screens/homepage/HomePage";
import DriversCall from "./src/screens/DriversCall/DriversCall";
import DriversContactUs from "./src/screens/DriversContactUs/components/DriversContactUs";
import MyProfile from "./src/screens/Profile/MyProfile";
import ElectricVehicle from "./src/screens/ElectricVehicle/ElectricVehicle";
import DriversSideMenu from "./src/screens/DriversSideMenu/DriverSideMenu";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="ElectricVehicle" component={ElectricVehicle} />
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
    <Drawer.Navigator
      drawerContent={(props) => <DriversSideMenu {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="DriversContactUs" component={DriversContactUs} />
      <Drawer.Screen name="DriversCall" component={DriversCall} />
      <Drawer.Screen name="TimerScreen" component={TimerScreen} />
      <Drawer.Screen name="MyProfile" component={MyProfile} />
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
