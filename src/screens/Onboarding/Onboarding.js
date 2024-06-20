import React, { useState, useCallback } from 'react';
import { ScrollView, StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Intro from './components/Intro';
import Header from './components/Header';
import Form from './components/Form';

const Onboarding = () => {
    const [progress, setProgress] = useState(false);

    const setProgressCallback = useCallback(
        (value) => {
            setProgress(value);
        }, [setProgress]
    );

    return (
        <LinearGradient
            colors={['#DD0370', '#E22D66', '#E7525F']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            <View style={styles.container}>
                {!progress && <Intro setProgress={() => setProgressCallback(true)} />}
                {progress && (<ScrollView>
                    {/* Add the rest of the screens here */}
                    <Header />
                    <Form />
                </ScrollView>
                )}
            </View>

        </LinearGradient>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
   
});
