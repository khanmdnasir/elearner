import CustomHeader from '@/components/CustomHeader';
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get('window');


const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeader title="Profile"/>
        <View style={styles.menuContainerWrapper}>
          <View style={styles.profileContainer}>
              <Image
              source={require('@/assets/images/profile_image.jpg')} // Replace with actual image URL
              style={styles.profileImage}
              />
          </View>

          <View style={styles.menuContainer}>
              <TouchableOpacity style={styles.editButton}>
                <Image
                source={require('@/assets/images/edit_button.png')} // Replace with actual image URL
                />
              </TouchableOpacity>
              <Text style={styles.nameText}>Name Here</Text>
              <Text style={styles.tagLine}>Tag Line</Text>
              <Text style={styles.sectionTitle}>About Me</Text>
              <Text style={styles.aboutMe}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae dolor lectus. Fusce laoreet, ipsum id luctus tincidunt, dui mi malesuada tortor.
              </Text>
              <Text style={styles.sectionTitle}>My Skills</Text>
              <View style={styles.skillsContainer}>
                {['UI/UX', 'Website Design', 'Figma', 'Animation', 'User Persona', 'XD'].map((skill, index) => (
                  <View key={index} style={styles.skillPill}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
          </View>
        </View>

        <View style={styles.coursesContainer}>
          <View style={styles.coursesHeader}>
            <Text style={styles.coursesTitle}>Enrolled Courses</Text>
            <Text style={styles.seeAllText}>See All</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row'}}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4sCpEpJoLQHoqlPbukYNWmGfrSMOa0OG0Gg&s' }} // Replace with actual image URL
              style={styles.courseImage}
            />
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4sCpEpJoLQHoqlPbukYNWmGfrSMOa0OG0Gg&s' }} // Replace with actual image URL
              style={styles.courseImage}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingBottom: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  backArrow: {
    fontSize: 24,
    marginRight: 8,
  },
  menuContainerWrapper: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 50, 
    position: 'relative',
    alignItems: 'center'
  },
  profileContainer: {
      position: 'absolute',
      marginTop: -50,
      zIndex: 1
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  menuContainer: {
    width: width*0.95,
    paddingHorizontal: 15,
    paddingVertical: 80,
    borderRadius: 25,
    backgroundColor: '#F2E1F3',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  editButton: {
    position: 'absolute',
    height: 30,
    width: 30,
    top: 20,
    right: 20,
    backgroundColor: '#E07CD6',
    borderRadius: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  editText: {
    fontSize: 18,
    color: '#d63384',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center'
  },
  tagLine: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
    alignSelf: 'center'
  },
  aboutMe: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  skillPill: {
    backgroundColor: '#ffff',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
  },
  skillText: {
    fontSize: 16,
    color: 'black',
  },
  coursesContainer: {
    marginTop: 20,
  },
  coursesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  coursesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 14,
    color: '#8D8989',
  },
  courseImage: {
    width: width*0.4,
    height: 170,
    borderRadius: 10,
    margin: 10,
    resizeMode: 'cover'

  },
});

export default ProfileScreen;
