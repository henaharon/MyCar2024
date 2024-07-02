import React from 'react';
import { View, StyleSheet } from 'react-native';
import FAQSection from './FAQ';

const faqData = [
    {
        category: 'על האפליקציה שלנו',
        questions: [
            { question: 'מי אנחנו?',
                 answer: 'אמאלה, יש פה דבור אני מפחד' },
            { question: 'מי יכול להשתמש באפליקציה?',
                 answer: 'שהוא יעקוץ אותי...מלח מים, מלח ומים. הדבור הזה שמן כועס' },
            { question: 'האם האפליקציה מאובטחת?',
                 answer: 'עליי אני מפחד' },
            { question: 'האם אתם עוקבים אחרי?',
                 answer: 'אל תעקוץ אותי בעין...אל תעקוץ אותי בקשה בעין' },
            { question: 'האם אנחנו גם באייפון וגם באנדרואיד?',
                 answer: 'תלך מפה דבור טיפש' }
        ]
    },
    {
        category: 'שאלות נפוצות לשירות לקוחות',
        questions: [
            { question: 'לאן אני לפנות כדי לממש את אחריות הציוד שלי?',
                 answer: 'ביז ביז ביז...עושה ביז ביז ביז' },
            { question: 'שאלה נפוצה לשירות לקוחות נוספת',
                 answer: 'דבור שמן עף אימאלה, ואני לא עשיתי לו כלום'}
        ]
    }
];


const App = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FAQSection navigation={navigation} faqs={faqData} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;