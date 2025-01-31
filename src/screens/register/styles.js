import {StyleSheet} from 'react-native';
import {wp} from '../../theme/Dimensions';
import {Colors} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontWeight: '600',
    fontSize: wp(7),
    color: Colors.blackColor,
  },
  registerTitleView: {alignSelf: 'flex-start', paddingLeft: wp(5)},

  loginDescription: {
    fontWeight: '400',
    fontSize: wp(4),
    color: Colors.descriptionGrey,

    paddingTop: wp(3),
    lineHeight: wp(6),
  },
  rightArrowStyle: {position: 'absolute', right: -100},
  bottomDescriptionView: {marginBottom: wp(3), width: wp(90)},
  bottomDescriptionText: {
    marginTop: wp(5),
    fontWeight: '400',
    fontSize: wp(3.5),
    textAlign: 'center',
  },
  signupText: {
    paddingTop: wp(5),
    textAlign: 'center',
    fontWeight: '600',
    fontSize: wp(4),
  },
});
export default styles;
