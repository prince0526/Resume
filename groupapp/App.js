import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { TransitionPresets } from '@react-navigation/stack';

import HomeScreen from './containers/HomeScreen';
import JobDetailScreen from './screens/JobDetailScreen';
import FavoritesScreen from './containers/FavoritesScreen';
import NotificationsScreen from './containers/NotificationsScreen';
import AccountScreen from './containers/AccountScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  const user = {
    name: "Lawrence Castillo",
    picture: "https://scontent.xx.fbcdn.net/v/t1.15752-9/467476445_1354653508835537_9056592760584509904_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFcbqdvPMXDBXuNSmwQ67EN4MYAJzKMqrLgxgAnMoyqsg7fwuxNgTdu2QEo5YwRM0UkPrqCRN8rbBSwiYK-sD-A&_nc_ohc=8KULNMnbw6QQ7kNvgEzvzzY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QHnW6XGzXwIJl-PnGOUlKuymWnJGAvOdomIe-sbDkSQ5g&oe=67830809",
    disability: "Autism",
    description: "Experienced software engineer with expertise in web and mobile app development.",
    location: "Cubao Metro Manila, Philippines",
    certificates: "Certified Developer, UX/UI Designer",
    skills: ["JavaScript", "React", "React Native", "Node.js", "Python"],
    education: "B.S. Computer Science",
    age: 28,
    contactNumber: "+1234567890",
    experience: "5 years in software development, including 3 years in mobile development.",
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Notifications') {
              iconName = 'notifications';
            } else if (route.name === 'Favorites') {
              iconName = 'heart';
            } else if (route.name === 'Account') {
              iconName = 'person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FFFFFF', 
          tabBarInactiveTintColor: 'gray', 
          tabBarStyle: {
            backgroundColor: '#007BFF',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: 60,
            paddingHorizontal: 20,
            justifyContent: 'center',
          },
          tabBarLabelStyle: {
            fontSize: 12, 
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Account">
          {props => <AccountScreen {...props} user={user} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen 
        name="JobDetailScreen" 
        component={JobDetailScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

export default App;
