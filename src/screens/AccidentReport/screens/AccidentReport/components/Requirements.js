import React from 'react';
import { Dimensions, StyleSheet, View, } from 'react-native';
import Title from '../../../components/Title';
import Requirement from './Requirement';

export const Requirements = () => {
    return (
        <View>
            <Title title="דגשים חשובים למקרי תאונה" />
            <View>
                <Requirement icon={require('../../../../../assets/i1-assets/elements24PxIconsPolice3x.png')} paragraph="במקרה של תאונה עם נפגעים, יש לדווח למוקד 100 של המשטרה." />
                <Requirement icon={require('../../../../../assets/i1-assets/elements24PxIconsHandshake3x.png')} paragraph="אין לתת התחייבות כלשהי בכתב או בעל פה." />
                <Requirement icon={require('../../../../../assets/i1-assets/elements24PxIconsCamera3x.png')} paragraph="יש למלא ולצלם את הפרטים בעזרת האפליקציה." />
                <Requirement icon={require('../../../../../assets/i1-assets/elements24PxIconsTool3x.png')} paragraph="תיקון הרכב יעשה אחרי קבלת אישור חברת הביטוח." />
                <Requirement icon={require('../../../../../assets/i1-assets/elements24PxIconsMessageExclamation3x.png')} paragraph="נא להודיע למוקד השרות על התאונה בהקדם האפשרי." />
            </View>
        </View>
    );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
});

export default Requirements;
