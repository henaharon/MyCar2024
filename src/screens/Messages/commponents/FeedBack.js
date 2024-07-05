import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import StarRat from '../commponents/feedback/StarRat';
import YesNoSelect from '../commponents/feedback/YesNoSelect';
import questions from '../helpers/questions.json';
import RNFS from 'react-native-fs';
import ConfirmationModal from '../commponents/feedback/ConfirmationModal';

const FeedBack = () => {
  const [ratings, setRatings] = useState({});
  const [yesNoAnswers, setYesNoAnswers] = useState({});
  const [openAnswers, setOpenAnswers] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const readFeedbackFile = async () => {
    const path = `${RNFS.DownloadDirectoryPath}/feedback.json`;
    try {
      const content = await RNFS.readFile(path, 'utf8');
      console.log('Feedback content:', content);
    } catch (error) {
      console.error('Error reading feedback file:', error);
    }
  };

  const resetFeedback = () => {
    setRatings({});
    setYesNoAnswers({});
    setOpenAnswers({});
  };

  const handleRatingChange = (id, rating) => {
    setRatings(prevRatings => ({ ...prevRatings, [id]: rating }));
  };

  const handleYesNoSelect = (id, option) => {
    setYesNoAnswers(prevYesNoAnswers => ({ ...prevYesNoAnswers, [id]: option }));
  };

  const handleOpenChange = (id, text) => {
    setOpenAnswers(prevOpenAnswers => ({ ...prevOpenAnswers, [id]: text }));
  };

  const handleSubmit = async () => {
    if (!allFieldsFilled()) {
      Alert.alert('שגיאה', 'נא למלא את כל השדות לפני שליחה.');
      return;
    }

    const feedback = {
      star: ratings,
      yesno: yesNoAnswers,
      open: openAnswers
    };

    const path = `${RNFS.DownloadDirectoryPath}/feedback.json`;
    try {
      await RNFS.writeFile(path, JSON.stringify(feedback, null, 2), 'utf8');
      console.log('Feedback successfully written to:', path);
      setModalVisible(true);
      readFeedbackFile();
      resetFeedback();
    } catch (error) {
      console.error('Error writing feedback:', error);
      Alert.alert('שגיאה בשליחת המשוב', error.message);
    }
  };

  const allFieldsFilled = () => {
    const starFilled = questions.star.every(star => ratings[star.id] !== undefined);
    const yesNoFilled = questions.yesno.every(yesno => yesNoAnswers[yesno.id] !== undefined);

    return starFilled && yesNoFilled;
  };


  return (
    <View style={styles.container}>
      {questions.star.map(star => (
        <View key={star.id} style={styles.questionContainer}>
          <View style={styles.line}></View>
          <Text style={styles.question}>{star.text}</Text>
          <StarRat
            rating={ratings[star.id] || 0}
            onRatingChange={rating => handleRatingChange(star.id, rating)}
          />
        </View>
      ))}

      {questions.yesno.map(yesno => (
        <View key={yesno.id} style={styles.questionContainer}>
          <View style={styles.line}></View>
          <Text style={styles.question}>{yesno.text}</Text>
          <YesNoSelect
            selectedOption={yesNoAnswers[yesno.id] || ''}
            onSelect={option => handleYesNoSelect(yesno.id, option)}
          />
        </View>
      ))}
      {questions.open.map(openQuestion => (
        <View key={openQuestion.id} style={styles.questionContainer}>
                    <View style={styles.line}></View>

          <Text style={styles.question}>{openQuestion.text}</Text>
          <TextInput
            style={styles.openQuestionInput}
            multiline
            value={openAnswers[openQuestion.id] || ''}
            onChangeText={text => handleOpenChange(openQuestion.id, text)}
          />
        </View>
      ))}
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttontext}>שליחת משוב </Text>
      </TouchableOpacity>
      <ConfirmationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -60,
    width: '90%',
    marginLeft: 20,
  },
  line: {
    height: 1,
    width: '95%',
    backgroundColor: '#EEEEEF',
    alignSelf: 'center',
    margin: 15,
  },
  questionContainer: {
    marginBottom: 20,
    flex: 1,
  },
  question: {
    fontSize: 18,
    padding: 5,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  openQuestionInput: {
    borderWidth: 1,
    borderColor: '#ABABB9',
    padding: 10,
    minHeight: 150,
    textAlignVertical: 'top',
    borderRadius: 10,
    alignSelf: 'flex-end',
    width: '95%',
  },
  button: {
    borderRadius: 20,
    backgroundColor: 'rgb(240,92,98)',
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
    width: '95%',
    alignSelf: 'flex-end',
  },
  buttontext: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    padding: 10,
  },
});

export default FeedBack;