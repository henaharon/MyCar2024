// OpenCarTicketItem.js
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const OpenCarTicketItem = ({ date, type, description, showFeedbackButton, isActive }) => {
  return (
    <View style={styles.statusItem}>
      <Text style={styles.statusDate}>{date}</Text>
      <View style={styles.contentContainer}>
        <View style={styles.statusContent}>
          <Text style={styles.statusType}>{type}</Text>
          <Text style={styles.statusDescription}>{description}</Text>
          {showFeedbackButton && (
            <Pressable style={styles.responseButton}>
              <Text style={styles.responseButtonText}>שליחת משוב</Text>
            </Pressable>
          )}
        </View>
        <View style={styles.timelineContainer}>
          <View style={[styles.timelineIndicator, isActive && styles.activeIndicator]} />
          <View style={styles.timelineLine} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  timelineContainer: {
    width: 20,
    alignItems: 'center',
    marginLeft: 10,
  },
  timelineIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    zIndex: 1,
  },
  activeIndicator: {
    backgroundColor: '#1E90FF', 
  },
  timelineLine: {
    position: 'absolute',
    top: 20,
    bottom: -20,
    width: 2,
    backgroundColor: '#E0E0E0',
  },
  statusContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
  statusDate: {
    fontSize: 10,
    color: '#888',
    textAlign: 'left',
    width: '30%', // Adjust as needed
  },
  statusType: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'right',
  },
  statusDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'right',
  },
  responseButton: {
    backgroundColor: '#FFC107',
    borderRadius: 50, // Increased border radius for more rounded corners
    paddingVertical: 12, // Increased vertical padding
    paddingHorizontal: 20,
    marginTop: 10,
    alignSelf: 'stretch', // This will make the button stretch to the container's width
  },
  responseButtonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center', // Center the text
    fontSize: 16, // Adjust font size if needed
  },
});

export default OpenCarTicketItem;