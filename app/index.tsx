import { Text, View, Pressable, StyleSheet } from "react-native";
import { router } from 'expo-router'
import React from 'react';

 
export default function Intro() {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>GOAL Finder</Text>
      <Text style={styles.slogan}>The best way to find new programs for you</Text>
      <Pressable 
            style={styles.createButton}
            onPress={() => router.replace('/signupfirst')}>
        <Text style={styles.createText}>SignUp</Text>
      </Pressable>
      <Pressable 
        style={styles.alreadyButton} 
        // onPress={() => router.push('/login')}
        onPress={() => router.push('/login')}
      >
        <Text style={styles.alreadyText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logoText: {
    fontSize: 40,
    marginBottom: 78,
    textAlign: 'center',
    marginVertical: 200,
  },
  slogan: {
    fontSize: 16,
    marginBottom: 92,
    textAlign: 'center',
  },
  createButton: {
    width: '90%',
    height: 61,
    backgroundColor: '#5E60CE',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 23,
  },
  createText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  alreadyButton: {
    width: '90%',
    height: 61,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alreadyText: {
    fontSize: 16,
  },
});
