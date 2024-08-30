import CustomHeader from '@/components/CustomHeader';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const NotificationScreen = () => {
  const notifications = [
    {
      id: 1,
      title: 'Transaction Completed',
      description: 'Lorem ipsum Dummy Text Here',
      time: 'Just Now',
      icon: '✔️', // Replace with your icon component or image
      backgroundColor: '#d63384',
    },
    {
      id: 2,
      title: 'Lesson Completed',
      description: 'Lorem ipsum Dummy Text Here',
      time: '5 mins ago',
      icon: '👍', // Replace with your icon component or image
      backgroundColor: '#ffb74d',
    },
    {
      id: 3,
      title: 'Due Date Is Near',
      description: 'Lorem ipsum Dummy Text Here',
      time: '5 mins ago',
      icon: '📕', // Replace with your icon component or image
      backgroundColor: '#d32f2f',
    },
    {
      id: 4,
      title: 'Transaction Completed',
      description: 'Lorem ipsum Dummy Text Here',
      time: '5 mins ago',
      icon: '✔️', // Replace with your icon component or image
      backgroundColor: '#d63384',
    },
    {
      id: 5,
      title: 'Transaction Completed',
      description: 'Lorem ipsum Dummy Text Here',
      time: '10 mins ago',
      icon: '✔️', // Replace with your icon component or image
      backgroundColor: '#d63384',
    },
    {
      id: 6,
      title: 'Transaction Completed',
      description: 'Lorem ipsum Dummy Text Here',
      time: '11 mins ago',
      icon: '✔️', // Replace with your icon component or image
      backgroundColor: '#d63384',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
            <CustomHeader title='Settings'/>
            <View style={styles.iconContainer}>
            <Ionicons name="settings-outline" size={24} color="black" style={styles.icon} />
            <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
            </View>
        </View>

        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notificationContainer}>
            <View style={[styles.iconContainer1, { backgroundColor: notification.backgroundColor }]}>
              <Text style={styles.notificationIcon}>{notification.icon}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationDescription}>{notification.description}</Text>
            </View>
            <Text style={styles.notificationTime}>{notification.time}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
    },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8e1f4',
    borderRadius: 15,
    padding: 30,
    marginBottom: 10,
  },
  notificationIcon: {
    fontSize: 24,
    color: '#fff',
    },
  iconContainer1: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#666',
  },
  notificationTime: {
    fontSize: 12,
    color: '#888',
  },
});

export default NotificationScreen;
