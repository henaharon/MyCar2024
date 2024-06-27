import React from 'react';

import BaseView from './src/uiKit/BaseView';
import CloseCarTicket from './src/screens/CloseCarTicket/CloseCarTicket';
import ClosedTicketsInfo from './src/screens/CloseCarTicket/ClosedTicketsInfo';
import FeedbackWindow from './src/screens/CloseCarTicket/FeedbackWindow';
import ConfirmMessage from './src/screens/CloseCarTicket/ConfirmMessage';

function App(): React.JSX.Element {
  return (
    <BaseView>
    <ClosedTicketsInfo />
    </BaseView>
  );
}

export default App;

