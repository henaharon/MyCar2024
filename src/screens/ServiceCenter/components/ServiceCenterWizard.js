import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { CalendarList } from 'react-native-calendars';
import ServiceHeader from '../components/ServiceHeader';
import LocationOption from '../components/LocationOption';
import ServiceButton from '../components/ServiceButton';
import GradientButton from './GradientButton';
import ServiceCenterModal from '../components/ServiceCenterModal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ServiceCenterWizard = ({ modalVisible, setModalVisible, startStep, selectedService }) => {
    const [step, setStep] = useState(startStep);
    const [details, setDetails] = useState('');
    const [moreDetails, setMoreDetails] = useState('');
    const [mileage, setMileage] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [date, setDate] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [demands, setDemands] = useState([]);
    const [images, setImages] = useState([]);
    const [moreImages, setMoreImages] = useState([]);
    const [allImages, setAllImages] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const [selectedButtons, setSelectedButtons] = useState([]);
    const [carDetails, setCarDetails] = useState({ name: 'Hyundai IONIQ', mileage: '23 441 32' });

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
            setAllImages([...images, ...moreImages]);
        } else {
            setAllImages([...images, ...moreImages]);
            setModalVisible(true);
        }
    };

    const handleBack = () => {
        if (step > 0) {
            if (selectedService.service === 'VehicleRepair' || selectedService.service === 'Other') {
                setStep(step - 1);
            } else if (step > 1) {
                setStep(step - 1);
            }
        }
    };

    const handleClose = () => {
        setModalVisible(false);
    };

    const handleAddImage = () => {
        launchImageLibrary({}, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.assets[0].uri };
                if (step === 0) {
                    setImages([...images, source]);
                } else if (step === 4) {
                    setMoreImages([...moreImages, source]);
                }
            }
        });
    };

    const handleCameraImage = () => {
        launchCamera({}, response => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.error) {
                console.log('Camera Error: ', response.error);
            } else {
                const source = { uri: response.assets[0].uri };
                if (step === 0) {
                    setImages([...images, source]);
                } else if (step === 4) {
                    setMoreImages([...moreImages, source]);
                }
            }
        });
    };

    const handleAdditionalDemandSelection = (button) => {
        setDemands(prevDemands => {
            if (prevDemands.includes(button.demand)) {
                return prevDemands.filter(item => item !== button.demand);
            } else {
                return [...prevDemands, button.demand];
            }
        });

        setSelectedButtons(prevSelected => {
            if (prevSelected.some(item => item.demand === button.demand)) {
                return prevSelected.filter(item => item.demand !== button.demand);
            } else {
                return [...prevSelected, button];
            }
        });
    };

    const demandButtons = [
        { icon: require('../D1-2-assets/icons/Lights.png'), text: 'נורות', demand: 'lights' },
        { icon: require('../D1-2-assets/icons/Wipers.png'), text: 'מגבים', demand: 'wipers' },
        { icon: require('../D1-2-assets/icons/Ac.png'), text: 'מזגן', demand: 'ac' },
        { icon: require('../D1-2-assets/icons/Brakes.png'), text: 'בלמים', demand: 'brakes' },
        { icon: require('../D1-2-assets/icons/Tires.png'), text: 'צמיגים', demand: 'tires' },
    ];

    const handleDayPress = (day) => {
        if (selectedDate === day.dateString) {
            handleNext();
        } else {
            setSelectedDate(day.dateString);
        }
    };

    const steps = [
        {
            title: 'תקלה ברכב',
            content: (
                <ScrollView contentContainerStyle={styles.stepContainer}>
                    <Image source={require('../D1-2-assets/icons/Car.png')} style={styles.coverCar} />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleStep}>פרטים</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.floatingLabel}>תיאור/הערות</Text>
                            <TextInput
                                style={styles.inputLeb}
                                placeholder="הערות/תיאור על התקלה ברכב"
                                value={details}
                                onChangeText={setDetails}
                                multiline
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                isFocused={isFocused}
                                placeholderTextColor={styles.placeholderTextColor.color}
                            />
                        </View>
                    </View>
                    <View style={styles.addImagesContainer}>
                        <Text style={styles.titleStep}>הוספת תמונות</Text>
                        <ScrollView horizontal>
                            {images.length < 3 && (
                                <>
                                    <TouchableOpacity onPress={handleAddImage}>
                                        <View style={styles.imageContainer}>
                                            <Image source={require('../D1-2-assets/icons/img.png')} style={styles.iconGallery} />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleCameraImage}>
                                        <View style={styles.imageContainer}>
                                            <Image source={require('../D1-2-assets/icons/Camera.png')} style={styles.iconCamera} />
                                        </View>
                                    </TouchableOpacity>
                                </>
                            )}
                            {images.map((image, index) => (
                                <View key={index} style={styles.imageContainer}>
                                    <Image source={image} style={styles.thumbnail} />
                                </View>
                            ))}
                        </ScrollView>
                        <Text style={styles.subtitleStep}>עד 3 תמונות</Text>
                    </View>
                </ScrollView>
            ),
        },
        {
            title: "קילומטראז'",
            content: (
                <ScrollView contentContainerStyle={styles.stepContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleStep}>מספר הקילומטרים ברכב</Text>
                        <Text style={styles.subtitleStep}>אנא הזן את מספר הקילומטרים הנוכחי ברכבך</Text>
                    </View>
                    <Image source={require('../D1-2-assets/icons/elementsPageCover.png')} style={styles.iconCover} />
                    <TextInput
                        style={[styles.input, isFocused && styles.inputFocused]}
                        placeholder='ק"מ'
                        value={mileage}
                        onChangeText={setMileage}
                        keyboardType="numeric"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        isFocused={isFocused}
                        placeholderTextColor={styles.placeholderTextColor.color}
                    />
                </ScrollView>
            ),
        },
        {
            title: 'מיקום',
            content: (
                <ScrollView contentContainerStyle={styles.stepContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleStep}>נקודות איסוף והחזרה</Text>
                        <Text style={styles.subtitleStep}>אנא בחר נקודת איסוף והחזרת הרכב</Text>
                    </View>
                    {['אמדוקס רעננה', 'אמדוקס צנרת', 'אמדוקס שדרות'].map(location => (
                        <LocationOption
                            key={location}
                            locationName={location}
                            isSelected={selectedLocation === location}
                            onPress={() => setSelectedLocation(location)}
                        />
                    ))}
                </ScrollView>
            ),
        },
        {
            title: 'מועד הטיפול',
            content: (
                <View style={styles.stepContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleStep}>בחירת מועד לטיפול</Text>
                        <Text style={styles.subtitleStep}>אנא בחר תאריך לטיפול</Text>
                    </View>
                    <CalendarList
                        onDayPress={handleDayPress}
                        markedDates={{
                            [selectedDate]: { selected: true, marked: true, selectedColor: '#E8585E' },
                        }}
                        pastScrollRange={1}
                        futureScrollRange={3}
                        scrollEnabled
                        showScrollIndicator
                        style={styles.calendar}
                        theme={{
                            calendarBackground: '#fff',
                            textSectionTitleColor: '#b6c1cd',
                            selectedDayBackgroundColor: '#E8585E',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#E8585E',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#E8585E',
                            selectedDotColor: '#ffffff',
                            arrowColor: 'orange',
                            monthTextColor: '#000',
                            indicatorColor: '#000',
                        }}
                    />
                </View>

            ),
        },
        {
            title: 'דרישות נוספות',
            content: (
                <ScrollView contentContainerStyle={styles.stepContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleStep}>תרצה שנבדוק עוד משהו?</Text>
                        <Text style={styles.subtitleStep}>(ניתן לבחור מספר אפשרויות)</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        {demandButtons.map(button => (
                            <ServiceButton
                                key={button.text}
                                icon={button.icon}
                                text={button.text}
                                style={[styles.serviceButton, selectedButtons.some(item => item.demand === button.demand) && styles.selectedButton]}
                                onPress={() => handleAdditionalDemandSelection(button)} />
                        ))}
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.floatingLabel}>אחר</Text>
                            <TextInput
                                style={styles.inputLeb}
                                placeholder="האם יש עוד משהו שתרצו שנבדוק שלא מצויין ברשימה למעלה?"
                                value={moreDetails}
                                onChangeText={setMoreDetails}
                                multiline
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                isFocused={isFocused}
                                placeholderTextColor={styles.placeholderTextColor.color}
                            />
                        </View>
                    </View>
                    <View style={styles.addImagesContainer}>
                        <Text style={styles.titleStep}>הוספת תמונות</Text>
                        <ScrollView horizontal>
                            {moreImages.length < 3 && (
                                <>
                                    <TouchableOpacity onPress={handleAddImage}>
                                        <View style={styles.imageContainer}>
                                            <Image source={require('../D1-2-assets/icons/img.png')} style={styles.iconGallery} />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleCameraImage}>
                                        <View style={styles.imageContainer}>
                                            <Image source={require('../D1-2-assets/icons/Camera.png')} style={styles.iconCamera} />
                                        </View>
                                    </TouchableOpacity>
                                </>
                            )}
                            {moreImages.map((image, index) => (
                                <View key={index} style={styles.imageContainer}>
                                    <Image source={image} style={styles.thumbnail} />
                                </View>
                            ))}
                        </ScrollView>
                        <Text style={styles.subtitleStep}>עד 3 תמונות</Text>
                    </View>
                </ScrollView>
            ),
        },
        {
            title: 'סיכום קריאה',
            content: (
                <ScrollView contentContainerStyle={styles.stepContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleStep}>זימון שירותי מוסך</Text>
                        <Text style={styles.subtitleStep}>לפניך פרטי הקריאה אנא בדוק שכל הפרטים נכונים לפני שליחה.</Text>
                        <View style={styles.imgAndTextRow}>
                            <Image source={selectedService.icon} style={styles.iconRow} />
                            <Text style={styles.defaultFerText}>{selectedService.text}</Text>
                        </View>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleStep}>תיאור / הערות</Text>
                        <Text style={styles.subtitleStep}>{details}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleStep}>תמונות</Text>
                        <ScrollView horizontal>
                            {allImages.map((image, index) => (
                                <View key={index} style={styles.imageContainer}>
                                    <Image source={{ uri: image.uri }} style={styles.thumbnail} />
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleStep}>דרישות נוספות</Text>
                        {selectedButtons.map((button, index) => (
                            <View key={index} style={styles.imgAndTextRow}>
                                <Image source={button.icon} style={styles.iconRow} />
                                <Text style={styles.defaultFerText}>{button.text}</Text>
                            </View>
                        ))}
                        {moreDetails ? (
                            <View style={styles.imgAndTextRow}>
                                <Image source={require('../D1-2-assets/icons/Other.png')} style={styles.iconRow} />
                                <View style={styles.defaultTextCol}>
                                    <Text style={styles.defaultFerText}>אחר</Text>
                                    <Text style={styles.defaultSecText}>{moreDetails}</Text>
                                </View>
                            </View>
                        ) : null}
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleStep}>תמונות נוספות</Text>
                        <ScrollView horizontal>
                            {moreImages.map((image, index) => (
                                <View key={index} style={styles.imageContainer}>
                                    <Image source={{ uri: image.uri }} style={styles.thumbnail} />
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleStep}>פרטים כללים</Text>
                        <View style={styles.imgAndTextRow}>
                            <View style={styles.imgCircle}>
                                <Image source={require('../D1-2-assets/icons/CarB.png')} style={styles.iconDemand} />
                            </View>
                            <View style={styles.defaultTextCol}>
                                <Text style={styles.defaultFerText}>{carDetails.name}</Text>
                                <Text style={styles.defaultSecText}>{carDetails.mileage}</Text>
                            </View>
                        </View>
                        <View style={styles.imgAndTextRow}>
                            <View style={styles.imgCircle}>
                                <Image source={require('../D1-2-assets/icons/locationB.png')} style={styles.iconDemand} />
                            </View>
                            <View style={styles.defaultTextCol}>
                                <Text style={styles.defaultFerText}>נקודות איסוף והחזרה</Text>
                                <Text style={styles.defaultSecText}>{selectedLocation}</Text>
                            </View>
                        </View>
                        <View style={styles.imgAndTextRow}>
                            <View style={styles.imgCircle}>
                                <Image source={require('../D1-2-assets/icons/CalendarB.png')} style={styles.iconDemand} />
                            </View>
                            <View style={styles.defaultTextCol}>
                                <Text style={styles.defaultFerText}>מועד טיפול</Text>
                                <Text style={styles.defaultSecText}>{selectedDate}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.warning}>
                        <View style={styles.awrningCircle}>
                            <Image source={require('../D1-2-assets/icons/warningB.png')} style={styles.awrningIcon} />
                        </View>
                        <View style={styles.warningMessage}>
                            <Text style={styles.titleStep}>לידיעתך</Text>
                            <Text style={styles.defaultText}>יום לפני המועד המבוקש תשלח הודעת תזכורת למכשירך.</Text>
                        </View>
                    </View>
                    <GradientButton onPress={() => setModalVisible(true)} text="אישור ושליחה" />
                </ScrollView>
            ),
        }
    ];

    return (
        <View style={styles.container}>
            <ServiceHeader step={step} handleBack={handleBack} handleNext={handleNext} handleClose={handleClose} title={steps[step].title} />
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
    submitButton: {
        backgroundColor: '#E8585E',
        paddingVertical: Dimensions.get('window').width * 0.02,
        paddingHorizontal: Dimensions.get('window').width * 0.04,
        borderRadius: Dimensions.get('window').width * 0.05,
        marginTop: Dimensions.get('window').width * 0.02,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: Dimensions.get('window').width * 0.04,
    },
    stepContainer: {
        flexGrow: 1,
        alignItems: 'center',
        padding: windowWidth * 0.05,
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: windowWidth * 0.08,
        borderTopRightRadius: windowWidth * 0.08,
    },
    textContainer: {
        alignItems: 'flex-end',
        width: '90%',
        margin: windowHeight * 0.01,
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
    defaultText: {
        color: '#000',
    },
    iconCover: {
        width: windowWidth * 0.7,
        height: windowWidth * 0.5,
        marginBottom: windowHeight * 0.02,
    },
    input: {
        borderWidth: 1,
        borderColor: '#E0E0E2',
        textAlign: 'center',
        borderRadius: windowWidth * 0.02,
        padding: windowWidth * 0.03,
        width: '70%',
        margin: windowHeight * 0.02,
        color: '#000',
        backgroundColor: '#fff'
    },
    inputFocused: {
        borderColor: '#5064EB',
    },
    placeholderTextColor: {
        color: '#68677E',
    },
    button: {
        backgroundColor: '#E8585E',
        paddingVertical: windowWidth * 0.02,
        paddingHorizontal: windowWidth * 0.04,
        borderRadius: windowWidth * 0.05,
        marginTop: windowWidth * 0.02,
    },
    buttonText: {
        color: '#fff',
        fontSize: windowWidth * 0.04,
    },
    coverCar: {
        margin: windowWidth * 0.1,
        width: windowWidth * 0.30,
        height: windowWidth * 0.30,
    },
    addImagesContainer: {
        alignItems: 'flex-end',
        width: '90%',
        margin: windowHeight * 0.01,
    },
    iconGallery: {
        width: windowWidth * 0.1,
        height: windowWidth * 0.1,
    },
    iconCamera: {
        width: windowWidth * 0.1,
        height: windowWidth * 0.1,
    },
    imageContainer: {
        width: windowWidth * 0.25,
        height: windowWidth * 0.35,
        borderRadius: 8,
        overflow: 'hidden',
        marginVertical: 10,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#E0E0E2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumbnail: {
        width: '100%',
        height: '100%',
    },
    iconRow: {
        width: windowHeight * 0.06,
        height: windowHeight * 0.06,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    },
    serviceButton: {
        flex: 1,
        minWidth: '40%',
        marginBottom: windowHeight * 0.01,
    },
    imgAndTextRow: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        width: '100%',
    },
    imgCircle: {
        marginVertical: windowWidth * 0.01,
        width: windowWidth * 0.12,
        height: windowWidth * 0.12,
        backgroundColor: '#DDDCE1',
        borderRadius: windowWidth * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconDemand: {
        width: windowWidth * 0.05,
        height: windowWidth * 0.05,
    },
    warning: {
        margin: windowHeight * 0.04,
        padding: windowHeight * 0.02,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        width: '95%',
        backgroundColor: '#F5EFDD',
        borderRadius: windowWidth * 0.05,
    },
    warningMessage: {
        width: '80%',
    },
    awrningCircle: {
        width: windowWidth * 0.12,
        height: windowWidth * 0.12,
        backgroundColor: '#F4BC00',
        borderRadius: windowWidth * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    awrningIcon: {
        width: windowWidth * 0.06,
        height: windowWidth * 0.06,
    },
    dateButton: {
        backgroundColor: '#5064EB',
        padding: windowHeight * 0.02,
        borderRadius: windowWidth * 0.05,
        marginTop: windowHeight * 0.02,
    },
    dateButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: windowWidth * 0.04,
    },
    selectedDateText: {
        marginTop: windowHeight * 0.02,
        color: '#000',
        fontSize: windowWidth * 0.04,
    }, inputContainer: {
        width: "100%",
        marginTop: windowHeight * 0.02,
        marginBottom: windowHeight * 0.02,
        position: "relative",
    },
    floatingLabel: {
        position: "absolute",
        top: -windowHeight * 0.015,
        right: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 5,
        fontSize: windowWidth * 0.035,
        color: "#68677E",
        zIndex: 1,
    },
    inputLeb: {
        borderWidth: 1,
        borderColor: "#E0E0E2",
        textAlign: "right",
        borderRadius: windowWidth * 0.02,
        padding: windowWidth * 0.03,
        width: "100%",
        backgroundColor: "#fff",
        minHeight: windowHeight * 0.08,
        paddingTop: windowHeight * 0.02,
        color: "#000",
    },
    selectedButton: {
        backgroundColor: '#E8585E',
        color: "#fff",
    },
    calendar: {
        width: '100%',
        height: windowHeight * 0.6,
    },
    defaultFerText: {
        paddingRight: windowHeight * 0.01,
        color: '#000',
        fontWeight: 'bold',
    },
    defaultSecText: {
        color: '#68677E',
        paddingRight: windowHeight * 0.01,
    }
});

export default ServiceCenterWizard;
