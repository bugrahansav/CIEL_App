import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/Header';
import RootNavigator from './src/navigators/RootNavigator';



export default function App() {

  return (
      <NavigationContainer>
        <Header />
        <RootNavigator />
      </NavigationContainer>
  );
}

