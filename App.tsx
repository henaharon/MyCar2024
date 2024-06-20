import React from 'react';
import {BaseView} from './src/uiKit/BaseView';
import Login from './src/screens/Login/Login';
import Onboarding from './src/screens/Onboarding/Onboarding';

function App(): React.JSX.Element {
  return (
    <BaseView>
        <Onboarding />
    </BaseView>
  );
}

export default App;
