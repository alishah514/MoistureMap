import {StyleSheet} from 'react-native';
import {wp} from '../../theme/Dimensions';
import {Colors} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropImage: {
    width: wp(10),
    height: wp(10),
    resizeMode: 'contain',
    marginRight: wp(2),
  },
  appTitleView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontWeight: '600',
    fontSize: wp(7),
    color: Colors.blackColor,
  },
  loginTitle: {
    fontWeight: '600',
    fontSize: wp(6),
    color: Colors.blackColor,
  },
  loginDescription: {
    fontWeight: '400',
    fontSize: wp(4),
    color: Colors.descriptionGrey,
    textAlign: 'center',
    paddingTop: wp(3),
    lineHeight: wp(6),
  },
  formView: {paddingTop: wp(8), alignItems: 'center', width: wp(90)},
  rightArrowStyle: {position: 'absolute', right: -100},
  bottomDescriptionView: {marginVertical: wp(3), width: wp(90)},
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
