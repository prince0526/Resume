import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const JobDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { job } = route.params;
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleApplyNow = () => {
    setNotificationVisible(true);
    navigation.navigate('NotificationsScreen', { job }); 

    setTimeout(() => {
      setNotificationVisible(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Image source={{ uri: job.image }} style={styles.companyLogo} />
        <View>
          <Text style={styles.companyName}>{job.company}</Text>
          <Text style={styles.jobLocation}>{job.location}</Text>
        </View>
      </View>
      <Text style={styles.jobTitle}>{job.role}</Text>
      <Text style={styles.jobDescription}>Job Description</Text>
      <Text style={styles.descriptionText}>
        This position involves {job.role} responsibilities.
      </Text>
      <Text style={styles.jobQualifications}>Qualifications</Text>
      <Text style={styles.descriptionText}>
        List of skillset needed for the job
      </Text>
      <TouchableOpacity style={styles.applyButton} onPress={handleApplyNow}>
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>

      {notificationVisible && (
        <View style={[styles.notification, { backgroundColor: job.color }]}>
          <Image source={{ uri: job.image }} style={styles.notificationLogo} />
          <Text style={styles.notificationCompanyName}>{job.company}</Text>
          <Text style={styles.notificationJobName}>{job.role}</Text>
          <Text style={styles.notificationJobLocation}>{job.location}</Text>
          <View style={styles.notificationStatus}>
            <Text style={styles.notificationStatusText}>Application Under Review</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  jobLocation: {
    fontSize: 16,
    color: 'gray',
  },
  jobTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  jobDescription: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  descriptionText: {
    fontSize: 16,
    marginVertical: 5,
  },
  jobQualifications: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  applyButton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notification: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 15,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
    zIndex: 10,
  },
  notificationLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  notificationCompanyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  notificationJobName: {
    fontSize: 16,
    color: '#fff',
  },
  notificationJobLocation: {
    fontSize: 14,
    color: '#fff',
  },
  notificationStatus: {
    backgroundColor: '#00000050',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  notificationStatusText: {
    fontSize: 12,
    color: '#fff',
  },
});

export default JobDetailScreen;
