import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const NotificationPopup = ({ route }) => {
  const { job } = route.params;

  return (
    <View style={[styles.popup, { backgroundColor: job.color }]}>
      <Image source={{ uri: job.image }} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.jobName}>{job.role}</Text>
        <Text style={styles.companyName}>{job.company}</Text>
        <Text style={styles.location}>{job.location}</Text>
      </View>
      <View style={styles.statusBox}>
        <Text style={styles.statusText}>Application Under Review</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popup: {
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  jobName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  companyName: {
    fontSize: 16,
    color: '#fff',
  },
  location: {
    fontSize: 14,
    color: '#fff',
  },
  statusBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  statusText: {
    fontSize: 12,
    color: '#fff',
  },
});

export default NotificationPopup;
