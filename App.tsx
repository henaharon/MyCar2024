import React from 'react';

import {BaseView} from './src/uiKit/BaseView';
import AccidentReportIntro from './src/screens/AccidentReport/screens/AccidentReport/AccidentReportIntro';
import CallDialogScreen from './src/screens/AccidentReport/screens/CallDialog/CallDialogScreen';
import SuccessScreen from './src/screens/AccidentReport/screens/Success/SuccessScreen';
import GeneralForm from './src/screens/AccidentReport/components/GeneralForm';
import I10 from './src/screens/AccidentReport/screens/DamageReport/I10';
import I6 from './src/screens/AccidentReport/screens/AccidentReportForm/I6';
import AccidentReportOnboarding from './src/screens/AccidentReport/screens/AccidentReportForm/AccidentReportOnboarding';
import DamageReport from './src/screens/AccidentReport/screens/DamageReport/DamageReport';

function App(): React.JSX.Element {
  return (
    <BaseView>
      {/* <AccidentReportIntro /> */}
      <AccidentReportOnboarding />
      {/* <DamageReport /> */}
    </BaseView>
  );
}

export default App;
