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
    fontSize: wp(6),
    color: Colors.blackColor,
  },
  registerTitleView: {alignSelf: 'flex-start', paddingLeft: wp(5)},
  registerTitleView2: {alignSelf: 'center', paddingLeft: wp(5)},

  loginDescription: {
    fontWeight: '400',
    fontSize: wp(3.5),
    color: Colors.descriptionGrey,

    lineHeight: wp(5),
  },
  codeFieldView: {alignSelf: 'flex-start', marginVertical: wp(5)},
  twoSeparateViews: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: wp(5),
    width: wp(95),
  },
  codeFieldRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: wp(90),
  },
  cell: {
    width: wp(13.5),
    height: wp(13.5),
    borderWidth: wp(0.2),
    borderRadius: wp(1),
    borderColor: '#E8EBEE',
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: wp(3),
    backgroundColor: Colors.whiteColor,
  },
  focusCell: {
    borderColor: Colors.blueColor,
    backgroundColor: '#E7EBF4', // Light blue background
  },
  cellText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  expiryText: {
    textAlign: 'left',
  },
  miniButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: wp(5),
    width: wp(90),
    justifyContent: 'center',
  },
  miniButtonText: {
    fontWeight: '400',
    fontSize: wp(4),
    color: Colors.blackColor,
    marginRight: wp(10),
  },
  miniText: {
    fontWeight: '500',
    fontSize: wp(3.5),
    color: Colors.blackColor,
    textAlign: 'center',
    marginTop: wp(5),
  },
});

export default styles;
