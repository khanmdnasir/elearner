import React from 'react';
import { router } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up.</Text>
      <Text style={styles.subtitle}>Siseetetur. A at augue sit blandit fermentum.</Text>

      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#999"
        style={styles.input}
      />

      <TextInput
        placeholder="Email Here"
        placeholderTextColor="#999"
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        style={styles.input}
        secureTextEntry
      />

      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="#999"
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>SIGN UP</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or Sign Up With</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButtonFacebook}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/000000/facebook-new.png' }}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Sign Up With Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButtonGoogle}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Sign Up With Google</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signInContainer} onPress={() => {
                  router.replace('/signin')
                }}>
        <Text style={styles.signInText}>
          Don’t Have An Account? <Text style={styles.signInLink}>Sign In Here</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#A020F0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  signUpButton: {
    backgroundColor: '#A020F0',
    borderRadius: 8,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 14,
    color: '#999',
    marginVertical: 16,
  },
  socialButtonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  socialButtonFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    marginBottom: 16,
  },
  socialButtonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    marginBottom: 16,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  signInContainer: {
    marginTop: 24,
  },
  signInText: {
    fontSize: 14,
    color: '#999',
  },
  signInLink: {
    color: '#A020F0',
    fontWeight: 'bold',
  },
});
