import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import QRScreen from '../screens/QRScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();
function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Home_'
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTitle: () => null,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;