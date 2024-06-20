import React from 'react';

import {BaseView} from './src/uiKit/BaseView';
import AccidentReportIntro from './src/screens/AccidentReport/AccidentReportIntro';

function App(): React.JSX.Element {
  return (
    <BaseView>
      <AccidentReportIntro />
    </BaseView>
  );
}

export default App;
