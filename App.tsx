import React from 'react';

import {BaseView} from './src/uiKit/BaseView';
import AccidentReportIntro from './src/screens/AccidentReport/screens/AccidentReport/AccidentReportIntro';
import CallDialogScreen from './src/screens/AccidentReport/screens/CallDialog/CallDialogScreen';
import SuccessScreen from './src/screens/AccidentReport/screens/Success/SuccessScreen';
import GeneralForm from './src/screens/AccidentReport/components/GeneralForm';
import I10 from './src/screens/AccidentReport/screens/DamageReport/I10';
import I4 from './src/screens/AccidentReport/screens/AccidentReportForm/I4';

function App(): React.JSX.Element {
  return (
    <BaseView>
      {/* <AccidentReportIntro /> */}
      {/* <AccidentReportIntro /> */}
      <I4 />
    </BaseView>
  );
}

export default App;
