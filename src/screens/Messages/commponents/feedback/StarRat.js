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
    justifyContent: 'flex-end', 
  },
  stars: {
    flexDirection: 'row',
    gap: 16,
  },
  star: {
    width: 50,
    height: 50,
  },
});

export default StarRat;
