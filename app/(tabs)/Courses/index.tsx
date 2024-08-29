import React from 'react';
import { Text,View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CourseCard } from '@/components/CourseCard';
// import courseData from '../../../data/course_data.json';



const MyCourses = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  
});

export default MyCourses;
