// StarRat.js
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Star = ({ filled }) => (
  <Image
    source={filled ? require('../../../../assets/icons/selectedStar.png') : require('../../../../assets/icons/unSelectedStar.png')}
    style={styles.star}
  />
);

const StarRat = ({ rating, onRatingChange }) => {
  return (
    <View style={styles.starsContainer}>
      <View style={styles.stars}>
        {[...Array(5)].map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onRatingChange(index + 1)}
            style={styles.star}
          >
            <Star filled={index < rating} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
  },
  stars: {
    flexDirection: 'row',
    gap: 18,
  },
  star: {
    width: 55,
    height: 55,
  },
});

export default StarRat;
