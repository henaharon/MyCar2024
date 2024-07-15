import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image, ScrollView } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Share from 'react-native-share';

const DocumentSharingScreen = ({ navigation }) => {
  const [documents, setDocuments] = useState([]);
  const [email, setEmail] = useState('');

  const selectDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setDocuments([...documents, res]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        throw err;
      }
    }
  };

  const shareDocument = async () => {
    if (email) {
      const documentUris = documents.map(doc => doc.uri);
      await Share.open({
        urls: documentUris,
        email,
        subject: 'Document Sharing',
        message: 'Please find the attached documents.',
      });
    } else {
      alert('Please enter an email address');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.documentItem}>
      <Text style={styles.documentName}>{item.name}</Text>
      <Text style={styles.documentDate}>24.06.2020</Text>
      <TouchableOpacity style={styles.addButton} onPress={selectDocument}>
        <Image source={require('../../../assets/icons/plus.png')} style={styles.infoIcon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>שיתוף המסמכים שלי</Text>
      <FlatList
        data={documents}
        renderItem={renderItem}
        keyExtractor={item => item.uri}
        style={styles.documentList}
      />
      <TouchableOpacity style={styles.addButton} onPress={selectDocument}>
        <Image source={require('../../../assets/icons/plus.png')} style={styles.infoIcon} />
      </TouchableOpacity>
      <TextInput
        style={styles.emailInput}
        placeholder="כתובת מייל לשיתוף המסמכים"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.sendButton} onPress={shareDocument}>
        <Text style={styles.sendButtonText}>שליחה</Text>
      </TouchableOpacity>
      <Text style={styles.infoTitle}>מידע שימושי</Text>
      <Text style={styles.infoSubtitle}>נוחיותך אגדנו מספר מדריכים לתפעול הרכב</Text>
      <View style={styles.infoBoxes}>
        <TouchableOpacity style={styles.infoBox} onPress={() => navigation.navigate('GuideLights')}>
          <Image source={require('../../../assets/icons/wheel.png')} style={styles.infoIcon} />
          <Text style={styles.infoText}>מדריך נורית חיווי</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoBox}>
          <Image source={require('../../../assets/icons/important.png')} style={styles.infoIcon} />
          <Text style={styles.infoText}>מדריך החלפת גלגל</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  documentList: {
    flexGrow: 0,
    marginBottom: 20,
  },
  documentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  documentName: {
    fontSize: 16,
  },
  documentDate: {
    fontSize: 14,
    color: '#888',
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  emailInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  sendButton: {
    backgroundColor: '#ff4081',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoSubtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  infoBox: {
    width: '45%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
  },
  infoIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DocumentSharingScreen;
