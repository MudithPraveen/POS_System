import React, { useState } from 'react';
import { Link, useRouter } from "expo-router";
import { View, Text, TextInput, Button, StyleSheet,Image } from 'react-native';

export default function SignUp() {
  const router = useRouter();

  // State variables for inputs and errors
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSignUp = () => {
    let isValid = true;

    // Reset error messages
    setNameError('');
    setEmailError('');
    setPasswordError('');

    // Validate name
    if (!name) {
      setNameError('Name is required.');
      isValid = false;
    }

    // Validate email
    if (!email) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required.');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      isValid = false;
    }

    // If valid, navigate to the SignIn screen
    if (isValid) {
      router.push("/");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image
            alt="App Logo"
            resizeMode="contain"
            style={styles.headerImg}
            source={{ uri: 'https://assets.withfra.me/SignIn.2.png' }} />
      <Text style={styles.title}>SignUp in to <Text style={{ color: '#075eec' }}>POS SYSTEM</Text></Text>
      <Text style={styles.subtitle}>
            Get access to your pos system and more
          </Text>
      </View>
      {/* Name Input */}
      <Text style={styles.inputLabel}>Name</Text>
      <TextInput
        placeholder="Name"
        style={[styles.input, nameError && styles.errorBorder]}
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
        placeholderTextColor="#6b7280"
      />
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

      {/* Email Input */}
      <Text style={styles.inputLabel}>Email</Text>
      <TextInput
        placeholder="Email"
        style={[styles.input, emailError && styles.errorBorder]}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#6b7280"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      {/* Password Input */}
      <Text style={styles.inputLabel}>Password</Text>
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[styles.input, passwordError && styles.errorBorder]}
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#6b7280"
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      {/* Sign-Up Button */}
      <View style={styles.btn}>
      <Text style={styles.btnText} onPress={handleSignUp}>Sign Up</Text>
      
      </View>

      {/* Sign-In Link */}
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
    marginBottom: 5,
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
});
