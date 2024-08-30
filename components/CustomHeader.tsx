import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native'; // Ensure Dimensions is imported
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const { width } = Dimensions.get('window'); // Get the screen width

const CustomHeader = ({ title }: any) => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
        <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.header}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backArrow: {
    fontSize: 24,
    marginRight: 8,
  },
  backIcon: {
    width: 24, // Adjust size as needed
    height: 24, // Adjust size as needed
  }
});

export default CustomHeader;
