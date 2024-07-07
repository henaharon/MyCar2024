import React from 'react';
import { Dimensions, StyleSheet, View, } from 'react-native';
import Title from '../../../components/Title';
import Requirement from './Requirement';

const policeIcon = require('../../../../../assets/icons/elements24PxIconsPolice3x.png');
const handshakeIcon = require('../../../../../assets/icons/elements24PxIconsHandshake3x.png');
const cameraIcon = require('../../../../../assets/icons/elements24PxIconsCamera3x.png');
const toolIcon = require('../../../../../assets/icons/elements24PxIconsTool3x.png');
const messageIcon = require('../../../../../assets/icons/elements24PxIconsMessageExclamation3x.png');

const policeParagraph = 'במקרה של תאונה עם נפגעים, יש לדווח למוקד 100 של המשטרה.';
const handshakeParagraph = 'אין לתת התחייבות כלשהי בכתב או בעל פה.';
const cameraParagraph = 'יש למלא ולצלם את הפרטים בעזרת האפליקציה.';
const toolParagraph = 'תיקון הרכב יעשה אחרי קבלת אישור חברת הביטוח.';
const messageParagraph = 'נא להודיע למוקד השרות על התאונה בהקדם האפשרי.';
const pageTitle = 'דגשים חשובים למקרי תאונה';


export const Requirements = () => {
    return (
        <View>
            <Title title={pageTitle} />
            <View>
                <Requirement icon={policeIcon} paragraph={policeParagraph} />
                <Requirement icon={handshakeIcon} paragraph={handshakeParagraph} />
                <Requirement icon={cameraIcon} paragraph={cameraParagraph} />
                <Requirement icon={toolIcon} paragraph={toolParagraph} />
                <Requirement icon={messageIcon} paragraph={messageParagraph} />
            </View>
        </View>
    );
};


export default Requirements;
