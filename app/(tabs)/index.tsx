import { CourseItem } from '@/components/CourseItem';
import React from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import continueWatchingData from '../../data/continue_watching.json';
import courseData from '../../data/course_data.json';
import styles from '@/constants/Styles';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Category } from '@/components/Category';

export default function HomeScreen() {
  const sections = [
    {
      "id": 1,
      "component":
        <View style={{marginBottom: 10}}>
          <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome <Text style={styles.username}>sf29</Text></Text>
          <View style={styles.iconContainer}>
            <Ionicons name="settings-outline" size={24} color="black" style={styles.icon} onPress={()=> router.navigate('/(app)/settings')}/>
            <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} onPress={()=> router.navigate('/(app)/notifications')}/>
          </View>
        </View>

        <TextInput placeholder="Search Here" style={styles.searchInput} />

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
          {["UI/UX", "Web Design", "Web Development"].map((item, index) => {
            return (
              <Category title={item} key={item + index.toString()} />
            )
          })}
        </ScrollView>
        </View>,
    },
    {
      "id": 2,
      "component":
        <View style={{marginBottom: 10}}>
          <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Continue Watching</Text>
          <Link href={{ pathname: '/(tabs)/courses'}}>
            <Text style={styles.seeAllButton}>See All</Text>
          </Link>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {continueWatchingData.slice(0, 3).map((item, index) => {
            return (
              <CourseItem item={item} key={index + item.id} />
            )
          })}
        </ScrollView>
        </View>
    },
    {
      "id": 3,
      "component":
        <View>
          <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Courses</Text>
          <Link href={{ pathname: '/(tabs)/courses'}}>
            <Text style={styles.seeAllButton}>See All</Text>
          </Link>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {courseData.slice(0, 4).map((item, index) => {
            return (
              <CourseItem item={item} key={index + item.id} />
            )
          })}
        </ScrollView>
        </View>
    }
    
  ]
  return (
    <SafeAreaView>
      <FlatList
      data={sections}
      keyExtractor={(item, index) => item.id+index.toString()}
        renderItem={({ item, index }) => {
        return (
          <>{item.component}</>
        )
        }}
      contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
}
