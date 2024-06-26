import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserDetails = ( { formData }) => {
    return (
            <View style={styles.container}>
                <Text style={styles.name}>{(formData.name ? formData.name : 'אביב')} {(formData.surname ? formData.surname : 'שרון')}</Text>
                <Text style={styles.id}>מספר עובד: {formData.idNumber ? formData.idNumber : '221 537'}</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 12,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#fff',
    },
    id: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 16,
    },
});

export default UserDetails;