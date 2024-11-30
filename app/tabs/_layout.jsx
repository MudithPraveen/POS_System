import React from 'react';
import { View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Tabs, useRouter } from 'expo-router';
import { FontAwesome, Foundation } from '@expo/vector-icons';

const TabRoot = () => {
  const router = useRouter();
  // Handle sign out
  const handleSignOut = () => {
    // Show an alert for confirmation (you can replace it with actual sign out logic)
    Alert.alert(
      "Sign Out",
      "Are you sure you want to sign out?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Sign Out", onPress: () => signOut() },
      ]
    );
  };

  const signOut = () => { 
    router.push("./");
    console.log("User signed out!");
  
  };

  return (
    <View style={{ flex: 1 }}>
      <Tabs>
        <Tabs.Screen 
          name="index" 
          options={{ 
            title: "Home", 
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}/> 
          }}
        />
        <Tabs.Screen 
          name="About" 
          options={{ 
            title: "About Us", 
            tabBarIcon: ({ color }) => <Foundation size={28} name="info" color={color}/> 
          }}
        />
      </Tabs>

      <TouchableOpacity style={styles.fab} onPress={signOut}>
        <FontAwesome name="sign-out" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#FF3B30', // Red color for sign-out
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TabRoot;
