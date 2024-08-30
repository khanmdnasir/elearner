import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import courses from '../../data/course_data.json'
import { CourseCard } from '@/components/CourseCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '@/components/CustomHeader';

const MyCourses = () => {
  return (
    <SafeAreaView style={styles.container}>
        <CustomHeader title="My Courses"/>
        <FlatList
        data={courses}
        renderItem={({ index, item }) => <CourseCard course={item}/>}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        style={{marginTop: 20}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  courseCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  instructor: {
    color: '#555',
  },
  duration: {
    marginVertical: 10,
    color: '#888',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#6200ee',
  },
});

export default MyCourses;
