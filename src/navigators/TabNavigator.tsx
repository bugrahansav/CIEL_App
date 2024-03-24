import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import styles from '../components/BottomNavigator/styles';
import HomeNavigator from './HomeNavigator';
import SettingsNavigator from './SettingsNavigator';
import QRNavigator from './QRNavigator';
import SettingsScreen from '../screens/SettingsScreen';


const Tab = createBottomTabNavigator();

function TabNavigator({ onLogout }) {
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
        component={HomeNavigator}
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
          tabBarButton: (props) => <CustomTabBarQRButton {...props} />
        }}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarActiveBackgroundColor: '#131314',
          tabBarInactiveBackgroundColor: '#131314',
          tabBarIcon: () => (
            <Icon source='account-settings-outline' size={25} color='white' />
          )
        }}
      >
        {props => <SettingsScreen {...props} onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>

  );
}

export default TabNavigator;
