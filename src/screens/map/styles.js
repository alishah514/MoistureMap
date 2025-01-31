import {StyleSheet} from 'react-native';
import {hp, wp} from '../../theme/Dimensions';
import {Colors} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: wp(70),
    height: hp(6),
    borderRadius: wp(4),
    backgroundColor: Colors.whiteColor,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    width: wp(33),
    height: hp(5),
    borderRadius: wp(4),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  icon: {
    width: wp(5),
    height: wp(5),
  },
  listIcon: {
    tintColor: Colors.blackColor,
  },
});

export default styles;
