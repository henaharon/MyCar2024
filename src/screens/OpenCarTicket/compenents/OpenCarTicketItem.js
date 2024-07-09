import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const OpenCarTicketItem = ({ date, type, description, showFeedbackButton, isActive, isFirst, isLast }) => {
  return (
    <View style={styles.statusItem}>
      <View style={styles.contentContainer}>
        <Text style={styles.statusDate}>{date}</Text>
        <View style={styles.typeAndTimelineContainer}>
          <View style={styles.typeContainer}>
            <Text style={styles.statusType}>{type}</Text>
            <Text style={styles.statusDescription} numberOfLines={1} ellipsizeMode="tail">
              {description}
            </Text>
            {showFeedbackButton && (
              <Pressable style={styles.responseButton}>
                <Text style={styles.responseButtonText}>שליחת משוב</Text>
              </Pressable>
            )}
          </View>
          <View style={styles.timelineContainer}>
            {!isFirst && <View style={styles.timelineLineTop} />}
            <View style={styles.timelineOuterRing}>
              <View style={[styles.timelineIndicator, isActive && styles.activeIndicator]} />
            </View>
            {!isLast && <View style={styles.timelineLineBottom} />}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusItem: {
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
  },
  typeAndTimelineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  typeContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  timelineContainer: {
    width: 24,
    alignItems: 'center',
    marginLeft: 10,
    height: '100%',
    minHeight: 60, 
  },
  timelineOuterRing: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    backgroundColor: 'white',
  },
  timelineIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
  },
  activeIndicator: {
    backgroundColor: '#1E90FF',
  },
  timelineLineTop: {
    position: 'absolute',
    top: -20,
    height: 32, 
    width: 2,
    backgroundColor: '#E0E0E0',
    alignSelf: 'center',
  },
  timelineLineBottom: {
    position: 'absolute',
    top: 24,
    bottom: -20, 
    width: 2,
    backgroundColor: '#E0E0E0',
    alignSelf: 'center',
  },
  statusDate: {
    fontSize: 10,
    color: '#888',
    textAlign: 'left',
    marginBottom: 2,
  },
  statusType: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  statusDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'right',
    marginTop: 2,
  },
  responseButton: {
    backgroundColor: '#FFC107',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
    alignSelf: 'stretch',
  },
  responseButtonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default OpenCarTicketItem;