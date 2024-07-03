import React from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Title from './Title';

const firstCar = require('../../../assets/i1-assets/car1.jpeg');
const secondCar = require('../../../assets/i1-assets/car2.jpg');
const thirdCar = require('../../../assets/i1-assets/car3.png');
const uploadPhotoIcon = require('../../../assets/i1-assets/uploadPhoto.png');

const ImageInput = ({title}) => {
  const ImagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };
    launchImageLibrary(options, response => {
      console.log(response);
    });
  };

  return (
    <View style={styles.EvidenceContainer}>
      <Title title={title} />
      <ScrollView horizontal={true}>
        <View style={styles.photoInputContainer}>
          <Image style={styles.photoContainer} source={firstCar} />
          <Image style={styles.photoContainer} source={secondCar} />
          <Image style={styles.photoContainer} source={thirdCar} />
          <TouchableOpacity
            style={styles.uploadPhotoButton}
            onPress={() => {
              ImagePicker();
            }}>
            <Image style={styles.uploadPhotoIcon} source={uploadPhotoIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  EvidenceContainer: {
    position: 'relative',
    top: windowHeight * 0.1,
  },
  photoInputContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    gap: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.23,
    borderRadius: 10,
  },
  uploadPhotoIcon: {
    width: windowWidth * 0.15,
    height: windowHeight * 0.076,
    position: 'relative',
    left: windowWidth * 0.01,
  },
  uploadPhotoButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.32,
    height: windowHeight * 0.23,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
});

export default ImageInput;
