import React from 'react';

import {BaseView} from './src/uiKit/BaseView';
import AccidentReportIntro from './src/screens/AccidentReport/screens/AccidentReport/AccidentReportIntro';
import EventInfo from './src/screens/AccidentReport/screens/DamageReport/I10';
// import CallDialogScreen from './src/screens/AccidentReport/screens/CallDialog/CallDialogScreen';
// import SuccessScreen from './src/screens/AccidentReport/screens/Success/SuccessScreen';
// import GeneralForm from './src/screens/AccidentReport/screens/GeneralForm/GeneralForm';
import {FormHeader} from './src/screens/AccidentReport/components/FormHeader';

function App(): React.JSX.Element {
  return (
    <BaseView>
      {/* <AccidentReportIntro /> */}
      {/* <GeneralForm /> */}
    <EventInfo />
    </BaseView>
  );
}

export default App;

