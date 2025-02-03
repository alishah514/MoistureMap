import {Platform, StyleSheet} from 'react-native';
import {Colors} from './Colors';
import {hp, wp} from './Dimensions';

const CommonStyles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.whiteColor},
  alignItemsCenter: {alignItems: 'center'},
  textAlignCenter: {textAlign: 'center'},
  flexRow: {flexDirection: 'row'},
  // padding top
  paddingTop2: {paddingTop: wp(2)},
  paddingTop3: {paddingTop: wp(3)},
  paddingTop5: {paddingTop: wp(5)},
  paddingTop8: {paddingTop: wp(8)},
  paddingTop10: {paddingTop: wp(10)},
  paddingTop15: {paddingTop: wp(15)},

  // margin Vertical
  marginVertical5: {marginVertical: wp(5)},
  // margin right
  marginRight3: {marginRight: wp(3)},

  //padding horizontal
  paddingHorizontal5: {paddingHorizontal: wp(5)},

  // common button component
  commonButton: {
    width: wp(80),
    height: Platform.OS === 'ios' ? hp(6) : hp(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(5),
  },
  commonHalfButton: {
    width: wp(45),
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(5),
  },
  lessBold5: {fontWeight: '500', fontSize: wp('4.5')},

  shadow: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    android: {
      elevation: 5,
    },
  }),

  // input field component
  inputContainer: {
    marginBottom: wp(4),
    width: wp(90),
  },
  inputLabel: {
    fontSize: wp(3.5),
    fontWeight: '400',
    color: Colors.blackColor,
    marginBottom: wp(2),
  },
  inputRequired: {
    color: Colors.redColor,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.greyColor,
    borderRadius: wp(2),
    paddingHorizontal: wp(3),
    height: wp(12),
    backgroundColor: Colors.whiteColor,
  },
  inputFocused: {
    borderColor: Colors.greyColor,
  },
  inputField: {
    flex: 1,
    fontSize: wp(3.5),
    color: Colors.blackColor,
  },
  inputIcon: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
    marginRight: wp(2),
  },
  inputEyeIcon: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
  },
  inputErrorText: {
    color: Colors.redColor,
    fontSize: wp(3.5),
    marginTop: wp(2),
  },

  // header
  headerWhiteScreenView: {
    backgroundColor: Colors.whiteColor,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  headerBlueScreenView: {
    backgroundColor: Colors.blueColor,
    borderBottomWidth: 1,
    borderBottomColor: Colors.greyColor,
  },
  headerMain: {
    flexDirection: 'row',
    height: hp(7),
    alignItems: 'center',
  },
  headerBackView: {
    width: wp(10),
    alignItems: 'flex-end',
  },
  headerEachView: {width: wp(30), paddingLeft: wp(5)},
  headerThirdView: {width: wp(30), alignItems: 'flex-end', paddingRight: wp(5)},
  headerTitleContainer: {
    paddingLeft: wp(10),
  },
  headerTitleCenter: {
    alignItems: 'center',
    width: '100%',
  },
  headerTitleText: {
    color: Colors.blackColor,
    fontSize: wp(4.5),
    fontWeight: '600',
  },
  header80View: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp(5),
    width: wp(80),
    alignItems: 'center',
  },
  headerFullView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    width: wp(100),
  },
  headerPaddingRight10: {paddingRight: wp(10)},
  headerRight2Views: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default CommonStyles;
