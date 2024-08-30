import CustomHeader from '@/components/CustomHeader';
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = Array(6).fill({
  name: 'Name Here',
  message: 'Hi, Good Evening dear!',
  time: '15:48'
});

const ChatScreen = () => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.chatItem}>
      <View style={styles.avatar} />
      <View style={styles.chatContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title='Inbox'/>
      <View style={styles.header}>
        <TextInput style={styles.searchInput} placeholder="Search Here" />
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.chatTab}>
          <Text style={styles.chatTabText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Calls</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    marginVertical: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 15,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    
  },
  chatTab: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#BA68C8',
    borderRadius: 15,
    marginHorizontal: 5
  },
  chatTabText: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 18
  },
  tab: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#F2E1F3',
    borderRadius: 15,
    marginHorizontal: 5
  },
  tabText: {
    fontWeight: '500',
    fontSize: 18
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginRight: 12,
  },
  chatContent: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
  },
  message: {
    color: '#555',
  },
  time: {
    color: '#aaa',
  },
});

export default ChatScreen;
