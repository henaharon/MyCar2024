import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import images from '../helpers/images';
import YoutubePlayer from 'react-native-youtube-iframe';


const ContentMessage = ({ content }) => {
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
              <YoutubePlayer
                height={300}
                videoId={images[content.md]}
              />

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
});

export default ContentMessage;
