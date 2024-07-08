import React, { useState } from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';

const FeedbackWindow = ({ onSubmit }) => {
  const [comments, setComments] = useState('');

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.keyboardAvoidingContainer}
      >
        <Modal
          transparent={true}
          animationType="slide"
          visible={true}
          onRequestClose={() => {}}
        >
          <BlurView
            style={styles.blurContainer}
            blurType="light"
            blurAmount={10}
          >
            <View style={styles.modalWrapper}>
              <View style={styles.modalContainer}>
                <Text style={styles.title}>משוב</Text>
                <Text style={styles.subtitle}>
                  אנא דרגו את חווית השירות שקיבלתם
                </Text>
                <View style={styles.starsContainer}>
                  <Image
                    source={require('../../../assets/O1-assets/selectedStar.png')}
                    style={styles.starIcon}
                  />
                  <Image
                    source={require('../../../assets/O1-assets/selectedStar.png')}
                    style={styles.starIcon}
                  />
                  <Image
                    source={require('../../../assets/O1-assets/selectedStar.png')}
                    style={styles.starIcon}
                  />
                  <Image
                    source={require('../../../assets/O1-assets/selectedStar.png')}
                    style={styles.starIcon}
                  />
                  <Image
                    source={require('../../../assets/O1-assets/selectedStar.png')}
                    style={styles.starIcon}
                  />
                </View>
                <Text style={styles.excellentText}>"מעולה"</Text>
                <View style={styles.commentsContainer}>
                  <Text style={styles.commentsLabel}>הערות</Text>
                  <TextInput
                    style={styles.commentsInput}
                    multiline
                    value={comments}
                    onChangeText={setComments}
                    placeholder="כתבו פה הערות"
                  />
                </View>
                <TouchableOpacity style={styles.sendButton} onPress={onSubmit}>
                  <Text style={styles.sendButtonText}>שליחה</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeButton} onPress={() => {}}>
                  <Text style={styles.closeButtonText}>סגירה</Text>
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>
        </Modal>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardAvoidingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalWrapper: {
    backgroundColor: '#B3D1B0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  starIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  excellentText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#FFC300',
  },
  commentsContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    marginBottom: 20,
    position: 'relative',
  },
  commentsLabel: {
    position: 'absolute',
    right: 10,
    top: -10,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    fontSize: 14,
    color: 'blue',
  },
  commentsInput: {
    height: 100,
    width: '100%',
    textAlignVertical: 'top',
    padding: 10,
  },
  sendButton: {
    width: '100%',
    backgroundColor: '#FC4472',
    padding: 15,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 10,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 18,
  },
  closeButton: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 18,
  },
});

export default FeedbackWindow;
