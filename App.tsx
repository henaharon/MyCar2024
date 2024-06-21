import React from 'react';

import {BaseView} from './src/uiKit/BaseView';
import MyProfile from './src/screens/MyProfile';

function App(): React.JSX.Element {
  return (
    <BaseView>
    <MyProfile />
    </BaseView>
  );
}

export default App;
