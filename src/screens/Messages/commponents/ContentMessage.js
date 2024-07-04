import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import images from '../helpers/images';

const ContentMessage = ({ content }) => {
  const [isPlay, setIsPlay] = useState(true);

  const toggleStop = () => {
    setIsPlay(!isPlay);
  };

  return (
    <View style={styles.ViewContent}>
      <Text style={styles.title}>{content.title}</Text>
      <View>
        {content.p1.map((paragraph, index) => (
          <Text key={index} style={styles.paragraph}>{paragraph}</Text>
        ))}
      </View>
      {
        content.md && (
          content.type === "msv" ? (
            <View style={styles.videoContainer}>
              <Video
                source={images[content.md]}
                style={styles.md}
                volume={1.0}
                muted={false}
                paused={isPlay}
                repeat={true}
              />
              <TouchableOpacity onPress={toggleStop} style={styles.playButton}>
                {isPlay ? (
                  <Image
                    source={require("../../../assets/icons/video-play.png")}
                    style={styles.playButtonImage}
                  />
                ) : null}
              </TouchableOpacity>
            </View>
          ) : (
            <Image
              source={images[content.md]}
              style={styles.md}
            />
          )
        )
      }
      <Text style={styles.subtitle}>{content.subtitle}</Text>
      <View>
        {content.p2 && (
          content.p2.map((paragraph, index) => (
            <Text key={index} style={styles.paragraph}>{paragraph}</Text>
          ))
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewContent: {
    gap: 20,
    alignItems: 'flex-end',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },
  paragraph: {
    fontSize: 16,
    color: '#000'
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  videoContainer: {
    width: 350,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  md: {
    width: 350,
    height: 200,
    borderRadius: 20,
  },
  playButton: {
    position: 'absolute',
    left: 80,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonImage: {
    width: 50,
    height: 50,
    borderRadius: 15
  },
});

export default ContentMessage;
