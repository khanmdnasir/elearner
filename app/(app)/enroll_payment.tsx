import CustomHeader from '@/components/CustomHeader';
import { Link, router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const PaymentMethodScreen = () => {
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
          <View style={styles.lineActive} />
          <Link href={{pathname:'/(app)/enroll_payment'}}>
            <View style={styles.step}>
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

        {/* Payment Method Selection */}
        <Text style={styles.sectionTitle}>Select Payment Method</Text>

        <TouchableOpacity style={styles.paymentOption}>
            <Text style={styles.paymentText}>+ Paypal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.paymentOption, styles.selectedPaymentOption]}>
            <Text style={styles.paymentText}>+ Add Credit Card</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.paymentOption}>
            <Text style={styles.paymentText}>+ Google Pay</Text>
        </TouchableOpacity>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={()=> router.navigate('/(app)/enroll_details')}>
            <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
  );
};

export default PaymentMethodScreen;

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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  paymentOption: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedPaymentOption: {
    backgroundColor: '#f8e6f2', // Light purple background for selected option
    borderWidth: 1,
    borderColor: '#800080', // Purple border for selected option
  },
  paymentText: {
    fontSize: 18,
    color: '#000',
  },
  continueButton: {
    backgroundColor: '#800080',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
