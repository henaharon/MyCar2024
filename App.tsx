import React from 'react';

import BaseView from './src/uiKit/BaseView';
import CloseCarTicket from './src/screens/CloseCarTicket/CloseCarTicket';
import ClosedTicketsInfo from './src/screens/CloseCarTicket/ClosedTicketsInfo';
import FeedbackWindow from './src/screens/CloseCarTicket/FeedbackWindow';
import ConfirmMessage from './src/screens/CloseCarTicket/ConfirmMessage';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
function ClosedTickets() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CloseCarTicket." component={CloseCarTicket} />
      <Stack.Screen name="ClosedTicketsInfo" component={ClosedTicketsInfo} />
    </Stack.Navigator>
  );
}
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <BaseView>
        <ClosedTickets />
      </BaseView>
    </NavigationContainer>
  );
}

export default App;

