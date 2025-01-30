import {StyleSheet, Dimensions} from 'react-native';
import {wp} from '../../theme/Dimensions';
import {Colors} from '../../theme/Colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width,
  },
  entryImage: {
    width: wp(80),
    height: wp(100),
    resizeMode: 'contain',
  },
  title: {
    fontWeight: '600',
    fontSize: wp(6),
    color: Colors.blackColor,
    textAlign: 'center',
    marginBottom: wp(2),
  },
  text: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: wp(3.5),
    color: Colors.descriptionGrey,
    padding: wp(3),
    lineHeight: wp(5),
  },
  viewWidth: {
    width: wp(90),
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp(5),
  },

  tabIndicator: {
    width: wp(3.5),
    height: wp(2.5),
    borderRadius: wp(2),
    marginHorizontal: wp(1.5),
    backgroundColor: Colors.greyColor,
  },

  activeTabIndicator: {
    backgroundColor: Colors.activeGreyColor,
    width: wp(8),
    height: wp(3),
    borderRadius: wp(1.5),
  },

  inactiveTabIndicator: {
    backgroundColor: Colors.inActiveGreyColor,
  },
  buttonContainer: {
    width: wp(80),
    marginVertical: wp(5),
    alignSelf: 'center',
  },
});

export default styles;
