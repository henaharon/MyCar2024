import { React, useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { LinearGradient } from "react-native-linear-gradient";
import Header from '../components/MyProfileHeader';
import ProfilePhoto from '../components/ProfilePhoto';
import ProfileForm from '../components/ProfileForm';
import UserDetails from '../components/UserDetails';
import LightboxModal from "../components/LightboxModal";
import defaultAvatar from '../assets/icons/defaultavatar.png';

const MyProfile = () => {
    const initialFormData = {
        name: '',
        surname: '',
        idNumber: '',
        dob: '',
        email: '',
        phone: '',
        licenseNumber: '',
        licenseExpiry: '',
        licenseTypes: [],
        document: null,
        profilePicture: defaultAvatar,
    };

    const [isDirty, setIsDirty] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [errors, setErrors] = useState({});
    const [showExitConfirmation, setShowExitConfirmation] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [documentStatus, setDocumentStatus] = useState('noDocument');
    const [saveTime, setSaveTime] = useState(null);

    formData.profilePicture = formData.profilePicture || defaultAvatar;

    useEffect(() => {
        const dirty = Object.keys(formData).some(key => {
            if (formData[key] !== initialFormData[key]) {
                return true;
            }
            if (key === 'profilePicture' && formData[key] !== defaultAvatar) {
                return true;
            }
            return false;
        });
        setIsDirty(dirty);
    }, [formData]);

    const handleSave = () => {
        // Validate form before saving
        const isValid = validateForm();
        if (isValid) {
            // Implement save logic
            setIsDirty(false);
            setFormIsValid(true);
            setSaveTime(new Date());
            if (documentStatus === 'noDocument' || documentStatus === 'unsavedDocument') {
                setDocumentStatus('initialSavedDocument');
                initialFormData.document = formData.document;
            }
            else {
                setDocumentStatus('savedDocument');
                initialFormData.document = formData.document;
            }
        }
        setFormIsValid(isValid);
    }

    const handleExit = () => {
        if (isDirty) {
            setShowExitConfirmation(true);
        } else {
            // Implement exit logic
        }
    }

    const validateForm = () => {
        let newErrors = {};

        // First name validation
        if (!/^[\u0590-\u05FF]{1,12}$/.test(formData.name)) {
            newErrors.name = 'שם פרטי חייב להכיל עד 12 תווים בעברית בלבד';
        }

        // Last name validation
        if (!/^[\u0590-\u05FF]{1,12}$/.test(formData.surname)) {
            newErrors.surname = 'שם משפחה חייב להכיל עד 12 תווים בעברית בלבד';
        }

        // Worker ID validation
        if (!/^\d{6}$/.test(formData.idNumber)) {
            newErrors.idNumber = 'מספר עובד חייב להכיל 6 ספרות בדיוק';
        }

        // Date of birth validation
        const dobRegex = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/;
        const dobMatch = formData.dob.match(dobRegex);
        if (dobMatch) {
            const day = parseInt(dobMatch[1], 10);
            const month = parseInt(dobMatch[2], 10);
            const year = parseInt(dobMatch[3], 10);
            const date = new Date(year, month - 1, day);
            const now = new Date();
            const minDate = new Date(now.getFullYear() - 16, now.getMonth(), now.getDate());

            // Check if the date is valid and at least 16 years old
            if (isNaN(date.getTime()) || date > minDate) {
                newErrors.dob = 'תאריך לידה לא תקין או גיל מתחת ל-16';
            } else {
                // Additional check to ensure day and month are correct (handles invalid dates like 31.02.2000)
                if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
                    newErrors.dob = 'תאריך לידה לא תקין';
                }
            }
        } else {
            newErrors.dob = 'פורמט תאריך לא תקין (DD.MM.YYYY)';
        }

        // Email validation
        if (!/^[a-zA-Z0-9._-]+@(gmail|yahoo)\.com$/.test(formData.email)) {
            newErrors.email = 'כתובת אימייל חייבת להיות של Gmail או Yahoo';
        }

        // Phone number validation
        if (!/^05[0-9][0-9]{7}$/.test(formData.phone)) {
            newErrors.phone = 'מספר טלפון לא תקין';
        }

        // License number validation
        if (!/^\d{7}$/.test(formData.licenseNumber)) {
            newErrors.licenseNumber = 'מספר רישיון חייב להכיל 7 ספרות בדיוק';
        }

        // License expiry validation
        const licenseExpiryRegex = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/;
        if (!licenseExpiryRegex.test(formData.licenseExpiry)) {
            newErrors.licenseExpiry = 'פורמט רישיון לא תקין (DD.MM.YYYY)';
        }

        // License type validation
        licenseTypes = ['A', 'A1', 'A2', 'B', 'B1', 'C', 'C1', 'D', 'D1']
        if (!formData.licenseTypes.some(type => licenseTypes.includes(type))) {
            newErrors.licenseTypes = 'נדרש לבחור לפחות סוג רישיון אחד';
        }

        if (formData.document === null) {
            newErrors.document = '*הוסף צילום ';
        }

        setErrors(newErrors);
        const isValid = Object.keys(newErrors).length === 0;
        return isValid;
    };

    const closeModal = () => {
        setShowExitConfirmation(false);
    };

    const handleFormChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    exitWithoutSave = () => {
        setShowExitConfirmation(false);
        setFormData(initialFormData);
        setDocumentStatus('noDocument');
        setFormIsValid(false);
        setErrors({});
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#e40c78', '#f05464']}>
                    <Header isDirty={isDirty} onSave={handleSave} onExit={handleExit} />
                    <ProfilePhoto
                        setIsDirty={setIsDirty}
                        formData={formData}
                    />
                    <UserDetails
                        formData={formData}
                    />
                    <ProfileForm
                        formData={formData}
                        onChange={handleFormChange}
                        setIsDirty={setIsDirty}
                        formIsValid={formIsValid}
                        errors={errors}
                        documentStatus={documentStatus}
                        saveTime={saveTime}
                        exitWithoutSave={exitWithoutSave}
                    />
                    <LightboxModal
                        visible={showExitConfirmation}
                        onClose={closeModal}
                        title="שמירה"
                        text="האם ברצונך לשמור את השינויים שנעשו בפרופיל האישי?"
                        buttons={[
                            {
                                name: "שמור שינויים",
                                onPress: () => {
                                    handleSave();
                                    closeModal();
                                },
                                gradient: true,
                            },
                            {
                                name: "חזרה, ללא שמירה",
                                backgroundColor: "#fff",
                                onPress: exitWithoutSave,

                            },
                        ]}
                    />
                </LinearGradient>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
    },
});

export default MyProfile;