import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header';
import HomeScreen from './src/screens/HomeScreen';
import BottomNavigator from './src/components/BottomNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function App() {

  return (
    <SafeAreaProvider>
      <View>
        <Header />
      </View>
      <View style={styles.container}>
        <HomeScreen />
      </View>
      <View>
        <BottomNavigator />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131314'
  }
});

