import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const windowHeight = Dimensions.get('window').height;

const EventHeader = ({ children }) => {
  return (
    <View style={styles.headerContainer}>
      <Svg height="100%" width="100%" viewBox="0 0 1440 320">
        {children}
        <Path
          fill="#6C63FF"
          d="M0,224L48,218.7C96,213,192,203,288,192C384,181,480,171,576,186.7C672,203,768,245,864,266.7C960,288,1056,288,1152,272C1248,256,1344,224,1392,208L1440,192V320H0Z"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: windowHeight * 0.05,
    zIndex: 2,
    width: '100%',
    backgroundColor: 'black',
    alignContent: 'center',
    paddingTop: windowHeight * 0.01, // Adjust as needed, depending on the height of your SVG curve
    paddingBottom: windowHeight * 0.1,
  },
  svgCurve: {
    height: 200,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

export default EventHeader;
