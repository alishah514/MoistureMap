import {StyleSheet} from 'react-native';
import {hp, wp} from '../../theme/Dimensions';
import {Colors} from '../../theme/Colors';

const styles = StyleSheet.create({
  profileMainContainer: {
    flex: 1, // Takes up all available space
  },
  profileContainer: {
    flexDirection: 'row',
    width: wp(100),
    marginVertical: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  profileContainer2: {
    flexDirection: 'row',
    width: wp(100),
    paddingVertical: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.greyButtonColor,
  },
  profileImageContainer: {
    width: wp(20),
    alignItems: 'center',
  },
  profileImage: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(7),
  },
  profileTextContainer: {
    width: wp(45),
    alignItems: 'flex-start',
  },
  profileTextContainer2: {
    width: wp(65),
    alignItems: 'flex-start',
  },
  profileTitle: {
    fontSize: wp(4.5),
    fontWeight: '600',
    color: Colors.blackColor,
  },
  profileSubtitle: {
    fontSize: wp(3),
    fontWeight: '400',
    color: Colors.descriptionGrey,
    marginTop: wp(1),
  },
  profileBox: {
    width: wp(30),
    alignItems: 'center',
    marginRight: wp(2),
  },
  penBox: {
    width: wp(10),
    alignItems: 'center',
    marginRight: wp(2),
  },
  penIcon: {width: wp(4), height: wp(4)},
  profileEditIconContainer: {
    height: hp(4),
    paddingHorizontal: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8EBEE',
    borderRadius: wp(4),
  },
  profileNavigatorContainer: {
    height: hp(5),
    width: wp(100),
    backgroundColor: Colors.greyButtonColor,
    justifyContent: 'center',
    paddingHorizontal: wp(5),
  },
  profileNavigatorTitleText: {
    fontSize: wp(4),
    fontWeight: '500',
    color: Colors.blackColor,
  },
  profileOptionsContainer: {
    flex: 1, // Allows the list to take up remaining space
  },
  profileNavigatorOptionRow: {
    flexDirection: 'row',
    marginTop: wp(5),
    alignItems: 'center',
    width: wp(90),
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: wp(5),
    borderBottomColor: Colors.greyColor,
  },
  profileNavigatorOptionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileNavigatorOptionText: {
    color: Colors.blackColor,
    fontSize: wp(3.5),
    fontWeight: '500',
    marginHorizontal: wp(3),
  },
  profileNavigatorIconStyle: {
    color: Colors.descriptionGrey,
  },
  profileNavigatorIcon: {
    width: wp(4),
    height: wp(4),
  },
  profileExtraText: {
    fontSize: wp(3.5),
    color: Colors.descriptionGrey,
    marginRight: wp(3),
  },
  profileButtonContainer: {
    paddingBottom: wp(5),
    alignSelf: 'center',
  },
  inputFieldsMainView: {width: wp(90), marginTop: wp(5), alignSelf: 'center'},
});

export default styles;
