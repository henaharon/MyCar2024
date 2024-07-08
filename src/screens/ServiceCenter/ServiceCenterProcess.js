import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ServiceCenterWizard from './components/ServiceCenterWizard';

const ServiceCenterProcess = ({ navigation, route }) => {
    const { startStep, selectedService } = route.params;
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <ServiceCenterWizard modalVisible={modalVisible} setModalVisible={setModalVisible} startStep={startStep} selectedService={selectedService} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ServiceCenterProcess;
