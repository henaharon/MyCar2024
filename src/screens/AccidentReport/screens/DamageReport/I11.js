import React from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';

import EventHeader from '../../components/EventHeader';
import { FormHeader } from '../../components/FormHeader';
import Title from '../../components/Title';
import { BaseView, BodyBaseView } from '../../../../uiKit/BaseView';

const I11 = () => {
    return (
        <BaseView>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.contentWrapper}>
                    <EventHeader>
                        <FormHeader title="Event Information" />
                    </EventHeader>
                    <BodyBaseView style={styles.bodyContainer}>
                        <Title title={'פרטי הנזק לרכב שלי'} />
                        <View style={styles.TextareaContainer}>
                            <Input placeholder={"תיאור הנזק"} required={false} width={0.92} type={"textarea"} />
                        </View>
                    </BodyBaseView>
                </View>
            </ScrollView>
        </BaseView>
    );
};

export default I11;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    contentWrapper: {
        flex: 9,
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 25,
        marginTop: -windowHeight * 0.1,
        paddingTop: windowHeight * 0.15,
        paddingBottom: windowHeight * 0.2,
        zIndex: 2,
        gap: 15,
    },
});
