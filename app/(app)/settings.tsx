import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useNavigation } from 'expo-router';
import { useSession } from '../ctx';
import CustomHeader from '@/components/CustomHeader';

const { height, width } = Dimensions.get('window');

const SettingsScreen = () => {
    const { signOut } = useSession();
    const navigation = useNavigation();

    const handleLogout = () => {
        try {
          signOut();
          router.replace("/signin");
        } catch (error) {
          console.warn('Logout failed:', error);
        }
    };
  const menuItems = [
  { icon: 'person-outline', label: 'Edit Profile', screen: 'EditProfile', iconFamily: 'Ionicons' },
  { icon: 'card-outline', label: 'Payment Option', screen: 'PaymentOption', iconFamily: 'Ionicons' },
  { icon: 'certificate', label: 'My Certificate', screen: 'MyCertificate', iconFamily: 'FontAwesome5' },
  { icon: 'document-text-outline', label: 'Terms & Conditions', screen: 'TermsConditions', iconFamily: 'Ionicons' },
  { icon: 'help-circle-outline', label: 'Help Center', screen: 'HelpCenter', iconFamily: 'Ionicons' },
  { icon: 'people-outline', label: 'Invite Friends', screen: 'InviteFriends', iconFamily: 'Ionicons' },
  { icon: 'log-out-outline', label: 'Log Out', screen: null, iconFamily: 'Ionicons', action: handleLogout },
];


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <CustomHeader title='Settings'/>
        <View style={styles.iconContainer}>
          <Ionicons name="settings-outline" size={24} color="black" style={styles.icon} />
          <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
        </View>
      </View>

      <View style={styles.menuContainerWrapper}>
        <View style={styles.profileContainer}>
            <Image
            source={require('@/assets/images/profile_image.png')} // Replace with actual image URL
            style={styles.profileImage}
            />
        </View>

        <View style={styles.menuContainer}>
            {menuItems.map((item, index) => {
                const IconComponent = item.iconFamily === 'Ionicons' ? Ionicons : FontAwesome5;
                return (
                    <TouchableOpacity
                    key={index}
                    style={styles.menuItem}
                    onPress={() => item.action ? item.action() : item.screen}
                    >
                    <IconComponent name={item.icon} size={24} color="purple" />
                    <Text style={styles.menuLabel}>{item.label}</Text>
                    <Ionicons name="chevron-forward-outline" size={24} color="purple" />
                    </TouchableOpacity>
                );
            })}

        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f5e6f3',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
    },
  menuContainerWrapper: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 80, 
    position: 'relative',
    alignItems: 'center'
  },
  profileContainer: {
      position: 'absolute',
      marginTop: -50,
      zIndex: 1
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
    menuContainer: {
      height: height*0.6,
      width: width*0.95,
      paddingHorizontal: 15,
      paddingVertical: 80,
      borderRadius: 25,
      backgroundColor: '#f5e6f3',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuLabel: {
    fontSize: 16,
    color: 'purple',
    flex: 1,
    marginLeft: 10,
  },
});

export default SettingsScreen;
