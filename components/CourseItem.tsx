import { Link } from "expo-router";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export const CourseItem = ({ item }: any) => {

  return (
    <Link href={{ pathname: '/courses/[id]', params: item.id}}>
      <View style={styles.courseContainer}>
        <Image source={{ uri: item.image }} style={styles.courseImage} />
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 8, alignItems: 'center', justifyContent: 'space-between'}}>
          <Text style={styles.courseTitle}>{item.title}</Text>
          <Text style={styles.ratingText}>★★★★★</Text>
        </View>
        <Text style={styles.courseInstructor}>By {item.instructor}</Text>
        <Text style={styles.progressLabel}>{item.progress}% DONE</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${item.progress}%` }]} />
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  courseContainer: {
    width: 160,
    marginRight: 16,
  },
  courseImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    resizeMode: 'cover'
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  ratingText: {
    fontSize: 8,
    color: '#1445F6',
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
});
