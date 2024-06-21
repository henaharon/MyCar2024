import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { LinearGradient } from "react-native-linear-gradient";
import Header from '../components/Header';
import Footer from "../components/Footer";
import ProfilePhoto from '../components/ProfilePhoto';
import ProfileForm from '../components/ProfileForm';
import UserDetails from '../components/UserDetails';

const MyProfile = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#e40c78', '#f05464']}>
                    <Header />
                    <ProfilePhoto />
                    <UserDetails />
                    <ProfileForm />
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