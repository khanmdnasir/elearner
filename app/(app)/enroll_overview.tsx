import CustomHeader from '@/components/CustomHeader';
import { Link, router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CourseCheckoutScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <CustomHeader/>
        {/* Step Indicator */}
        <View style={styles.stepIndicator}>
          <Link href={{ pathname:'/(app)/enroll_overview'}}>
            <View style={styles.step}>
              <Text style={styles.stepText}>1</Text>
            </View>
          </Link>
          <View style={styles.lineActive} />
          <Link href={{pathname:'/(app)/enroll_payment'}}>
            <View style={styles.stepInactive}>
              <Text style={styles.stepText}>2</Text>
            </View>
          </Link>
          <View style={styles.lineInactive} />
          <Link href={{pathname: '/(app)/enroll_details'}}>
            <View style={styles.stepInactive}>
              <Text style={styles.stepText}>3</Text>
            </View>
          </Link>
        </View>

        {/* Overview Section */}
        <View style={styles.overviewSection}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.lessonName}>Name Of Lesson: <Text style={styles.bold}>Mobile App UI/UX</Text></Text>

            {/* Lesson Details */}
            <View style={styles.lessonDetails}>
            <Text style={styles.lessonDetailItem}>100+ Lessons</Text>
            <Text style={styles.lessonDetailItem}>Certificate</Text>
            <Text style={styles.lessonDetailItem}>7 Weeks</Text>
            <Text style={styles.lessonDetailItem}>20% Off</Text>
            </View>

            {/* Course Info */}
            <View style={styles.courseInfo}>
            <Text style={styles.courseRating}>Course Rating: ⭐⭐⭐⭐⭐</Text>
            <Text style={styles.courseTime}>Course Time: <Text style={styles.bold}>7 Hrs</Text></Text>
            <Text style={styles.trainerName}>Name Of Trainer: <Text style={styles.bold}>M. Umair</Text></Text>
            </View>

            {/* Purchase Details */}
            <View style={styles.purchaseDetails}>
            <Text style={styles.purchaseTitle}>Purchase Detail:</Text>
            <Text>Date: 15-4-2024</Text>
            <Text>Price Of Course: 100$</Text>
            <Text>Coupon: Added 30% Discount</Text>
            </View>

            {/* Final Price */}
            <Text style={styles.finalPrice}>Final Price: <Text style={styles.bold}>70$</Text></Text>
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={()=> router.navigate('/(app)/enroll_payment')}>
            <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  );
};

export default CourseCheckoutScreen;

const styles = StyleSheet.create({
safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    height: 90,
    width: width*0.9,
    padding: 20,
    backgroundColor: '#F2E1F3',
    borderWidth: 1,
    borderColor: '#8AB3B5'
  },
  step: {
    backgroundColor: '#800080',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepInactive: {
    backgroundColor: '#8AB3B5',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lineInactive: {
    width: 40,
    height: 2,
    backgroundColor: '#8AB3B5',
    },
  lineActive: {
    width: 40,
    height: 2,
    backgroundColor: '#800080',
  },
  overviewSection: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lessonName: {
    fontSize: 18,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  lessonDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  lessonDetailItem: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  courseInfo: {
    marginBottom: 20,
  },
  courseRating: {
    fontSize: 18,
    marginBottom: 5,
  },
  courseTime: {
    fontSize: 18,
    marginBottom: 5,
  },
  trainerName: {
    fontSize: 18,
    marginBottom: 20,
  },
  purchaseDetails: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  purchaseTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  finalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  continueButton: {
    backgroundColor: '#800080',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

