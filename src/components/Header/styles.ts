import { StyleSheet, Dimensions } from 'react-native';


const {height} = Dimensions.get("window")

const styles = StyleSheet.create({
  header: {
    height: height * 0.11,
    backgroundColor: '#131314',
    borderBottomWidth: 1,
    borderBottomColor: '#323235',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  headerTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    margin: 10
  }
})



export default styles;