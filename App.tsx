import React from 'react';

import {BaseView} from './src/uiKit/BaseView';
import Login from './src/screens/Login/Login';

function App(): React.JSX.Element {
  return (
    <BaseView>
      <Login />
    </BaseView>
  );
}

export default App;
