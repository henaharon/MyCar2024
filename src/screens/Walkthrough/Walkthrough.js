import React, { useRef } from 'react';
import { StyleSheet, FlatList, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FlatListItem from './components/FlatListItem';
import slides from './Slides';
import Paginator from './components/Paginator';
import Button from './components/Button';

const Walkthrough = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handlePress = () => {
    navigation.navigate('Login');
  };
  
  return (
    <LinearGradient
      colors={['#DD0370', '#E22D66', '#E7525F']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
    >
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <FlatListItem item={item} />}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <View style={styles.footer}>
        <Paginator data={slides} scrollX={scrollX} />
        <Button text="בואו נתחיל!" onPress={handlePress} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    alignItems: 'center',
  },
});

export default Walkthrough;
