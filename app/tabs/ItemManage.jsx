import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const categories = [
  { id: '1', name: 'Fruits' },
  { id: '2', name: 'Vegetables' },
  { id: '3', name: 'Dairy' },
  { id: '4', name: 'Snacks' },
  { id: '5', name: 'Beverages' },
  { id: '6', name: 'Bakery' },
  { id: '7', name: 'Frozen Foods' },
  { id: '8', name: 'Household Items' },
];

export default function ItemManagementPage() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemCategory, setItemCategory] = useState('1'); // Default to Fruits
  const [editingItemId, setEditingItemId] = useState(null);

  const handleAddItem = () => {
    if (!itemName || !itemDescription || !itemPrice) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    const newItem = {
      id: Math.random().toString(),  // Generate a unique ID for new item
      name: itemName,
      description: itemDescription,
      price: itemPrice,
      category: itemCategory,
    };

    if (editingItemId) {
      setItems(items.map(item => item.id === editingItemId ? newItem : item));
    } else {
      setItems([...items, newItem]);
    }

    // Reset the form
    resetForm();
  };

  const handleEditItem = (itemId) => {
    const itemToEdit = items.find(item => item.id === itemId);
    if (itemToEdit) {
      setItemName(itemToEdit.name);
      setItemDescription(itemToEdit.description);
      setItemPrice(itemToEdit.price);
      setItemCategory(itemToEdit.category);
      setEditingItemId(itemId);
    }
  };

  const handleDeleteItem = (itemId) => {
    Alert.alert(
      'Delete Item',
      'Are you sure you want to delete this item?',
      [
        { text: 'Cancel' },
        { text: 'Yes', onPress: () => setItems(items.filter(item => item.id !== itemId)) },
      ]
    );
  };

  const resetForm = () => {
    setItemName('');
    setItemDescription('');
    setItemPrice('');
    setItemCategory('1');
    setEditingItemId(null);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDetails}>{item.description}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
      <Text style={styles.itemCategory}>{categories.find(cat => cat.id === item.category)?.name}</Text>
      <View style={styles.itemActions}>
        <TouchableOpacity onPress={() => handleEditItem(item.id)} style={styles.button}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteItem(item.id)} style={styles.button}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{editingItemId ? 'Edit Item' : 'Add New Item'}</Text>

      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={itemDescription}
        onChangeText={setItemDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={itemPrice}
        onChangeText={setItemPrice}
      />

      <Text style={styles.label}>Select Category</Text>
      <View style={styles.picker}>
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryButton}
            onPress={() => setItemCategory(category.id)}
          >
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button title={editingItemId ? "Update Item" : "Add Item"} onPress={handleAddItem} />

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.itemList}
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
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  picker: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  categoryButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    margin: 5,
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
  },
  itemList: {
    marginTop: 20,
  },
  itemCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  itemDetails: {
    fontSize: 16,
    color: '#555',
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 18,
    color: '#007bff',
    fontWeight: 'bold',
  },
  itemCategory: {
    fontSize: 16,
    color: '#888',
    marginBottom: 12,
  },
  itemActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 8,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});
