import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';

const FlatListItem = ({ item }) => {
    const { width } = useWindowDimensions(); 

    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={styles.image} />

            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        flex:0.5,
    },
    image: {
        flex: 0.38,
        width: '100%', 
        
    },
    textContainer: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'white',
        textAlign: 'center',
        marginBottom:'4%',
    },
    description: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
});


export default FlatListItem;
