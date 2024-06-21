import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserDetails = () => {
    return (
            <View style={styles.container}>
                <Text style={styles.name}>אביב שרון</Text>
                <Text style={styles.id}>מספר עובד: 537 221</Text>
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