import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = ({ user }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.profileSection}>
          <Image source={{ uri: user.picture }} style={styles.profilePicture} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.location}>{user.location}</Text>
        </View>

        <View style={styles.rectangle1}>
          <Text style={styles.label}>Disability:</Text>
          <Text style={styles.detail}>{user.disability}</Text>

          <Text style={styles.label}>Description:</Text>
          <Text style={styles.detail}>{user.description}</Text>

          <Text style={styles.label}>Age:</Text>
          <Text style={styles.detail}>{user.age}</Text>
        </View>

        <View style={styles.rectangle2}>
          <Text style={styles.label}>Certificates:</Text>
          <Text style={styles.detail}>{user.certificates}</Text>

          <View style={styles.skillsContainer}>
            <Text style={styles.label}>Skills:</Text>
            <View style={styles.skillsOblong}>
              {user.skills.map((skill, index) => (
                <Text key={index} style={[styles.skill, { backgroundColor: getSkillColor(index) }]}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>

          <Text style={styles.label}>Experience:</Text>
          <View style={styles.experienceContainer}>
            <Text style={styles.detail}>{user.experience}</Text>
            <FontAwesome name="info-circle" size={16} color="#007BFF" style={styles.infoIcon} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const getSkillColor = (index) => {
  const colors = ['#FF6347', '#3CB371', '#6495ED', '#FFD700', '#DA70D6'];
  return colors[index % colors.length];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  mainContainer: {
    backgroundColor: '#ffffff',
    borderColor: '#ADD8E6',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, 
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#007BFF',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40',
  },
  location: {
    fontSize: 16,
    color: '#6c757d',
  },
  rectangle1: {
    backgroundColor: '#ffffff',
    borderColor: '#ADD8E6',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, 
  },
  rectangle2: {
    backgroundColor: '#ffffff',
    borderColor: '#ADD8E6',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, 
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 5,
  },
  detail: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 10,
  },
  skillsContainer: {
    marginBottom: 15,
  },
  skillsOblong: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 15,
    paddingVertical: 5,
    backgroundColor: '#F0F0F0', 
  },
  skill: {
    backgroundColor: '#FFD700', 
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 14,
  },
  experienceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    marginLeft: 5,
  },
});

export default AccountScreen;
