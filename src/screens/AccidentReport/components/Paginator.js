import React from 'react';
import {View, Animated, StyleSheet, useWindowDimensions} from 'react-native';

const Paginator = ({currentPage, onPageChange, pagesCount, data, scrollX}) => {
  const {width} = useWindowDimensions();

  if (pagesCount) {
    data = data.slice(0, pagesCount);
  }

  const dots = data.map((_, i) => {
    const dotColor = scrollX.interpolate({
      inputRange: [width * i, width * (i + 1)],
      outputRange: ['#191d43', '#3652f8'],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        key={i.toString()}
        style={[styles.dot, {backgroundColor: dotColor}]}
      />
    );
  });

  return <View style={styles.container}>{dots}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '9%',
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
