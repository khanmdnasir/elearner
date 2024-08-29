import { Link } from "expo-router";
import { View, StyleSheet, Text, Image } from "react-native";


export const CourseItem = ({ item }: any) => (
  <Link href={{ pathname: '/[course_details]', params: item.id}}>
    <View style={styles.courseContainer}>
      <Image source={{ uri: item.image }} style={styles.courseImage} />
      <Text style={styles.courseTitle}>{item.title}</Text>
      <Text style={styles.courseInstructor}>By {item.instructor}</Text>
      <Text style={styles.progressLabel}>{item.progress}% DONE</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${item.progress}%` }]} />
      </View>
    </View>
  </Link>
);

const styles = StyleSheet.create({
    courseContainer: {
    width: 160,
    marginRight: 16,
  },
  courseImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
  courseInstructor: {
    fontSize: 12,
    color: '#666',
  },
  progressLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#ddd',
    borderRadius: 4,
    marginTop: 4,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#A020F0',
    borderRadius: 4,
  },
})