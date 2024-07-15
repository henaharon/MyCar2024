import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ChatRoom from "../screens/R1/ChatRoom";
import ChatSelectRoom from "../screens/R1/ChatSelectRoom";
import ConnectChatLoader from "../screens/R1/ConnectChatLoader";
import CloseChatDialog from "../screens/R1/CloseChatDialog";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ChatSelectRoom">
      <Stack.Screen
        name="ChatSelectRoom"
        component={ChatSelectRoom}
        options={{ title: "בחר חדר" }}
      />
      <Stack.Screen
        name="ConnectChatLoader"
        component={ConnectChatLoader}
        options={{ title: "מתחבר לצ'אט" }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{ title: "צ'אט" }}
      />
      <Stack.Screen
        name="CloseChatDialog"
        component={CloseChatDialog}
        options={{ title: "סגור שיחה" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
