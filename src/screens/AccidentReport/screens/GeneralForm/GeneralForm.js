import React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native'
import {BaseView, BodyBaseView} from '../../../../uiKit/BaseView'
import {Button} from '../../components/Button'
import {Input} from '../../components/Input'
import DateTimeInput from '../../components/DateTimeInput'
import Title from '../../components/Title'

const GeneralForm = () => {
    return (
        <BaseView>
        <BodyBaseView style={{alignItems: 'center'}}>
            <View style={styles.GeneralFormContainer}>
            <Title title={"פרטים כלליים"}/>
                <View style={styles.rowInputsContainer}>
                    <DateTimeInput text={"שעה"} width={0.4} type={"time"} required={true}/>
                    <DateTimeInput text={"תאריך"} width={0.5} type={"date"} required={true}/>
                </View>
                <Input placeholder={"עיר / כביש מרכזי"} required={false} width={0.92} type={""}/>
                <View style={styles.rowInputsContainer}>
                <Input placeholder={"מ.בית"} required={false} width={0.3} type={"number"}/>
                <Input placeholder={"כתובת"} required={false} width={0.6} type={""}/>
                </View>
                <View style={styles.TextareaContainer}>
                <Input placeholder={"תיאור האירוע"} required={false} width={0.92} type={"textarea"}/>
                </View>
                <View style={styles.EvidenceContainer}>
                <Title title={"הוספת תמונות האירוע"}/>
                <Title title={"האם הייתה מעורבות משטרה באירוע?"}/>
                </View>

            </View>
        </BodyBaseView>
        </BaseView>
            )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    rowInputsContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextareaContainer: {
        position: 'relative',
        top: windowHeight * 0.05,
    },
    GeneralFormContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        position: 'relative',
        top: windowHeight * 0.05,
    },
    EvidenceContainer: {
        position: 'relative',
        top: windowHeight * 0.1,
    }
});

export default GeneralForm;