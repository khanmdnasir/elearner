import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


export default function OverViewSection() {

  return (
    <View style={styles.contentContainer}>
            <Text style={styles.courseTitle}>Mobile App UI/UX</Text>
            <Text style={styles.authorText}>By Taylor Swift</Text>
            <Text style={styles.priceText}>100$</Text>
            <Text style={styles.ratingText}>★★★★★</Text>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae dolor lectus. Fusce laoreet, ipsum id luctus tincidunt, dui mi malesuada tortor, eu congue velit lorem id risus. Mauris ex enim, placerat et nisi eu, eleifend dignissim ligula.
              <Text style={styles.readMoreText}> Read More</Text>
            </Text>
            <View style={styles.courseDetails}>
              <View style={styles.detailItem}>
                <Text style={styles.detailIcon}>📚</Text>
                <Text>100+ Lessons</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailIcon}>⏰</Text>
                <Text>7 Weeks</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailIcon}>🎓</Text>
                <Text>Certificate</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailIcon}>💰</Text>
                <Text>20% Off</Text>
              </View>
            </View>
            <View style={styles.skillsContainer}>
              <Text style={styles.skillsTitle}>Skills</Text>
              <View style={styles.skillsList}>
                {['UI/UX', 'Website Design', 'Figma', 'XD', 'Animation', 'User Persona'].map((skill, index) => (
                  <View key={index} style={styles.skillItem}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
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
    color: '#1445F6',
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

