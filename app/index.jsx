import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,Image, TouchableOpacity,ScrollView } from 'react-native';
import { Link, useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();

  // State variables to manage inputs and errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSignIn = () => {
    let isValid = true;

    // Reset errors
    setEmailError('');
    setPasswordError('');

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

    // If all validations pass, navigate to the next screen
    if (isValid) {
      router.push('/tabs');
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
      <Image
            alt="App Logo"
            resizeMode="contain"
            style={styles.headerImg}
            source={require('../assets/images/comlogo.jpg')} />
      <Text style={styles.title}>
            Sign in to <Text style={{ color: '#075eec' }}>POS SYSTEM</Text>
          </Text>
          <Text style={styles.subtitle}>
            Get access to your pos system and more
          </Text>
          </View>

      {/* Email Input */}
      <Text style={styles.inputLabel}>Email address</Text>
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

      {/* Sign-In Button */}
      
      <View style={styles.btn}>
        <TouchableOpacity style={styles.btnContainer} onPress={handleSignIn}>
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
      </View>
      {/* Sign-Up Link */}
      <Link href={"/SignUp"} style={styles.link}>
        Don't have an account? Sign Up
      </Link>
    </View>
    </ScrollView>
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
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 36,
    borderRadius: 20,
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
  btnContainer: { 
    justifyContent: 'center', 
    alignItems: 'center', 
    //paddingHorizontal: "80%",
    backgroundColor: '#075eec',
    paddingVertical: 5,
    borderRadius: 30,
    height: 50,
    width:"100%"
  },
  btnText: {
    fontSize: 18,
    //lineHeight: 26,
    fontWeight: '600',
    color: 'white', 
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
    marginTop:30,
  },
});
