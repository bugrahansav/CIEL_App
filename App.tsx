import React from 'react';
import { View, Text } from 'react-native';
import NavContainer from "./src/navigators/NavContainer";
import { useFonts } from 'expo-font';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    'Pacifico-Regular': require('./assets/fonts/Pacifico-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavContainer />
  );
}

