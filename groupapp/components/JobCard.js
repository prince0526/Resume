import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const JobCard = ({ job, hearted, toggleFavorite }) => {
  return (
    <TouchableOpacity
      style={[styles.jobCard, { backgroundColor: job.color, height: 150 }]}
      onPress={() => navigation.navigate('JobDetailScreen', { job })}
    >
      <View style={styles.jobImageContainer}>
        <Image source={{ uri: job.image }} style={styles.jobImage} />
      </View>
      <View style={styles.jobDetails}>
        <Text style={styles.companyText}>{job.company}</Text>
        <Text style={styles.roleText}>{job.role}</Text>
        <View style={styles.targetBadge}>
          <Text style={styles.targetText}>{job.target}</Text>
        </View>
        <Text style={styles.infoText}>{job.location}</Text>
        <Text style={styles.infoText}>{job.salary}</Text>
      </View>
      <TouchableOpacity
        style={styles.heartIcon}
        onPress={() => toggleFavorite(job)}
      >
        <Ionicons
          name={hearted ? 'heart' : 'heart-outline'}
          size={24}
          color={hearted ? 'red' : 'black'}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  jobCard: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  jobImageContainer: {
    marginRight: 15,
  },
  jobImage: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  jobDetails: {
    flex: 1,
  },
  companyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  roleText: {
    fontSize: 16,
    color: '#000',
  },
  targetBadge: {
    backgroundColor: '#808080',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  targetText: {
    fontSize: 12,
    color: '#fff',
  },
  infoText: {
    fontSize: 14,
    color: '#000',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default JobCard;
