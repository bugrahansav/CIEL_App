import React from 'react'
import { Icon} from 'react-native-paper';
import { View, Text } from 'react-native';
import styles from './styles';


function index() {
  return (
    <View style={styles.botmNav}>
      <View style={ styles.iconMenu }>
        <Icon
          source="food-outline"
          color= 'white'
          size={25}
        />
        <Text style={styles.iconTxt}>Menu</Text>
      </View>
      <View style={ styles.iconQR }>
      <Icon
          source="qrcode"
          color= 'white'
          size={70}
        />
      </View>
      <View style={ styles.iconSettings }>
      <Icon
          source="account-settings-outline"
          color= 'white'
          size={25}
        />
        <Text style={styles.iconTxt}>Settings</Text>
      </View>
    </View>
  )
}

export default index;