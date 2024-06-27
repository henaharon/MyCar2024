import React from 'react';

import BaseView from './src/uiKit/BaseView';
import CloseCarTicket from './src/screens/CloseCarTicket/CloseCarTicket';
function App(): React.JSX.Element {
  return (
    <BaseView>
    <CloseCarTicket />
    </BaseView>
  );
}

export default App;

