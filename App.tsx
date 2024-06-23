import React from 'react';

import {BaseView} from './src/uiKit/BaseView';
import AccidentReportIntro from './src/screens/AccidentReport/screens/AccidentReport/AccidentReportIntro';
import CallDialogScreen from './src/screens/AccidentReport/screens/CallDialog/CallDialogScreen';
import SuccessScreen from './src/screens/AccidentReport/screens/Success/SuccessScreen';

function App(): React.JSX.Element {
  return (
    <BaseView>
      {/* <AccidentReportIntro /> */}
      {/* <AccidentReportIntro /> */}
      <CallDialogScreen />
    </BaseView>
  );
}

export default App;
