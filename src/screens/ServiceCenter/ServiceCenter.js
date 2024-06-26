import React from 'react';
import { ScrollView, ImageBackground, Image, SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ServiceButton from './components/ServiceButton';

const ServiceCenter = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <ImageBackground
                source={require('./D1-2-assets/images/tim-mossholder-unsplash.jpg')}
                style={styles.imageBackground}>
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.header}>
                        <View style={styles.headerContent}>
                            <Text style={styles.headerText}>זימון שירותי מוסך</Text>
                        </View>
                        <TouchableOpacity style={styles.touchable}>
                            <Image source={require('./D1-2-assets/icons/Close.png')} style={styles.closeButtonImage} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ImageBackground>
            <View style={styles.content}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>איך אפשר לעזור לך?</Text>
                    <Text style={styles.subtitle}>אנא בחר שירות</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <ServiceButton
                        icon={require('./D1-2-assets/icons/Car.png')}
                        text="תקלת רכב"
                        style={styles.serviceButton}
                    // onPress={() => navigation.navigate('CarIssue')}
                    />
                    <ServiceButton
                        icon={require('./D1-2-assets/icons/RoutineService.png')}
                        text="טיפול תקופתי"
                        style={styles.serviceButton}
                    // onPress={() => navigation.navigate('RoutineMaintenance')}
                    />
                    <ServiceButton
                        icon={require('./D1-2-assets/icons/Warning.png')}
                        text="תאונה / נזק"
                        style={styles.serviceButton}
                    // onPress={() => navigation.navigate('AccidentDamage')}
                    />
                    <ServiceButton
                        icon={require('./D1-2-assets/icons/Brakes.png')}
                        text="ביקורת בטיחות"
                        style={styles.serviceButton}
                    // onPress={() => navigation.navigate('SafetyCheck')}
                    />
                    <ServiceButton
                        icon={require('./D1-2-assets/icons/Brakes.png')}
                        text="אחר"
                        style={styles.serviceButton}
                    // onPress={() => navigation.navigate('SafetyCheck')}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default ServiceCenter;

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    imageBackground: {
        width: "100%",
        height: 250,
    },
    safeArea: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    headerContent: {
        flex: 1,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        color: '#FFF',
    },
    touchable: {
        width: 40,
        height: 40,
    },
    closeButtonImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        margin: 10,
    },
    content: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        marginTop: -30,
    },
    textContainer: {
        alignItems: 'flex-end',
        width: '90%',
        margin: 15,
    },
    title: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#68677E',
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
        marginBottom: 10,
    },
});
