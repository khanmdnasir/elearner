import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';

function LessonItem({ title, content }: any) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View>
      <TouchableOpacity style={styles.lessonHeader} onPress={() => setIsCollapsed(!isCollapsed)}>
        <Text style={styles.lessonTitle}>{title}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.lessonContent}>
          {content.map((item: any, index: number) => (
            <Text key={index} style={styles.lessonText}>{item}</Text>
          ))}
        </View>
      </Collapsible>
    </View>
  );
}

export default function LessonsSection() {
  const lessons = [
    { title: 'Lesson 1: What is UI UX?', content: ['Lorem ipsum Dummy Text Here', 'Lorem ipsum Dummy Text Here', 'Lorem ipsum Dummy Text Here'] },
    { title: 'Lesson 2: App Design Process', content: ['Lorem ipsum Dummy Text Here'] },
    { title: 'Lesson 3: Role Of UI UX', content: ['Lorem ipsum Dummy Text Here'] },
    { title: 'Lesson 4: What Is Prototype?', content: ['Lorem ipsum Dummy Text Here'] },
    { title: 'Lesson 5: Define User Persona?', content: ['Lorem ipsum Dummy Text Here'] },
  ];

  return (
    <ScrollView style={styles.container}>
      {lessons.map((lesson, index) => (
        <LessonItem key={index} title={lesson.title} content={lesson.content} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  lessonHeader: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  lessonTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  lessonContent: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 10,
  },
  lessonText: {
    fontSize: 14,
    color: '#9c27b0',
    marginVertical: 5,
  },
});
