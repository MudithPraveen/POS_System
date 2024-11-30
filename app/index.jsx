import React from 'react';
import { Link, useRouter } from "expo-router"
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function SignIn() {
    const router = useRouter();
    const handleSignIn = () => {
        router.push("/tabs");
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <Button title="Sign In" onPress={handleSignIn} />
      
      <Link href={"/SignUp"} style={styles.link}>
      Don't have an account? Sign Up
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
