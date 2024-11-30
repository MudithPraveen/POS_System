import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image } from 'react-native';

export default function Home() {
  const stats = {
    users: 1200,
    ordersToday: 56,
    totalOrders: 4500,
    pendingOrders: 30,
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
      <View style={styles.header}>
      <Image
        alt="App Logo"
        resizeMode="contain"
        style={styles.headerImg}
        source={require('../../assets/images/comlogo.jpg')} 
      />
      <Text style={styles.welcomeText}>Welcome to the POS System!</Text>
    </View>
        <Text style={styles.subtitle}>Manage your store efficiently and effectively.</Text>
      </View>

      {/* Dashboard Section */}
      <View style={styles.dashboard}>
        <Text style={styles.dashboardTitle}>Dashboard</Text>
        
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{stats.users}</Text>
          <Text style={styles.statLabel}>Total Users</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>{stats.ordersToday}</Text>
          <Text style={styles.statLabel}>Orders Today</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>{stats.totalOrders}</Text>
          <Text style={styles.statLabel}>Total Orders</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>{stats.pendingOrders}</Text>
          <Text style={styles.statLabel}>Pending Orders</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center items vertically
    padding: 10, // Add padding around the row
    backgroundColor: '#f8f9fa', // Optional: Add a background color
  },
  headerImg: {
    width: "30%",
    height: 90,
    borderRadius: 30,
    marginRight: 10, // Space between the logo and text
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  welcomeSection: {
    marginBottom: 20,
    alignItems: 'center',
  },
  
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 8,
  },
  dashboard: {
    marginTop: 20,
  },
  dashboardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  statCard: {
    backgroundColor: '#ffffff',
    marginBottom: 16,
    marginRight:25,
    marginLeft:25,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007bff',
  },
  statLabel: {
    fontSize: 16,
    color: '#555',
    marginTop: 8,
  },
});
