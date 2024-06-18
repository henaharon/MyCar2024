import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Button from './Button';

const TermsModal = ({ isVisible, title = 'Alert', onClose, onBackdropPress }) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={onBackdropPress} style={styles.modal}>
            <View style={styles.smallTextContainer}>
                <Text style={styles.smallText}>{title}</Text>
            </View>
            <View style={styles.modalContainer}>

                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>
                        תנאים והגבלות כלליות על השימוש באפליקציה ובאתר ועל ההזמנה והרכישה של מוצרים ו/או שירותים
                    </Text>
                    <Text style={styles.subTitle}>1. תקנון השימוש</Text>
                    <Text style={styles.message}>
                        תקנון השימוש באתר ובאפליקציה ובשירותים המוצעים בהם (להלן: "התקנון") מהווה חוזה מחייב בינך לבין החברה
                        (להלן: "החברה"). השימוש באתר ובאפליקציה ובשירותים המוצעים בהם מהווה את הסכמתך להתחייבותך לכל התנאים
                        וההגבלות שבתקנון. אם אינך מסכים לתנאים ולהגבלות שבתקנון, אינך רשאי להשתמש באתר ובאפליקציה ובשירותים
                        המוצעים בהם.
                    </Text>
                    <Text style={styles.subTitle}>2. שימוש באתר ובאפליקציה</Text>
                    <Text style={styles.message}>
                        השימוש באתר ובאפליקציה ובשירותים המוצעים בהם ניתן לך לצורך הזמנת מוצרים ו/או שירותים ולצורך קבלת
                        מידע על מוצרים ו/או שירותים. השימוש באתר ובאפליקציה ובשירותים המוצעים בהם נעשה על אחריותך הבלעדית.
                        החברה אינה אחראית לכל נזק שייגרם לך כתוצאה משימושך באתר ובאפליקציה ובשירותים המוצעים בהם.
                    </Text>
                    <Text style={styles.subTitle}>3. הזמנת מוצרים ו/או שירותים</Text>
                    <Text style={styles.message}>
                        הזמנת מוצרים ו/או שירותים נעשית דרך האתר או האפליקציה. החברה רשאית לסרב להזמנתך או לבטל את הזמנתך
                        לפי שיקול דעתה הבלעדי. החברה רשאית להגביל את כמות המוצרים ו/או השירותים שניתן להזמין דרך האתר או
                        האפליקציה. החברה רשאית להפסיק את הפעלת האתר והאפליקציה ולהפסיק את הצעת המוצרים והשירותים המוצעים
                        בהם בכל עת וללא הודעה מראש.
                    </Text>
                    <Text style={styles.subTitle}>4. תשלום</Text>
                    <Text style={styles.message}>
                        התשלום על המוצרים והשירותים נעשה באמצעות כרטיס אשראי בלבד. התשלום נעשה במטבע שקל ישראלי בלבד. התשלום
                        נעשה באמצעות אמצעי תשלום מאובטחים בסטנדרטים המקובלים בתעשיית האינטרנט. החברה אינה אחראית לכל
                        נזק שייגרם לך כתוצאה מהשימוש באמצעי התשלום.
                    </Text>
                    <Text style={styles.subTitle}>5. תקופת אספקת המוצרים והשירותים</Text>
                    <Text style={styles.message}>
                        החברה תספק לך את המוצרים והשירותים בתוך 14 ימי עסקים מיום ההזמנה. החברה רשאית להאריך את תקופת
                        אספקת המוצרים והשירותים בעד 14 ימי עסקים נוספים.
                    </Text>
                    <Text style={styles.subTitle}>6. ביטול הזמנת מוצרים ושירותים</Text>
                    <Text style={styles.message}>
                        ניתן לבטל הזמנת מוצרים ושירותים עד 14 ימי עסקים מיום ההזמנה. ביטול ההזמנה ייעשה באמצעות פנייה
                        לשירות הלקוחות של החברה. ביטול ההזמנה ייעשה באמצעות החזרת המוצרים לחברה במצבם המקורי ובאריזתם
                        המקורית. החברה רשאית לסרב לביטול ההזמנה אם המוצרים נפגעו באופן כלשהו.
                    </Text>
                    <Text style={styles.subTitle}>7. תחזוקת האתר והאפליקציה</Text>
                    <Text style={styles.message}>
                        החברה תשתדל לתקן כל תקלה באתר ובאפליקציה בהקדם האפשרי. החברה אינה מתחייבת לתקן כל תקלה באתר
                        ובאפליקציה. החברה רשאית להפסיק את הפעלת האתר והאפליקציה בכל עת וללא הודעה מראש.
                    </Text>
                    <Text style={styles.subTitle}>8. תוקפו של התקנון</Text>
                    <Text style={styles.message}>
                        תקנון זה תקף מיום פרסומו באתר ובאפליקציה. החברה רשאית לשנות את תקנון זה מעת לעת. השימוש באתר
                        ובאפליקציה ובשירותים המוצעים בהם לאחר שינויים בתקנון מהווה את הסכמתך לשינויים אלו.
                    </Text>
                    <View style={styles.space} />
                </ScrollView>
                <View style={styles.button}>
                    <Button text='סגור' onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        margin: 0,
    },
    modalContainer: {
        backgroundColor: 'white',
        height: '88%',
        padding: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    scrollViewContent: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'black',
    },
    message: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        width: '100%',
        marginTop: 20,
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    space: {
        marginBottom: 50,
    },
    smallTextContainer: {
        width: '100%',
        alignItems: 'center',
        padding: 5,
        position: 'absolute', // Positions at the top
        top: 25,
        zIndex: 1, // Ensure it's above the modal content
    },
    smallText: {
        fontSize: 14,
        color: '#fff',
    },
});

export default TermsModal;
