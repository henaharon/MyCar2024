import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import ServiceCenterModal from '../components/ServiceCenterModal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ServiceCenterWizard = ({ modalVisible, setModalVisible, startStep }) => {
    const [step, setStep] = useState(startStep);
    const [details, setDetails] = useState('');
    const [mileage, setMileage] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [demands, setDemands] = useState('');

    const handleNext = () => {
        if (step < 5) {
            setStep(step + 1);
        } else {
            setModalVisible(true);
        }
    };

    const handleBack = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const handleClose = () => {
        setModalVisible(false);
    };

    const steps = [
        {
            title: 'תקלה ברכב',
            content: (
                <View style={styles.stepContainer}>
                </View>
            ),
        },
        {
            title: "קילומטראז'",
            content: (
                <View style={styles.stepContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleStep}>מספר הקילומטרים ברכב</Text>
                        <Text style={styles.subtitleStep}>אנא הזן את מספר הקילומטרים הנוכחי ברכבך</Text>
                    </View>
                    <Image source={require('../D1-2-assets/icons/Brakes.png')} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder='ק"מ'
                        value={mileage}
                        onChangeText={setMileage}
                        keyboardType="numeric"
                    />
                    <TouchableOpacity style={styles.button} onPress={handleNext}>
                        <Text style={styles.buttonText}>אישור</Text>
                    </TouchableOpacity>
                </View>
            ),
        },
        {
            title: 'מיקום',
            content: (
                <View style={styles.stepContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleStep}>נקודות איסוף והחזרה</Text>
                        <Text style={styles.subtitleStep}>אנא בחר נקודת איסוף והחזרת הרכב</Text>
                    </View>
                    <View style={styles.locationOption}>
                        <Image source={require('../D1-2-assets/icons/location.png')} style={styles.locationIcon} />
                        <Text style={styles.locationText}>אמדוקס רעננה</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>בחירה</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.locationOption}>
                        <Image source={require('../D1-2-assets/icons/location.png')} style={styles.locationIcon} />
                        <Text style={styles.locationText}>אמדוקס צנרת</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>בחירה</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.locationOption}>
                        <Image source={require('../D1-2-assets/icons/location.png')} style={styles.locationIcon} />
                        <Text style={styles.locationText}>אמדוקס שדרות</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>בחירה</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ),
        },
        {
            title: 'מועד הטיפול',
            content: (
                <ScrollView contentContainerStyle={styles.stepContainer}>
                </ScrollView>
            ),
        },
        {
            title: 'דריושות נוספות',
            content: (
                <View style={styles.stepContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter demands"
                        value={demands}
                        onChangeText={setDemands}
                    />
                </View>
            ),
        },
        {
            title: 'סיכום',
            content: (
                <View style={styles.stepContainer}>
                    <Text>Details: {details}</Text>
                    <Text>Mileage: {mileage}</Text>
                    <Text>Location: {location}</Text>
                    <Text>Date: {date}</Text>
                    <Text>Demands: {demands}</Text>
                    <TouchableOpacity style={styles.submitButton} onPress={() => setModalVisible(true)}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            ),
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {(step === 0 || step === 1 || step === 2) && (
                    <TouchableOpacity onPress={handleBack}>
                        <Image source={require('../D1-2-assets/icons/Back.png')} style={styles.navButtonImage} />
                    </TouchableOpacity>
                )}
                <Text style={styles.title}>{steps[step].title}</Text>
                {(step === 0 || step === 1 || step === 2 || step === 4 || step === 5) && (
                    <TouchableOpacity onPress={handleNext}>
                        <Image source={require('../D1-2-assets/icons/Next.png')} style={styles.navButtonImage} />
                    </TouchableOpacity>
                )}
                {step === 3 && (
                    <TouchableOpacity onPress={handleClose}>
                        <Image source={require('../D1-2-assets/icons/Close.png')} style={styles.navButtonImage} />
                    </TouchableOpacity>
                )}
            </View>
            {steps[step].content}
            <ServiceCenterModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: windowWidth * 0.05,
    },
    title: {
        color: '#fff',
        fontSize: windowWidth * 0.05,
        textAlign: 'center',
    },
    navButtonImage: {
        width: windowWidth * 0.08,
        height: windowWidth * 0.08,
    },
    stepContainer: {
        flex: 1,
        alignItems: 'center',
        padding: windowWidth * 0.05,
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: windowWidth * 0.08,
        borderTopRightRadius: windowWidth * 0.08,
    },
    subtitle: {
        color: '#000',
        fontSize: windowWidth * 0.04,
        marginBottom: windowHeight * 0.02,
    },
    icon: {
        width: windowWidth * 0.4,
        height: windowWidth * 0.4,
        marginBottom: windowHeight * 0.02,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: windowWidth * 0.03,
        width: '100%',
        marginBottom: windowHeight * 0.02,
    },
    buttonText: {
        color: '#fff',
        fontSize: windowWidth * 0.04,
    },
    button: {
        backgroundColor: '#E8585E',
        paddingVertical: windowWidth * 0.02,
        paddingHorizontal: windowWidth * 0.04,
        borderRadius: windowWidth * 0.05,
        marginTop: windowWidth * 0.02,
    },
    textContainer: {
        alignItems: 'flex-end',
        width: '90%',
        margin: windowHeight * 0.01
    },
    titleStep: {
        color: '#000',
        fontSize: windowWidth * 0.05,
        fontWeight: 'bold',
    },
    subtitleStep: {
        color: '#68677E',
        fontSize: windowWidth * 0.04,
        marginBottom: windowHeight * 0.02,
    },
    locationOption: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: windowWidth * 0.04,
        marginBottom: windowHeight * 0.02,
        borderRadius: windowWidth * 0.02,
        width: '90%',
    },
    locationText: {
        fontSize: windowWidth * 0.04,
        color: '#000',
    },
    chooseButton: {
        color: '#FFF',
        backgroundColor: '#E8585E',
        borderRadius: windowWidth * 0.5,
        paddingVertical: windowHeight * 0.01,
        paddingHorizontal: windowWidth * 0.04,
    },
    chooseButtonText: {
        color: '#FFF',
        fontSize: windowWidth * 0.04,
    },
    locationIcon: {
        width: windowWidth * 0.06,
        height: windowWidth * 0.06,
    },
    carIcon: {
        width: windowWidth * 0.2,
        height: windowWidth * 0.2,
        marginBottom: windowHeight * 0.02,
    },
    detailsTitle: {
        fontSize: windowWidth * 0.05,
        color: '#000',
        marginBottom: windowHeight * 0.01,
    },
    detailsInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: windowWidth * 0.03,
        width: '100%',
        marginBottom: windowHeight * 0.02,
        textAlign: 'right',
    },
    imagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    imageIcon: {
        width: windowWidth * 0.15,
        height: windowWidth * 0.15,
    },
    exampleImage: {
        width: windowWidth * 0.15,
        height: windowWidth * 0.15,
        marginHorizontal: windowWidth * 0.02,
    },
});

export default ServiceCenterWizard;