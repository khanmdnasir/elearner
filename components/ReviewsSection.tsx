import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

function ReviewItem({ name, text, rating, avatar }: any) {
  return (
    <View style={styles.reviewItem}>
      <View style={styles.reviewHeader}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.reviewName}>{name}</Text>
          <Text style={styles.reviewRating}>{'★'.repeat(rating)}</Text>
        </View>
      </View>
      <Text style={styles.reviewText}>{text}</Text>
    </View>
  );
}

export default function ReviewsSection() {
  const reviews = [
    { name: 'Name Here', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', rating: 5, avatar: 'https://example.com/avatar1.png' },
    { name: 'Name Here', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', rating: 5, avatar: 'https://example.com/avatar2.png' },
  ];

  return (
    <ScrollView style={styles.container}>
      {reviews.map((review, index) => (
        <ReviewItem key={index} {...review} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  reviewItem: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  reviewName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  reviewRating: {
    fontSize: 14,
    color: '#f1c40f',
  },
  reviewText: {
    fontSize: 14,
    color: '#333',
  },
});
