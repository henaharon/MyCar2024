import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Modal, StyleSheet, Image, ScrollView, TouchableWithoutFeedback } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import Divider from "./Divider";
import LightboxModal from "./LightboxModal";
import LightboxModal2 from "./LightboxModal2";
import CustomButton from "./customButton";
import documentIcon from "../assets/icons/documenticon.png";
import logoutIcon from "../assets/icons/logouticon.png";
import checkmarkicon from "../assets/icons/checkmarkicon.png";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome
import viewicon from '../assets/icons/viewicon.png';
import LicenseTypeButton from "./LicenseTypeButton";

const ProfileForm = ({ formData, onChange, setIsDirty, formIsValid, errors, documentStatus, saveTime, exitWithoutSave }) => {

    const [licenseTypes, setLicenseTypes] = useState(formData.licenseTypes || []);
    const [isModalVisible, setModalVisible] = useState(false);
    const [showUploadDocumentModal, setShowUploadDocumentModal] = useState(false);
    const [showViewDocumentModal, setShowViewDocumentModal] = useState(false);
    const [document, setDocument] = useState(null);
    const [localDocumentStatus, setLocalDocumentStatus] = useState(documentStatus);
    const [licenseModalVisible, setLicenseModalVisible] = useState(false);

    formData.document = document;
    useEffect(() => {
        setLocalDocumentStatus(documentStatus);
    }, [documentStatus]);

    useEffect(() => {
        setLicenseTypes(formData.licenseTypes || []);
    }, [formData.licenseTypes]);

    const handleInputChange = (field, value) => {
        onChange(field, value);
        setIsDirty(true);   // Notify parent component that form is dirty
    };

    const handleLicenseTypePress = (type, isSelected) => {
        const updatedLicenseTypes = isSelected
            ? [...licenseTypes, type]
            : licenseTypes.filter(licenseType => licenseType !== type);

        setLicenseTypes(updatedLicenseTypes);
        handleInputChange('licenseTypes', updatedLicenseTypes);
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    let documentIconComponent = <Icon name="plus-circle" size={32} color='red' style={styles.leftIcon} />; // Default icon
    let bottomButtonText = 'הוסף צילום';
    bottomButtonTextValidStyle = {};
    bottomButtonTextInvalidStyle = { color: 'black' };



    if (documentStatus === 'unsavedDocument' || documentStatus === 'noDocument' || errors.document) {
        documentIconComponent = <Icon name="plus-circle" size={32} color='pink' style={styles.leftIcon} />; // Default icon;
        bottomButtonText = 'הוסף צילום';
    }
    else if (documentStatus === 'savedDocument' || documentStatus === 'initialSavedDocument') {
        documentIconComponent = <Image source={checkmarkicon} style={styles.leftIcon} />;
        bottomButtonText = 'עודכן ' + saveTime.toLocaleString();
        bottomButtonTextValidStyle = { color: 'green' };
    }

    const toggleDocumentModal = () => {
        if (localDocumentStatus === 'noDocument') {
            setShowUploadDocumentModal(!showUploadDocumentModal);

        } else {
            setShowViewDocumentModal(!showViewDocumentModal);
        }
    };

    const choosePhoto = () => {
        const options = {
            noData: true,
        };
        launchImageLibrary(options, response => {
            if (response.uri) {
                setDocument({ uri: response.uri });
                return true;
            }
        });
        return false;
    };

    const takePhoto = () => {
        const options = {
            noData: true,
        };
        launchCamera(options, response => {
            if (response.assets && response.assets.length > 0) {
                setDocument({ uri: response.assets[0].uri });
                return true;
            }
        });
        return false;
    };

    const handleTakePhoto = () => {
        if (takePhoto()) {
            setLocalDocumentStatus('unsavedDocument');
            setIsDirty(true);
        }
        setShowUploadDocumentModal(false);
    };

    const handleChoosePhoto = () => {
        if (choosePhoto()) {
            setLocalDocumentStatus('unsavedDocument');
            setIsDirty(true);
        }
        setShowUploadDocumentModal(false);
    };

    const handleChooseFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            });
            setDocument(res);
            setLocalDocumentStatus('unsavedDocument');
            setIsDirty(true);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled the picker');
            } else {
                console.log(err);
            }
        }
        setShowUploadDocumentModal(false);
    };

    const handleShowDocument = () => {
        setShowViewDocumentModal(false);
    };

    const handleEraseDocument = () => {
        setDocument(null);
        setLocalDocumentStatus('noDocument');
        setIsDirty(true);
        setShowViewDocumentModal(false);
    };

    const modalButtonsUnsaved = [
        {
            text: 'צלם תמונה',
            icon: 'camera',
            onPress: handleTakePhoto,
        },
        {
            text: 'בחר מגלריית תמונות',
            icon: 'photo',
            onPress: handleChoosePhoto,
        },
        {
            text: 'בחר מתיקיית קבצים',
            icon: 'folder-open',
            onPress: handleChooseFile,
        },
    ];

    const modalButtonsSaved = [
        {
            text: 'הצגת מסמך',
            icon: 'eye',
            onPress: handleShowDocument,

        },
        {
            text: 'מחק מסמך',
            icon: 'trash',
            onPress: handleEraseDocument,
            textColor: 'red',
        },
    ];

    toggleLicenseModal = () => {
        setLicenseModalVisible(!licenseModalVisible);
    }


    return (
        <View style={styles.formContainer}>
            <Text style={styles.subHeader}>פרטים כלליים</Text>
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>שם פרטי</Text>
                <TextInput
                    style={styles.input}
                    value={formData.name}
                    onChangeText={(value) => handleInputChange('name', value)}
                    placeholder="שלמה"
                />
            </View>
            {errors.name && <Text style={styles.errorsText}>{errors.name}</Text>}
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>שם משפחה</Text>
                <TextInput
                    style={styles.input}
                    value={formData.surname}
                    onChangeText={(value) => handleInputChange('surname', value)}
                    placeholder="ארצי"
                />
            </View>
            {errors.surname && <Text style={styles.errorsText}>{errors.surname}</Text>}
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>מספר עובד</Text>
                <TextInput
                    style={styles.input}
                    value={formData.idNumber}
                    onChangeText={(value) => handleInputChange('idNumber', value)}
                    placeholder="123456"
                />
            </View>
            {errors.idNumber && <Text style={styles.errorsText}>{errors.idNumber}</Text>}
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>תאריך לידה</Text>
                <TextInput
                    style={styles.input}
                    value={formData.dob}
                    onChangeText={(value) => handleInputChange('dob', value)}
                    placeholder="1.1.1990"
                />
            </View>
            {formIsValid ? (
                <View style={styles.validationLabel}>
                    <Text style={styles.validationText}>פרטים נשמרו בהצלחה</Text>
                </View>
            ) : null}
            {errors.dob && <Text style={styles.errorsText}>{errors.dob}</Text>}
            <Divider />
            <Text style={styles.subHeader}>פרטי התקשורת</Text>
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>כתובת מייל</Text>
                <TextInput
                    style={styles.input}
                    value={formData.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                    placeholder="example@gmail.com"
                />
            </View>
            {errors.email && <Text style={styles.errorsText}>{errors.email}</Text>}
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>טלפון</Text>
                <TextInput
                    style={styles.input}
                    value={formData.phone}
                    onChangeText={(value) => handleInputChange('phone', value)}
                    placeholder="0547883116"
                />
            </View>
            {formIsValid ? (
                <View style={styles.validationLabel}>
                    <Text style={styles.validationText}>פרטים נשמרו בהצלחה</Text>
                </View>
            ) : null}
            {errors.phone && <Text style={styles.errorsText}>{errors.phone}</Text>}
            <Divider />
            <Text style={styles.subHeader}>פרטי רישיון נהיגה</Text>
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>מספר רישיון נהיגה</Text>
                <TextInput
                    style={styles.input}
                    value={formData.licenseNumber}
                    onChangeText={(value) => handleInputChange('licenseNumber', value)}
                    placeholder="8427081"
                />
            </View>
            {errors.licenseNumber && <Text style={styles.errorsText}>{errors.licenseNumber}</Text>}
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>תוקף רישיון נהיגה</Text>
                <TextInput
                    style={styles.input}
                    value={formData.licenseExpiry}
                    onChangeText={(value) => handleInputChange('licenseExpiry', value)}
                    placeholder="23.5.2025"
                />
            </View>
            {errors.licenseExpiry && <Text style={styles.errorsText}>{errors.licenseExpiry}</Text>}
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>סוג רישיון נהיגה</Text>
                <Text style={styles.licenseTypeText} onPress={toggleLicenseModal}>{formData.licenseTypes.join(' ')}</Text>
            </View>
            {errors.licenseTypes && <Text style={styles.errorsText}>{errors.licenseTypes}</Text>}
            {formIsValid ? (
                <View style={styles.validationLabel}>
                    <Text style={styles.validationText}>פרטים נשמרו בהצלחה</Text>
                </View>
            ) : null}
            <Divider />
            {/* document button */}
            <Text style={styles.subHeader}>מסמכים</Text>
            <View style={styles.buttonContainer}>
                <CustomButton
                    onPress={toggleDocumentModal}
                    buttonStyle={styles.documentButton}
                    textStyle={styles.documentButtonText}
                >
                    <View style={styles.iconAndTextContainer}>
                        <View style={styles.rightIconContainer}>
                            <Image source={documentIcon} style={styles.rightIcon} />
                        </View>
                        <View style={styles.buttonTextContainer}>
                            <Text style={styles.buttonTextTop}>צילום העתק רישיון נהיגה</Text>
                            <View style={styles.textAndErrorContainer}>
                                {errors.document && <Text style={styles.documentErrorText}>*</Text>}
                                <Text style={[styles.buttonTextBottom, (errors.document ? bottomButtonTextInvalidStyle : bottomButtonTextValidStyle)]}>{bottomButtonText}</Text>
                            </View>
                        </View>
                    </View>
                    {documentIconComponent}
                    {localDocumentStatus === 'savedDocument' && <Image source={viewicon} style={styles.leftIcon} />}
                </CustomButton>
            </View>
            <Divider />
            <CustomButton
                onPress={toggleModal}
                buttonStyle={styles.logoutButton}
            >
                <Image source={logoutIcon} style={styles.logoutIcon} />
                <Text style={styles.logoutButtonText}>התנתק</Text>
            </CustomButton>
            <LightboxModal
                visible={isModalVisible}
                onClose={toggleModal}
                title="התנתק"
                text="האם ברצונך להתנתק?"
                buttons={[
                    {
                        name: "התנתק",
                        onPress: () => {
                            toggleModal();
                            exitWithoutSave();
                        },
                        backgroundColor: "red",

                    },
                    {
                        name: "סגור",
                        onPress: toggleModal,
                    },
                ]}
            />
            <LightboxModal2
                visible={showUploadDocumentModal}
                onClose={() => setShowUploadDocumentModal(false)}
                title="הוספת העתק רישיון נהיגה"
                buttons={modalButtonsUnsaved}
            />
            <LightboxModal2
                visible={showViewDocumentModal}
                onClose={() => setShowViewDocumentModal(false)}
                title="העתק רישיון נהיגה"
                buttons={modalButtonsSaved}
            />
            {/* license type modal */}
            <Modal
                transparent={true}
                visible={licenseModalVisible}
                onRequestClose={toggleLicenseModal}
                animationType={'none'}
            >
                <TouchableWithoutFeedback onPress={toggleLicenseModal}>
                    <View style={styles.modalOverlay}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>סוג רישיון נהיגה</Text>
                                <Text style={styles.modalText}>בחרו את סוג רשיון הנהיגה שברשותכם</Text>
                                <ScrollView justifyContent='flex-end' horizontal={true} style={styles.licenseButtonContainer}>
                                    <LicenseTypeButton text="D" isSelected={licenseTypes.includes("D")} onPress={handleLicenseTypePress} />
                                    <LicenseTypeButton text="D1" isSelected={licenseTypes.includes("D1")} onPress={handleLicenseTypePress} />
                                    <LicenseTypeButton text="C" isSelected={licenseTypes.includes("C")} onPress={handleLicenseTypePress} />
                                    <LicenseTypeButton text="C1" isSelected={licenseTypes.includes("C1")} onPress={handleLicenseTypePress} />
                                    <LicenseTypeButton text="B" isSelected={licenseTypes.includes("B")} onPress={handleLicenseTypePress} />
                                    <LicenseTypeButton text="B1" isSelected={licenseTypes.includes("B1")} onPress={handleLicenseTypePress} />
                                    <LicenseTypeButton text="A" isSelected={licenseTypes.includes("A")} onPress={handleLicenseTypePress} />
                                    <LicenseTypeButton text="A1" isSelected={licenseTypes.includes("A1")} onPress={handleLicenseTypePress} />
                                    <LicenseTypeButton text="A2" isSelected={licenseTypes.includes("A2")} onPress={handleLicenseTypePress} />
                                </ScrollView>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal >
        </View >
    );
};

const styles = StyleSheet.create({
    formContainer: {
        padding: 30,
        backgroundColor: '#fff',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    subHeader: {
        fontSize: 20,
        marginBottom: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    input: {
        textAlign: 'right',
        height: 56,
        marginBottom: 24,
        border: 'none',
        width: '100%',
        paddingHorizontal: 8,
        color: 'black',
    },
    fieldSet: {
        height: 56,
        marginBottom: 24,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        borderColor: 'lightgray',
    },
    legend: {
        position: 'absolute',
        top: -10,
        right: 10,
        backgroundColor: '#FFFFFF',
        color: 'black',
    },
    licenseTypeText: {
        textAlign: 'right',
        marginTop: 16,
        width: '100%',
        paddingHorizontal: 8,
        color: 'black',
    },
    buttonContainer: {
        width: '100%',
    },
    documentButton: {
        flexDirection: 'row-reverse',
        backgroundColor: 'transparent',
        paddingVertical: 10,
        // paddingHorizontal: 20,

    },
    documentButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    iconAndTextContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    rightIconContainer: {
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 8,
        padding: 15,
        marginLeft: 8,
    },
    buttonTextTop: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonTextBottom: {
        fontSize: 16,
    },
    rightIcon: {
        width: 32,
        height: 32,
    },
    leftIcon: {
        width: 32,
        height: 32,
    },
    logoutButton: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 50,
        paddingVertical: 20,
        marginBottom: 24,
    },
    logoutButtonText: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
    },
    logoutIcon: {
        width: 28,
        height: 28,
        marginLeft: 16,
    },
    validationLabel: {
        backgroundColor: '#c7edca',
        marginTop: -32,
        paddingHorizontal: 32,
        paddingVertical: 8,
        borderRadius: 50,
        alignSelf: 'center',
    },
    validationText: {
        color: 'green',
        fontWeight: 'bold',
    },
    errorsText: {
        color: 'red',
        fontSize: 12,
        textAlign: 'right',
        marginTop: -24,
        marginBottom: 24,
    },
    textAndErrorContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    documentErrorText: {
        color: 'red',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
        animationType: '',
    },
    modalContent: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 24,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        animationType: 'slide',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    modalText: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'right',
        marginBottom: 16,
    },
    licenseButtonContainer: {
        width: '100%',
        flexDirection: 'row-reverse',
    },
});

export default ProfileForm;