// import CustomHeader from '@/components/CustomHeader';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';



const CourseDetailScreen = () => {
  

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      {/* <CustomHeader/> */}
      
      <View>
        
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0
  },
  courseImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  courseInfo: {
    marginVertical: 16,
  },
  courseName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  instructor: {
    fontSize: 16,
    color: '#888',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E07CD6',
  },
  description: {
    marginTop: 8,
    color: '#333',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  detailItem: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  skillsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  skill: {
    backgroundColor: '#E07CD6',
    borderRadius: 15,
    padding: 8,
    margin: 4,
    color: '#fff',
  },
  enrollButton: {
    backgroundColor: '#E07CD6',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  enrollButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CourseDetailScreen;
