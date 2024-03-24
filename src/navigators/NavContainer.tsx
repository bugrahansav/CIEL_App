import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../components/Header'
import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/LoginScreen';


export default function NavContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if(!isLoggedIn) {
    return <LoginScreen onSuccessfulLogin={handleSuccessfulLogin} />
  } else {
    return (
      <NavigationContainer>
        <Header />
        <TabNavigator onLogout={handleLogout} />
      </NavigationContainer>
    );
  }
}

