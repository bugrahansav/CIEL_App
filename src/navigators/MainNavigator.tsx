import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator();
function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Hme'
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTitle: () => null, // Hide the title text
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;