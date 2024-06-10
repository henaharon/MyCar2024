import React from 'react';

import {BaseView} from './src/uiKit/BaseView';
import TimerScreen from './src/screens/Timer/TimerScreen';

function App(): React.JSX.Element {
  return (
    <BaseView>
      <TimerScreen />
    </BaseView>
  );
}

export default App;
