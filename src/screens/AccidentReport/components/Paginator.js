import React from 'react';
import { View, Animated, StyleSheet, useWindowDimensions } from 'react-native';

const Paginator = ({ currentPage, pagesCount, data }) => {
  const { width } = useWindowDimensions();

  if (pagesCount) {
    data = data.slice(0, pagesCount);
  }

  const dots = data.map((_, i) => {
    const isActive = i <= currentPage; 
    const dotColor = isActive ? '#3652f8' : '#191d43'; 

    return (
      <Animated.View
        key={i.toString()}
        style={[styles.dot, { backgroundColor: dotColor }]}
      />
    );
  });

  return <View style={styles.container}>{dots}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    width: '100%',  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e15085',
    marginHorizontal: 4,
    width: 10,
  },
});

export default Paginator;
