import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-paper';
import styles from './styles';



function index() {
  return (
    <View style={styles.botmNav}>

      <TouchableOpacity style={styles.iconMenu}>
        <Icon
          source="food-outline"
          color='white'
          size={25}
        />
        <Text style={styles.iconTxt}>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconQR}>
        <Icon
          source="qrcode"
          color='white'
          size={70}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconSettings}>
        <Icon
          source="account-settings-outline"
          color='white'
          size={25}
        />
        <Text style={styles.iconTxt}>Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index;