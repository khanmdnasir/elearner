import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://example.com/profile-pic.jpg' }} // Replace with the actual image URL
          style={styles.profileImage}
        />
        <Text style={styles.name}>Name Here</Text>
        <Text style={styles.tagline}>Tag Line</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>✎</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>About Me</Text>
        <Text style={styles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae dolor lectus. Fusce laoreet, ipsum id luctus tincidunt, dui mi malesuada tortor.
        </Text>
      </View>

      <View style={styles.skillsSection}>
        <Text style={styles.skillsTitle}>My Skills</Text>
        <View style={styles.skillsContainer}>
          {['UI/UX', 'Website Design', 'Figma', 'Animation', 'User Persona', 'XD'].map(skill => (
            <View key={skill} style={styles.skillBadge}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.enrolledCoursesSection}>
        <Text style={styles.enrolledCoursesTitle}>Enrolled Courses</Text>
        <View style={styles.coursesContainer}>
          <Image
            source={{ uri: 'https://example.com/course1.jpg' }} // Replace with the actual image URL
            style={styles.courseImage}
          />
          <Image
            source={{ uri: 'https://example.com/course2.jpg' }} // Replace with the actual image URL
            style={styles.courseImage}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileHeader: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  tagline: {
    fontSize: 16,
    color: 'gray',
  },
  editButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    padding: 5,
  },
  editButtonText: {
    fontSize: 16,
    color: '#6c63ff',
  },
  aboutSection: {
    padding: 20,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 10,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    color: '#6c63ff',
  },
  skillsSection: {
    padding: 20,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 10,
  },
  skillsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillBadge: {
    backgroundColor: '#ececec',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    margin: 5,
  },
  skillText: {
    fontSize: 14,
    color: '#333',
  },
  enrolledCoursesSection: {
    padding: 20,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 10,
  },
  enrolledCoursesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  coursesContainer: {
    flexDirection: 'row',
  },
  courseImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default ProfileScreen;
