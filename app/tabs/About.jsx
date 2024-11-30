import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function AboutUs() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.text}>
          Our mission is to provide high-quality products and an exceptional shopping experience to our customers. 
          We strive to offer the best deals and a wide range of products across various categories.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Story</Text>
        <Text style={styles.text}>
          We started as a small online shop and have grown into a trusted platform for customers looking for the best in 
          electronics, clothing, home appliances, and more. Our focus is on customer satisfaction and delivering value.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Meet the Team</Text>
        <Text style={styles.text}>
          Our team consists of dedicated professionals from diverse backgrounds who are passionate about delivering 
          the best shopping experience. We work hard to improve our platform and services every day.
        </Text>
      </View>

      <View style={styles.section}>
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
      </View>

      <View style={styles.footer}>
        <Image source={require('../../assets/images/POS-Software.png')} style={styles.footerImage} />
        <Text style={styles.footerText}>We are here to serve you!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    marginBottom: 30,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: '#075eec',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'center',
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  footerImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 100,
    marginBottom: 20,
    marginTop: 5,
  },
  footerText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
});
