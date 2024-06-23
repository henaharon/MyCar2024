import React from 'react';
import {BaseView} from './src/uiKit/BaseView';
import Login from './src/screens/Login/Login';
import Onboarding from './src/screens/Onboarding/Onboarding';
import Walkthrough from './src/screens/Walkthrough/Walkthrough';
function App(): React.JSX.Element {
  return (
    <BaseView>
        <Walkthrough />
    </BaseView>
  );
}

export default App;
