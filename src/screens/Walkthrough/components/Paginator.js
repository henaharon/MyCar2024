import { View, Animated, StyleSheet, useWindowDimensions } from 'react-native';
import React from 'react';

const Paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            {data.map((_, i) => {
                const inputRange = [
                    (data.length - i - 2) * width,
                    (data.length - i - 1) * width,
                    (data.length - i) * width,
                ];

                const dotColor = scrollX.interpolate({
                    inputRange,
                    outputRange: ['#f5a901', '#f5a901', '#e15085'],
                    extrapolate: 'clamp'
                });

                return (
                    <Animated.View
                        key={i.toString()}
                        style={[styles.dot, { backgroundColor: dotColor }]}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom:'9%',
    },
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#e15085',
        marginHorizontal: 4,
        width: 10,
    },
});

export default Paginator;
