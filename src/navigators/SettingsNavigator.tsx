import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen'

const Stack = createStackNavigator();
function SettingsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Sttgs'
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;