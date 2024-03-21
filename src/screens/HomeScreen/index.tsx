import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Header from '../../components/Header';

function HomeScreen() {
  const [fill, setFill] = useState<number>(0); // Initialize fill state to 0

  // Update fill state (example, adjust based on your logic)
  const updateFill = () => {
    setFill(Math.min(fill + 20, 100)); // Update fill with a maximum of 100
  };
  const deleteFill = () => {
    if (fill == 100) {
      setFill(fill - 100);
    }
  };
  return (
    <View style={styles.homeScreenContainer}>
      <View style={styles.homeStoryTab}></View>

      <View style={styles.homeLoyalty}>
        <View style={styles.homeUnnamed}>
          <AnimatedCircularProgress
            size={120}
            width={15}
            fill={fill}
            tintColor="white"
            backgroundColor="#323235"
          >
            {(fill) => (
              <Text style={{ color: 'white', fontSize: 45 }}>{fill / 20}</Text>
            )}
          </AnimatedCircularProgress>
          <TouchableOpacity style={styles.button} onPress={updateFill}>
            <Text style={{ color: 'white' }}>setCoffee</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={deleteFill}>
            <Text style={{ color: 'white' }}>deleteCoffee</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.homeLoyaltyIcons}>
          <Image style={styles.icons} source={require('../../../assets/coffee_cup_ciel_fill.png')} />
          <Image style={styles.icons} source={require('../../../assets/coffee_cup_ciel_fill.png')} />
          <Image style={styles.icons} source={require('../../../assets/coffee_cup_ciel_outline.png')} />
          <Image style={styles.icons} source={require('../../../assets/coffee_cup_ciel_outline.png')} />
          <Image style={styles.icons} source={require('../../../assets/coffee_cup_ciel_outline.png')} />
        </View>
      </View>

    </View>
  )
}

export default HomeScreen;