import React from 'react';
import { Link, useRouter  } from "expo-router"
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SignUp() {
    const router = useRouter();
    const handleSignUp = () => {
        router.push("/");
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Link href={"/"} style={styles.link}>
      Already have an account? Sign In
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  link: {
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
});
