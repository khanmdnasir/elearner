import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';


export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome <Text style={styles.username}>sf29</Text></Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/30/000000/settings.png' }} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/30/000000/bell.png' }} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    color: '#A020F0',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
});
