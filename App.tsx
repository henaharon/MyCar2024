import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TimerScreen from "./src/screens/Timer/TimerScreen";
import HardwareIntro from "./src/screens/E1/HardwareIntro";
import ConnectToChat from "./src/screens/E1/HardwareConnectToChat";
import HomePage from "./src/screens/homepage/HomePage";
import RoadsideAssistance from "./src/screens/E1/RoadsideAssistance";
import CloseCarTicket from "./src/screens/TicketsStatusClose/CloseCarTicket";
import ClosedTicketsInfo from "./src/screens/CloseCarTicket/ClosedTicketsInfo";
import DriversCall from "./src/screens/DriversCall/DriversCall";
import DriversContactUs from "./src/screens/DriversContactUs/components/DriversContactUs";
import ElectricVehicle from "./src/screens/ElectricVehicle/ElectricVehicle";
import DriversSideMenu from "./src/screens/DriversSideMenu/DriverSideMenu";
import SearchAndGo from "./src/screens/SearchAndGo/SearchAndGo";
import MyProfile from "./src/screens/Profile/MyProfile";
import AllMessagesScreen from "./src/screens/Messages/screens/AllMessagesScreen";
import ScreenMessage from "./src/screens/Messages/screens/ScreenMessage";
import GuidesScreen from "./src/screens/Guides/GuidesScreen";
import ServiceCenter from "./src/screens/ServiceCenter/ServiceCenter";
import ServiceCenterProcess from "./src/screens/ServiceCenter/ServiceCenterProcess";
import Walkthrough from "./src/screens/Walkthrough/Walkthrough";
import Login from "./src/screens/Login/Login";
import Onboarding from "./src/screens/Onboarding/Onboarding";
import SplashScreen from "react-native-splash-screen";
import GuidesAndTips from "./src/screens/GuidesAndTips/GuidesAndTips";
import AccidentReportIntro from "./src/screens/AccidentReport/AccidentReportIntro";
import CallDialogScreen from "./src/screens/AccidentReport/CallDialog/CallDialogScreen";
import AccidentReportOnboarding from "./src/screens/AccidentReport/AccidentReportForm/AccidentReportOnboarding";
import DamageReport from "./src/screens/AccidentReport/DamageReport/DamageReport";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen
        name="AccidentReportStack"
        component={AccidentReportStack}
      />
      <Stack.Screen name="ElectricVehicle" component={ElectricVehicle} />
      <Stack.Screen name="ServiceCenter" component={ServiceCenter} />
      <Stack.Screen
        name="ServiceCenterProcess"
        component={ServiceCenterProcess}
      />
      <Stack.Screen name="AllMessages" component={AllMessagesScreen} />
      <Stack.Screen name="MessageDetails" component={ScreenMessage} />
      <Stack.Screen name="AccidentReportIntro" component={DamageReport} />
    </Stack.Navigator>
  );
}

function LoginStack({
  setIsLoggedIn,
}: {
  setIsLoggedIn: (value: boolean) => void;
}) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Walkthrough" component={Walkthrough} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Onboarding">
        {(props) => <Onboarding {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
}
function ClosedTickets() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CloseCarTicket" component={CloseCarTicket} />
      <Stack.Screen name="ClosedTicketsInfo" component={ClosedTicketsInfo} />
    </Stack.Navigator>
  );
}

function AccidentReportStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="AccidentReportIntro"
        component={AccidentReportIntro}
      />
      <Stack.Screen name="CallDialog" component={CallDialogScreen} />
      <Stack.Screen name="DamageReport" component={DamageReport} />
      <Stack.Screen
        name="AccidentReportForm"
        component={AccidentReportOnboarding}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      // drawerContent={(props) => <DriversSideMenu {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="SearchAndGo" component={SearchAndGo} />
      <Drawer.Screen name="DriversContactUs" component={DriversContactUs} />
      <Drawer.Screen name="DriversCall" component={DriversCall} />
      <Drawer.Screen name="GuidesAndTips" component={GuidesAndTips} />
      <Drawer.Screen name="TimerScreen" component={TimerScreen} />
      <Drawer.Screen name="MyProfile" component={MyProfile} />
      <Drawer.Screen name="HardwareIntro" component={HardwareIntro} />
      <Drawer.Screen name="ConnectToChat" component={ConnectToChat} />
      <Drawer.Screen name="RoadsideAssistance" component={RoadsideAssistance} />
      <Drawer.Screen name="Guides" component={GuidesScreen} />
      <Drawer.Screen name="CarTicket" component={ClosedTickets} />
      <Drawer.Screen name="AllMessages" component={AllMessagesScreen} />
      <Drawer.Screen name="MessageDetails" component={ScreenMessage} />
    </Drawer.Navigator>
  );
}

function App(): React.JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MyDrawer /> : <LoginStack setIsLoggedIn={setIsLoggedIn} />}
    </NavigationContainer>
  );
}
export default App;
