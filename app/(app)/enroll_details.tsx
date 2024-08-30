import CustomHeader from '@/components/CustomHeader';
import { Link, router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const AddDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>

      <ScrollView style={styles.container}>
        <CustomHeader/>
        {/* Step Indicator */}

        <View style={styles.stepIndicator}>
          <Link href={{ pathname:'/(app)/enroll_overview'}}>
            <View style={styles.stepInactive}>
              <Text style={styles.stepText}>1</Text>
            </View>
          </Link>
          <View style={styles.lineInactive} />
          <Link href={{pathname:'/(app)/enroll_payment'}}>
            <View style={styles.stepInactive}>
              <Text style={styles.stepText}>2</Text>
            </View>
          </Link>
          <View style={styles.lineActive} />
          <Link href={{pathname: '/(app)/enroll_details'}}>
            <View style={styles.step}>
              <Text style={styles.stepText}>3</Text>
            </View>
          </Link>
        </View>

        {/* Add Details Section */}
        <Text style={styles.sectionTitle}>Add Details</Text>

        <TextInput style={styles.input} placeholder="Card Number" keyboardType="numeric" />
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="CVV Number" keyboardType="numeric" />
          <TextInput style={[styles.input, styles.halfInput]} placeholder="Expire Date" />
        </View>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />

        {/* Purchase Details */}
        <View style={styles.purchaseDetails}>
          <Text style={styles.purchaseTitle}>Purchase Detail:</Text>
          <Text>Date: 15-4-2024</Text>
          <Text>Price Of Course: 100$</Text>
          <Text>Coupon: Added 30% Discount</Text>
        </View>

        {/* Final Price */}
        <Text style={styles.finalPrice}>Final Price: <Text style={styles.bold}>70$</Text></Text>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={()=> router.navigate('/(app)/transaction_completed')}>
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddDetailsScreen;

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
    marginTop: 15,
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    backgroundColor: '#f8e6f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  purchaseDetails: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  purchaseTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  finalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 20,
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
  bold: {
    fontWeight: 'bold',
  },
});
