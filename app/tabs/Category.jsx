import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const categories = [
  { id: '1', name: 'Fruits', image: require('../../assets/images/fruits.png') },
  { id: '2', name: 'Vegetables', image: require('../../assets/images/fruits.png') },
  { id: '3', name: 'Dairy', image: require('../../assets/images/fruits.png') },
  { id: '4', name: 'Snacks', image: require('../../assets/images/fruits.png') },
  { id: '5', name: 'Beverages', image: require('../../assets/images/fruits.png') },
  { id: '6', name: 'Bakery', image: require('../../assets/images/fruits.png') },
  { id: '7', name: 'Frozen Foods', image: require('../../assets/images/fruits.png') },
  { id: '8', name: 'Household Items', image: require('../../assets/images/fruits.png') },
];

export default function Home() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.gridItem}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={4} // Display items in 2 columns
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  grid: {
    justifyContent: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 10,
    height:220,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 170,
    height: 170,
    marginTop:1,
    marginBottom: 1,
    resizeMode: 'contain',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
