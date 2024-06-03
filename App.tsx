import React from 'react';

import {BaseView, BodyBaseView} from './src/uiKit/BaseView';
import {Header} from './src/uiKit/Header';

function App(): React.JSX.Element {
  return (
    <BaseView>
      <Header />
      <BodyBaseView />
    </BaseView>
  );
}

export default App;
