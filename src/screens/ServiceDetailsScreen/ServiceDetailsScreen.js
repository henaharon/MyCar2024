import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, Pressable } from 'react-native';

const batteryImage = require('../../assets/images/Battery.png'); 
const placeholderImage = require('../../assets/images/blank.png'); 
const backButtonImage = require('../../assets/images/redBackButton.png');
const rightButtonImage = require('../../assets/images/greyRightArrow.png');
const uploadImage1 = require('../../assets/images/cable.png');

const ServiceDetailsScreen = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={[styles.headerButton, styles.backButton]}>
          <Image source={backButtonImage} style={styles.headerButtonImage} />
        </Pressable>
        <Text style={styles.headerTitle}>מצבר</Text>
        <Pressable onPress={() => navigation.navigate('SummaryScreen')} style={[styles.headerButton, styles.nextButton]}>
          <Image source={rightButtonImage} style={styles.headerButtonImage} />
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Image source={batteryImage} style={styles.batteryImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>פרטים</Text>
        <TextInput
          style={styles.detailsInput}
          placeholder="תיאור / הערות"
          multiline
        />
      </View>
      <View style={styles.imageUploadContainer}>
        <Text style={styles.imageUploadTitle}>הוספת תמונות</Text>
        <ScrollView
          horizontal
          contentContainerStyle={styles.imageScrollContainer}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.imageBox}>
            <Image source={uploadImage1} style={styles.uploadImage} />
          </View>
          <View style={styles.imageBox}>
            <Image source={placeholderImage} style={styles.uploadImage} />
          </View>
          <View style={styles.imageBox}>
            <Image source={placeholderImage} style={styles.uploadImage} />
          </View>
          <View style={styles.imageBox}>
            <Image source={placeholderImage} style={styles.uploadImage} />
          </View>
          <View style={styles.imageBox}>
            <Image source={placeholderImage} style={styles.uploadImage} />
          </View>
        </ScrollView>
        <Text style={styles.assistiveText}>Assistive text</Text>
      </View>
      <View style={styles.locationContainer}>
        <View style={styles.locationInputContainer}>
          <Text style={[styles.floatingLabel, (isFocused || inputValue) && styles.floatingLabelFocused]}>
            <Text style={styles.requiredIndicator}>*</Text> מיקום נוכחי / הנחיות הגעה 
          </Text>
          <TextInput
            style={styles.locationInput}
            placeholder=""
            multiline
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={(text) => setInputValue(text)}
            value={inputValue}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    paddingTop: 256, 
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2,
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 25,
    paddingHorizontal: 16,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  headerButton: {
    padding: 8,
  },
  headerButtonImage: {
    width: 38,
    height: 38,
    marginTop: -10,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 70, 
    paddingTop: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
  },
  
  batteryImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  detailsContainer: {
    marginBottom: 16,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  detailsInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    height: 80,
    textAlignVertical: 'top',
  },
  imageUploadContainer: {
    marginBottom: 16,
  },
  imageUploadTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  imageScrollContainer: {
    flexDirection: 'row',
  },
  imageBox: {
    width: 100,
    height: 150,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  uploadImage: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  assistiveText: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
  },
  locationContainer: {
    marginBottom: 16,
    position: 'relative',
  },
  locationInputContainer: {
    position: 'relative',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#fff',
  },
  locationInput: {
    fontSize: 16,
    color: '#666',
    paddingVertical: 8,
    paddingHorizontal: 8,
    textAlign: 'right', // Ensure text is aligned to the right when focused
  },
  floatingLabel: {
    position: 'absolute',
    right: 10,
    top: 12,
    zIndex: 1,
    paddingHorizontal: 4,
    backgroundColor: '#fff',
    fontSize: 14,
    color: '#666',
  },
  floatingLabelFocused: {
    top: -10,
    fontSize: 12,
  },
  requiredIndicator: {
    color: 'red',
  },
});

export default ServiceDetailsScreen;
