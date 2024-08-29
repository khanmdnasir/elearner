import { Tabs, Redirect} from 'expo-router';
import React from 'react';
// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, Image, TouchableOpacity } from 'react-native';
import { useSession } from '@/ctx';

export default function TabLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/join" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffff',
        tabBarInactiveTintColor: 'black',
        headerShown: false,
        tabBarStyle: { backgroundColor: '#E07CD6', borderRadius: 15, marginHorizontal: 10, position: 'absolute'}
        
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Image 
              source={require('@/assets/images/tabs/home.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          headerShown: true,
          headerTitle: 'Inbox',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'left',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Image 
              source={require('@/assets/images/tabs/inbox.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Courses"
        options={{
          headerShown: true,
          headerTitle: 'My Courses',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'left',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Image 
              source={require('@/assets/images/tabs/courses.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: true,
          headerTitle: 'Profile',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'left',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Image 
              source={require('@/assets/images/tabs/profile.png')}
              style={{ width: 24, height: 28, tintColor: color }}
            />
          ),
        }}
      />
      
    </Tabs>
  );
}
