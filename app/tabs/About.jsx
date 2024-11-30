import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutUs() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>
      
      <Text style={styles.sectionTitle}>Our Mission</Text>
      <Text style={styles.text}>
        Our mission is to provide high-quality products and an exceptional shopping experience to our customers. We strive to offer the best deals and a wide range of products across various categories.
      </Text>

      <Text style={styles.sectionTitle}>Our Story</Text>
      <Text style={styles.text}>
        We started as a small online shop and have grown into a trusted platform for customers looking for the best in electronics, clothing, home appliances, and more. Our focus is on customer satisfaction and delivering value.
      </Text>

      <Text style={styles.sectionTitle}>Meet the Team</Text>
      <Text style={styles.text}>
        Our team consists of dedicated professionals from diverse backgrounds who are passionate about delivering the best shopping experience. We work hard to improve our platform and services every day.
      </Text>

      <Text style={styles.sectionTitle}>Contact Us</Text>
      <Text style={styles.text}>
        Email: support@shop.com
      </Text>
      <Text style={styles.text}>
        Phone: +1 (123) 456-7890
      </Text>
      <Text style={styles.text}>
        Address: 123 Shop Street, Cityville, State, 12345
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    color: '#555',
  },
  text: {
    fontSize: 16,
    marginTop: 8,
    color: '#333',
    lineHeight: 24,
  },
});
