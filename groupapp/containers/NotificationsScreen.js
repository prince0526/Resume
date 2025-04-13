import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, ScrollView } from 'react-native';

const NotificationsScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const notifications = [
    {
      company: 'Sony',
      logo: 'https://via.placeholder.com/50/007BFF', // Replace with actual Sony logo URL
      location: 'Tokyo, Japan',
      job: 'Software Engineer',
      color: '#E3F2FD',
    },
    {
      company: 'Starbucks',
      logo: 'https://via.placeholder.com/50/007A33', // Replace with actual Starbucks logo URL
      location: 'Seattle, USA',
      job: 'Barista',
      color: '#E8F5E9',
    },
  ];

  useEffect(() => {
    // Animate fade-in effect
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Notifications</Text>
      <Animated.View style={{ opacity: fadeAnim }}>
        {notifications.map((notification, index) => (
          <View
            key={index}
            style={[styles.notificationBox, { backgroundColor: notification.color }]}
          >
            <Image source={{ uri: notification.logo }} style={styles.logo} />
            <View style={styles.textContainer}>
              <Text style={styles.companyName}>{notification.company}</Text>
              <Text style={styles.location}>{notification.location}</Text>
              <Text style={styles.job}>{notification.job}</Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>Under Review</Text>
            </View>
          </View>
        ))}
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  notificationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
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
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  location: {
    fontSize: 14,
    color: '#000',
  },
  job: {
    fontSize: 16,
    color: '#000',
    fontStyle: 'italic',
  },
  statusContainer: {
    backgroundColor: '#000',
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  statusText: {
    fontSize: 10, // Smaller text size
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default NotificationsScreen;
