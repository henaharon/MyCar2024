import React, {useState} from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Linking,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export const Button = ({title, onPress, phoneNumber}) => {
  const [bgColor, setBgColor] = useState('transparent');
  const [txtColor, setTxtColor] = useState('black');
  const [brdrColor, setBorderColor] = useState('#e6e6e9');
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    if (phoneNumber) {
      Linking.openURL(`tel:${phoneNumber}`);
    }
    if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable
      style={[
        styles.buttonContainer,
        {backgroundColor: bgColor, borderColor: brdrColor},
      ]}
      onPress={handlePress}
      onPressIn={() => {
        setIsPressed(true);
        setBgColor('#F05C62');
        setTxtColor('white');
        setBorderColor('transparent');
      }}
      onPressOut={() => {
        setIsPressed(false);
        setBgColor('transparent');
        setTxtColor('black');
        setBorderColor('#e6e6e9');
      }}>
        {
            isPressed ? (
                <LinearGradient
                  colors={['#E50075', '#F05C62']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={[styles.buttonContainer,{flex:3, borderColor:brdrColor}]}>

                <View style={styles.buttonTextContainer}>
                <Text style={[styles.buttonContainerText, {color: txtColor}]}>
                    {title}
                </Text>
                </View>
                </LinearGradient>
                ): (
                    <View style={styles.buttonTextContainer}>
                    <Text style={[styles.buttonContainerText, {color: txtColor}]}>
                        {title}
                    </Text>
                    </View>
                )
        }
    </Pressable>
  );
};

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  buttonContainer: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.09,
    borderColor: '#e6e6e9',
    borderWidth: windowWidth * 0.007,
    borderRadius: 50,
    backgroundColor: 'transparent',
  },
  buttonTextContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '900',
  },
});
