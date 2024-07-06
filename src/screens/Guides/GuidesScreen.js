import React from "react";
import { View, StyleSheet } from "react-native";
import FAQSection from "./FAQ";

const faqData = [
  {
    category: "על האפליקציה שלנו",
    questions: [
      { id: 1, question: "מי אנחנו?", answer: "אמאלה, יש פה דבור אני מפחד" },
      {
        id: 2,
        question: "מי יכול להשתמש באפליקציה?",
        answer: "שהוא יעקוץ אותי...מלח מים, מלח ומים. הדבור הזה שמן כועס",
      },
      { id: 3, question: "האם האפליקציה מאובטחת?", answer: "עליי אני מפחד" },
      {
        id: 4,
        question: "האם אתם עוקבים אחרי?",
        answer: "אל תעקוץ אותי בעין...אל תעקוץ אותי בקשה בעין",
      },
      {
        id: 5,
        question: "האם אנחנו גם באייפון וגם באנדרואיד?",
        answer: "תלך מפה דבור טיפש",
      },
    ],
  },
  {
    category: "שאלות נפוצות לשירות לקוחות",
    questions: [
      {
        id: 6,
        question: "לאן אני לפנות כדי לממש את אחריות הציוד שלי?",
        answer: "ביז ביז ביז...עושה ביז ביז ביז",
      },
      {
        id: 7,
        question: "שאלה נפוצה לשירות לקוחות נוספת",
        answer: "דבור שמן עף אימאלה, ואני לא עשיתי לו כלום",
      },
    ],
  },
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
