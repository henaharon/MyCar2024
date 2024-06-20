import React from 'react';

import {BaseView} from './src/uiKit/BaseView';
import AccidentReportIntro from './src/screens/AccidentReport/AccidentReportIntro';
import CallDialogScreen from './src/screens/AccidentReport/screens/CallDialog/CallDialogScreen';

function App(): React.JSX.Element {
  return (
    <BaseView>
      {/* <AccidentReportIntro /> */}
      <CallDialogScreen />
    </BaseView>
  );
}

export default App;
