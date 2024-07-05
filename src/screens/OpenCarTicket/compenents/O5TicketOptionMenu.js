import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable ,Image} from 'react-native';
import CancelTicketModal from './CancelTicketModal';
import XButtonIcon from "../../../assets/icons/componentsNavBarXButtonsRoundedWhiteAlpha.png";

const O5TicketOptionMenu = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
         <View style={styles.headerTopRow}>
         <Text></Text>
         
          <Pressable style={styles.iconButton} onPress={handleGoBack}>
            <Image source={XButtonIcon} style={styles.rightIcon} />
          </Pressable>
        </View>
           
   
    <View style={styles.container}>
   
      <TouchableOpacity
        style={styles.option}
        onPress={toggleModal}
      >
        <Text style={styles.optionText}>ביטול קריאה</Text>
      </TouchableOpacity>

      <CancelTicketModal visible={isModalVisible} onClose={toggleModal} />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  option: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  optionText: {
    fontSize: 18,
    color: '#000',
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  iconButton: {
    padding: 5,
  },
  rightIcon: {
    width: 36,
    height: 36,
    resizeMode: "contain",
    margin:15
  },
  leftIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

});

export default O5TicketOptionMenu;
