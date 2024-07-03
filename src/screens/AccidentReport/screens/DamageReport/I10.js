import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {FormHeader} from '../../components/FormHeader';
import GeneralForm from '../../components/GeneralForm';

const EventInfo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <FormHeader />
        </View>
        <View style={styles.bodyContainer}>
          <GeneralForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventInfo;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  headerContainer: {
    height: windowHeight * 0.15,
    zIndex: 1,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: -windowHeight * 0.05,
    paddingTop: windowHeight * 0.03,
    paddingBottom: windowHeight * 0.05,
    zIndex: 2,
    gap: 15,
  },

});
