import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ServiceCenterWizard from './components/ServiceCenterWizard';

const ServiceCenterProcess = ({ navigation, route }) => {
    const { startStep } = route.params;
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <ServiceCenterWizard modalVisible={modalVisible} setModalVisible={setModalVisible} startStep={startStep} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ServiceCenterProcess;
