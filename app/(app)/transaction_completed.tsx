import CustomHeader from '@/components/CustomHeader';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const TransactionCompleteScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <CustomHeader/>
      {/* Step Indicator */}
      <View style={styles.stepIndicator}>
            <View style={styles.stepInactive}>
            <Text style={styles.stepText}>1</Text>
            </View>
            <View style={styles.lineInactive} />
            <View style={styles.stepInactive}>
            <Text style={styles.stepText}>2</Text>
            </View>
            <View style={styles.lineActive} />
            <View style={styles.step}>
            <Text style={styles.stepText}>3</Text>
            </View>
        </View>

      {/* Transaction Completed Message */}
      <View style={styles.transactionContainer}>
        <View style={styles.iconContainer}>
          <Text style={styles.checkMark}>✔</Text>
        </View>
        <Text style={styles.transactionText}>Transaction Completed</Text>

        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <Image
            source={require('@/assets/images/bro.png')} // Replace with the actual image URL or local asset
            style={styles.illustration}
          />
        </View>
      </View>

      {/* Continue to Lesson Button */}
      <TouchableOpacity style={styles.continueButton} onPress={()=> router.navigate('/')}>
        <Text style={styles.continueButtonText}>CONTINUE TO LESSON</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    // justifyContent: 'center',
    backgroundColor: '#FFFFFF',
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
  stepItem: {
    alignItems: 'center',
    flex: 1,
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
  activeStep: {
    backgroundColor: '#E0E0E0', // Light Grey
    padding: 10,
    borderRadius: 50,
  },
  
  stepLabel: {
    fontSize: 14,
    marginTop: 4,
    color: '#333333',
  },
  transactionContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  iconContainer: {
    marginBottom: 20,
    backgroundColor: '#AA00FF', // Dark Purple
    padding: 20,
    borderRadius: 50,
  },
  checkMark: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  transactionText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333333',
  },
  illustrationContainer: {
    marginTop: 20,
  },
  illustration: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  continueButton: {
    backgroundColor: '#D456DF', // Purple
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal: 20
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default TransactionCompleteScreen;
