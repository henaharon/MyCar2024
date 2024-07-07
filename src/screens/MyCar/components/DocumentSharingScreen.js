import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const DocumentSharingScreen = () => {
  const [email, setEmail] = useState('');
  const [selectedDocuments, setSelectedDocuments] = useState([]);

  const handleDocumentPick = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.doc],
      });
      setSelectedDocuments(results);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        throw err;
      }
    }
  };

  const handleSendDocuments = () => {
    // Logic to send documents to the entered email
    Alert.alert('Documents Sent', 'The documents have been sent successfully.');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.pickButton} onPress={handleDocumentPick}>
        <Text style={styles.pickButtonText}>בחר מסמכים</Text>
      </TouchableOpacity>
      {selectedDocuments.length > 0 && (
        <View style={styles.selectedDocuments}>
          {selectedDocuments.map((doc, index) => (
            <Text key={index} style={styles.documentName}>{doc.name}</Text>
          ))}
        </View>
      )}
      <TextInput
        style={styles.emailInput}
        placeholder="הכנס כתובת מייל"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSendDocuments}>
        <Text style={styles.sendButtonText}>שלח מסמכים</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  pickButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  pickButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  selectedDocuments: {
    marginVertical: 20,
  },
  documentName: {
    fontSize: 16,
    marginVertical: 5,
  },
  emailInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  sendButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default DocumentSharingScreen;
