import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const jobs = [
  {
    id: '1',
    company: 'Sony Inc.',
    role: 'Secretary',
    target: 'Senior Citizens',
    location: 'Manila, PH',
    salary: '₱20,000/month',
    color: '#FFC107',
    image: 'https://images.seeklogo.com/logo-png/12/1/sony-logo-png_seeklogo-129420.png?v=638687191010000000',
  },
  {
    id: '2',
    company: 'Starbucks Inc.',
    role: 'Cashier',
    target: 'Senior Citizens',
    location: 'Cebu City, PH',
    salary: '₱15,000/month',
    color: '#4CAF50',
    image: 'https://static.vecteezy.com/system/resources/previews/040/501/665/non_2x/logo-starbucks-coffee-icon-illustration-free-vector.jpg',
  },
  {
    id: '3',
    company: 'McDonald\'s Inc.',
    role: 'Cashier',
    target: 'PWD',
    location: 'Davao City, PH',
    salary: '₱12,000/month',
    color: '#F44336',
    image: 'https://theconsumerverse.wordpress.com/wp-content/uploads/2019/10/mcdonalds-green.jpg',
  },
  {
    id: '4',
    company: 'Accenture',
    role: 'Programmer',
    target: 'PWD',
    location: 'Taguig City, PH',
    salary: '₱40,000/month',
    color: '#2196F3',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9oLO30v3sI6QN9FwWjmf518dO3uchI6BxQ&s',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState([]);
  const [heartToggled, setHeartToggled] = useState({});

  const toggleFavorite = (job) => {
    setHeartToggled((prev) => ({
      ...prev,
      [job.id]: !prev[job.id],
    }));

    if (heartToggled[job.id]) {
      setFavorites((prev) => prev.filter((fav) => fav.id !== job.id));
    } else {
      setFavorites((prev) => [...prev, job]);
    }
  };

  const renderJob = ({ item }) => (
    <TouchableOpacity
      style={[styles.jobCard, { backgroundColor: item.color, height: 150 }]}
      onPress={() => navigation.navigate('JobDetailScreen', { job: item })}
    >
      <View style={styles.jobImageContainer}>
        <Image source={{ uri: item.image }} style={styles.jobImage} />
      </View>
      <View style={styles.jobDetails}>
        <Text style={styles.companyText}>{item.company}</Text>
        <Text style={styles.roleText}>{item.role}</Text>
        <View style={styles.targetBadge}>
          <Text style={styles.targetText}>{item.target}</Text>
        </View>
        <Text style={styles.infoText}>{item.location}</Text>
        <Text style={styles.infoText}>{item.salary}</Text>
      </View>
      <TouchableOpacity
        style={styles.heartIcon}
        onPress={() => toggleFavorite(item)}
      >
        <Ionicons
          name={heartToggled[item.id] ? 'heart' : 'heart-outline'}
          size={24}
          color={heartToggled[item.id] ? 'red' : 'black'}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Home</Text>
      <FlatList
        data={jobs}
        renderItem={renderJob}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.jobList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
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
  jobList: {
    padding: 10,
  },
});

export default HomeScreen;
