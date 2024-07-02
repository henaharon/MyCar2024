import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import closeButtonImage from './ex.png';
import plusButtonImage from './plus.png';
import minusButtonImage from './minus.png';

const FAQSection = ({ navigation, faqs }) => {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <View style={styles.page}>
            <View style={styles.topBar}>
                <Text style={styles.topBarText}>שאלות ותשובות נפוצות</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                    <Image source={closeButtonImage} style={styles.buttonImage} />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                {faqs.map((faqCategory, catIndex) => (
                    <View key={catIndex} style={styles.category}>
                        <Text style={styles.categoryHeader}>{faqCategory.category}</Text>
                        {faqCategory.questions.map((faq, index) => (
                            <View key={index} style={styles.section}>
                                <TouchableOpacity onPress={() => toggleSection(index)} style={styles.header}>
                                    <Text style={styles.headerText}>{faq.question}</Text>
                                    <View style={[styles.iconContainer, expandedSection === index ? styles.minusButton : styles.plusButton]}>
                                        <Image
                                            source={expandedSection === index ? minusButtonImage : plusButtonImage}
                                            style={styles.buttonImage}
                                        />
                                    </View>
                                </TouchableOpacity>
                                {expandedSection === index && (
                                    <Text style={styles.details}>{faq.answer}</Text>
                                )}
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#000'
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20  
    },
    topBarText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft:60
    },
    closeButton: {
        padding: 10,
    },
    buttonImage: {
        width: 30,
        height: 30,
    },
    iconContainer: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 1 },
    },
    plusButton: {
        backgroundColor: '#F6E8E8',
    },
    minusButton: {
        backgroundColor: '#F05C62',
    },
    container: {
        padding: 20,
        borderRadius:20,
        backgroundColor: '#fff',
    },
    category: {
        
        marginBottom: 20,
    },
    categoryHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    section: {
        marginBottom: 10,
        backgroundColor: '#fff',
        padding: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        flex:1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        paddingRight:10
    },
    details: {
        fontSize: 18,
        marginTop: 10,
        lineHeight: 20,
        color: '#666',
        paddingRight:40
    },
});

export default FAQSection;