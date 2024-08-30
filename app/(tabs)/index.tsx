import { CourseItem } from '@/components/CourseItem';
import React from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import continueWatchingData from '../../data/continue_watching.json';
import courseData from '../../data/course_data.json';
import styles from '@/constants/Styles';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome <Text style={styles.username}>sf29</Text></Text>
          <View style={styles.iconContainer}>
            <Link href={{ pathname: '/(app)/settings'}}>
              <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/30/000000/settings.png' }} style={styles.icon} />
            </Link>
            <Link href={{pathname: '/notifications'}}>
              <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/30/000000/bell.png' }} style={styles.icon} />
            </Link>
          </View>
        </View>

        <TextInput placeholder="Search Here" style={styles.searchInput} />

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>UI/UX</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Website Design</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Figma</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Continue Watching</Text>
          <Link href={{ pathname: '/(tabs)/courses'}}>
            <Text style={styles.seeAllButton}>See All</Text>
          </Link>
        </View>

        <FlatList
          horizontal={true}
          data={continueWatchingData.slice(0, 3)}
          renderItem={({ item }) => <CourseItem item={item} />}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Courses</Text>
          <Link href={{ pathname: '/(tabs)/courses'}}>
            <Text style={styles.seeAllButton}>See All</Text>
          </Link>
        </View>

        <FlatList
          horizontal={true}
          data={courseData.slice(0, 4)}
          renderItem={({ item }) => <CourseItem item={item} />}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
