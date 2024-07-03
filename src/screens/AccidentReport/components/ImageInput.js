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

const ImageInput = () => {
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
    <ScrollView horizontal={true}>
    <View style={styles.photoInputContainer}>
      <Image
        style={styles.photoContainer}
        source={require('../../../assets/images/car3.png')}
      />
      <Image
        style={styles.photoContainer}
        source={require('../../../assets/images/car2.jpg')}
      />
    <Image
        style={styles.photoContainer}
        source={require('../../../assets/images/car1.jpeg')}
      />
      <TouchableOpacity
        style={styles.uploadPhotoButton}
        onPress={() => {
          ImagePicker();
        }}>
        <Image
          style={styles.uploadPhotoIcon}
          source={require('../../../assets/icons/uploadPhoto.png')}
        />
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  photoInputContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    gap: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: windowWidth * 0.30,
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
