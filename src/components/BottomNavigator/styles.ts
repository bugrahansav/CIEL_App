import { StyleSheet, Dimensions } from 'react-native';

const {height} = Dimensions.get("window")

const styles = StyleSheet.create({
  botmNav: {
    height: height * 0.08,
    backgroundColor: '#131314',
    borderTopWidth: 1,
    borderTopColor: '#131314',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconMenu: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    borderWidth: 1,
    borderTopColor: '#323235',
    borderRightColor: '#131314',
  },
  iconQR: {
    alignItems: 'center',
    justifyContent: 'center',
    width: height * 0.13,
    height: height * 0.13,
    top: -50,
    borderWidth: 1,
    borderColor: '#323235',
    borderRadius: 100,
  },
  iconSettings: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    borderWidth: 1,
    borderTopColor: '#323235',
    borderLeftColor: '#131314'
  },
  iconTxt: {
    color: 'white',
  },
  zort: {
  }
})

export default styles;