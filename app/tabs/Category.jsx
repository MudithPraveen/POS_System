import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const categories = [
  { id: '1', name: 'Fruits', image: require('../../assets/images/Fruitss.png') },
  { id: '2', name: 'Vegetables', image: require('../../assets/images/vegetables.png') },
  { id: '3', name: 'Dairy', image: require('../../assets/images/Dairy.png') },
  { id: '4', name: 'Snacks', image: require('../../assets/images/Snack.png') },
  { id: '5', name: 'Beverages', image: require('../../assets/images/Beverage.png') },
  { id: '6', name: 'Bakery', image: require('../../assets/images/Backery.png') },
  { id: '7', name: 'Frozen Foods', image: require('../../assets/images/frozen.png') },
  { id: '8', name: 'Household Items', image: require('../../assets/images/Houshold.png') },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item Categories</Text>
      <ScrollView contentContainerStyle={styles.grid}>
        {categories.map((item) => (
          <TouchableOpacity key={item.id} style={styles.gridItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%', // Two items per row (with margin)
    marginBottom: 16,
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
    width: '100%', // Scale dynamically to match item width
    height: 120, // Fixed height for images
    resizeMode: 'contain',
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});
