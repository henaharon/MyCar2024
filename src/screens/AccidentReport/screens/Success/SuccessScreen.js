import { Text, View, StyleSheet } from 'react-native';
import {BaseView, BodyBaseView} from '../../../../uiKit/BaseView';
import {Button} from '../../components/GradientButton'

const SuccessScreen = () => {
    return (
        <BaseView>
        <BodyBaseView style={{alignItems: 'center'}}>
        <View style={styles.textContainer}>
            <Text style={styles.headerText}>מסמך נשלחה</Text>
            <View style={styles.centerText}>
                <Text style={styles.confirmationText}>דוח תאונת הדרכים נשלח בהצלחה</Text>
                <Text style={styles.confirmationText}>OirS@gmail.com למייל</Text>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <Button title={"אישור"}/>
        </View>
        </BodyBaseView>
        </BaseView>
    );
};

export default SuccessScreen;

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        fontWeight: '900',
        color: 'black',
    },
    confirmationText: {
        fontSize: 16,
        color: 'black',
    },
    textContainer: {
        alignItems: 'center',
        position: 'relative',
        top: '30%',
        gap: 20,
    },
    buttonContainer: {
        width: '100%',
        position: 'relative',
        alignItems: 'center',
        top: '35%',
    },
    centerText: {
        width: '90%',
        alignItems: 'center',
    }
});