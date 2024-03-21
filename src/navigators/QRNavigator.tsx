import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QRScreen from '../screens/QRScreen'

const Stack = createStackNavigator();
function QRNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Qr'
        component={QRScreen}
      />
    </Stack.Navigator>
  );
}

export default QRNavigator;