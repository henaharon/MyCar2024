import React from 'react';
import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';

const infoIcon = require('../../../assets/i1-assets/elements24PxIconsInfo3x.png');

const Information = ({title, paragraph}) => {
  return (
    <View style={styles.informationContainer}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={infoIcon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        <View style={styles.paragraphContainer}>
          {paragraph.map((para, index) => (
            <Text key={index} style={styles.paragraphStyle}>
              {para}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Information;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  informationContainer: {
    backgroundColor: '#fffbe9',
    flexDirection: 'row-reverse',
    padding: windowWidth * 0.03,
    borderRadius: 25,
    justifyContent: 'center',
    width: windowWidth * 0.85,
    gap: windowWidth * 0.03,
  },
  iconContainer: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.05,
    borderRadius: 50,
    backgroundColor: '#ffbf0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: windowWidth * 0.06,
    height: windowHeight * 0.03,
  },
  textContainer: {
    width: windowWidth * 0.65,
    flexDirection: 'column',
  },
  titleStyle: {
    color: 'black',
    fontWeight: 'bold',
  },
  paragraphContainer: {
    flexDirection: 'column',
    gap: windowWidth * 0.02,
  },
  paragraphStyle: {
    color: 'black',
  },
});
