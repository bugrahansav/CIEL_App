import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-paper';
import MainNavigator from './MainNavigator';
import SettingsNavigator from './SettingsNavigator';
import QRNavigator from './QRNavigator';
import { TouchableOpacity, View } from 'react-native';
import styles from '../components/BottomNavigator/styles';


const Tab = createBottomTabNavigator();

function RootNavigator() {
  const CustomTabBarQRButton = ({ children }) => (
    <TouchableOpacity>
      <Icon source='qrcode' size={25} />
    </TouchableOpacity>
  );
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: styles.zort,
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainNavigator}
        options={{
          tabBarActiveBackgroundColor: '#131314',
          tabBarInactiveBackgroundColor: '#131314',
          tabBarIcon: () => (
            <Icon source='food-outline' size={25} color='white' />
          )
        }}
      />
      <Tab.Screen
        name="QR"
        component={QRNavigator}
        options={{
          tabBarButton: (props) => <CustomTabBarQRButton {...props}/>
        }}
      />
      
      <Tab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarActiveBackgroundColor: '#131314',
          tabBarInactiveBackgroundColor: '#131314',
          tabBarIcon: () => (
            <Icon source='account-settings-outline' size={25} color='white' />
          )
        }}
      />
    </Tab.Navigator>
  
  );
}

export default RootNavigator;
