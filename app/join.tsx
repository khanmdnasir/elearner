import React from 'react';
import { router } from 'expo-router';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const JoinLearner = () => {
  return (
    <View style={styles.container}>
      {/* Image Section */}
      <Image
        style={styles.image}
        source={require('../assets/images/learning.png')} // Replace with the path to your image
        resizeMode="contain"
      />

      {/* Text Section */}
      <Text style={styles.heading}>
        Join <Text style={styles.learnerText}>E Learner</Text> To KickStart Your Journey
      </Text>

      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => {
                  router.replace('/signin')
                }}
              >
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  learnerText: {
    color: 'purple',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
  },
  button: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'purple',
    paddingVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default JoinLearner;
