import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import JobCard from '../components/JobCard';

function FavoritesScreen({ navigation }) {
  const [favorites, setFavorites] = React.useState([]);

  const renderJob = ({ item }) => (
    <JobCard
      job={item}
      heartToggled={{ [item.id]: true }}
      toggleFavorite={() => {}}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Favorites</Text>
      <FlatList
        data={favorites}
        renderItem={renderJob}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.jobList}
      />
    </View>
  );
}

export default FavoritesScreen;

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
  jobList: {
    padding: 10,
  },
});
