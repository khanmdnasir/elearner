import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native'; // Ensure Dimensions is imported
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

const { width } = Dimensions.get('window'); // Get the screen width

const CustomHeader = ({ title }: any) => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={styles.headerContainer}>
        <AntDesign name="arrowleft" size={24} color="black" onPress={()=> router.back()}/>
        <Text style={styles.header}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10
  },
});

export default CustomHeader;
