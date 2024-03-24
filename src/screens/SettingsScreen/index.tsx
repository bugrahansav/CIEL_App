import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function SettingsScreen({ onLogout }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayarlar</Text>
      <TouchableOpacity style={styles.button} onPress={onLogout}>
        <Text style={styles.buttonText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});