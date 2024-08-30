import { useSession } from '@/app/ctx';
import { Redirect, Tabs} from 'expo-router';
import React from 'react';
import { Image, Text } from 'react-native';

export default function TabLayout() {
  const { isLoading, session } = useSession();
  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    return <Redirect href={{pathname: '/signin'}} />;
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
      {/* <Tabs.Screen
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
      /> */}
      <Tabs.Screen
        name="inbox"
        options={{
          headerShown: false,
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
        name="courses"
        options={{
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
          headerShown: false,
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
