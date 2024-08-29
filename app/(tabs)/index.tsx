import { CourseItem } from '@/components/CourseItem';
import React from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import continueWatchingData from '../../data/continue_watching.json';
import courseData from '../../data/course_data.json';
import styles from '@/constants/Styles';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.welcomeText}>Welcome <Text style={styles.username}>sf29</Text></Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/30/000000/settings.png' }} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/30/000000/bell.png' }} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

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
        <TouchableOpacity>
          <Text style={styles.seeAllButton}>See All</Text>
        </TouchableOpacity>
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
        <Link href={{ pathname: '/(app)/(tabs)/courses'}}>
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
  );
}
