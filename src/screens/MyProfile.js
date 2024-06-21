import React from "react";
import { View, StyleSheet } from "react-native";
import Header from '../uiKit/Header';
import Footer from "../components/Footer";
import ProfilePhoto from '../components/ProfilePhoto';
import ProfileForm from '../components/ProfileForm';

const MyProfile = () => {
    return (
        <View style={styles.container}>
            <Header />
            <ProfilePhoto />
            <ProfileForm />
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default MyProfile;