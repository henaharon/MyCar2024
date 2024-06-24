import React from 'react';
import { StyleSheet } from 'react-native';
import { BaseView } from './src/uiKit/BaseView';
import DriversSideMenu from './src/screens/DriversSideMenu/DriverSideMenu';

function App(): React.JSX.Element {
  return (
    <BaseView style={styles.baseView}>
      <DriversSideMenu />
    </BaseView>
  );
}

const styles = StyleSheet.create({
  baseView: {
    flex: 1,
  },
});

export default App;
