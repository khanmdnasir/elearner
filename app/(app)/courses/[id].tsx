import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import OverViewSection from '@/components/OverviewSection';
import LessonsSection from '@/components/LessonsSection';
import ReviewsSection from '@/components/ReviewsSection';
import VideoHeader from '@/components/VideoHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';

export default function CourseDetails() {
  const [selectedTab, setSelectedTab] = useState('Overview');

  const renderContent = () => {
    switch (selectedTab) {
      case 'Overview':
        return <OverViewSection />;
      case 'Lessons':
        return <LessonsSection />;
      case 'Reviews':
        return <ReviewsSection />;
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <VideoHeader />
        <View style={styles.tabsContainer}>
          {['Overview', 'Lessons', 'Reviews'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tabButton, selectedTab === tab && styles.activeTabButton]}
              onPress={() => setSelectedTab(tab)}
            >
              <Text style={selectedTab === tab ? styles.activeTabText : styles.tabText}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {renderContent()}
        <TouchableOpacity  style={styles.enrollButton} onPress={()=> router.navigate('/(app)/enroll_overview')}>
          <Text style={styles.enrollButtonText}>GET ENROLL</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 200,
    backgroundColor: '#9c27b0',
  },
  headerVideo: {
    width: '100%',
    height: '100%',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabText: {
    color: 'black',
    fontSize: 16,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#9c27b0',
  },
  activeTabText: {
    color: '#9c27b0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 20,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  authorText: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  ratingText: {
    fontSize: 18,
    color: '#f1c40f',
  },
  descriptionText: {
    fontSize: 14,
    color: '#333',
    marginVertical: 10,
  },
  readMoreText: {
    color: '#9c27b0',
  },
  courseDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  skillsContainer: {
    marginVertical: 20,
  },
  skillsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  skillsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
  },
  skillText: {
    fontSize: 14,
    color: '#333',
  },
  enrollButton: {
    backgroundColor: '#9c27b0',
    paddingVertical: 15,
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 25,
    marginVertical: 20,
  },
  enrollButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

