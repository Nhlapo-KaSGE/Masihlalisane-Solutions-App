// components/landlord/homeL.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LandlordHomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Landlord!</Text>
      <Button
        title="View Your Listings"
        onPress={() => alert('Navigate to Landlord Listings')}
      />
      <Button
        title="Logout"
        onPress={() => navigation.navigate('LoginPage')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003366',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
});

export default LandlordHomePage;
