import { StyleSheet, Dimensions } from 'react-native';

const {height} = Dimensions.get("window")

const styles = StyleSheet.create({
  homeScreenContainer: {

  },
  homeStoryTab: {
    height: height * 0.13,
    borderWidth: 1,
    borderBottomColor: '#323235'
  },
  homeLoyalty: {
    height: height * 0.26,
    borderWidth: 1,
    borderBottomColor: '#323235',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  homeUnnamed: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#323235',
    height: 40
  },
  homeLoyaltyIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icons: {
    height: 50,
    width: 50
  }
})

export default styles;