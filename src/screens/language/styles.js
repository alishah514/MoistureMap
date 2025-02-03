import {StyleSheet} from 'react-native';
import {wp} from '../../theme/Dimensions';
import {Colors} from '../../theme/Colors';

const styles = StyleSheet.create({
  languageOptionRow: {
    flexDirection: 'row',
    marginTop: wp(5),
    alignItems: 'center',
    width: wp(90),
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: wp(5),
    borderBottomColor: Colors.greyColor,
    alignSelf: 'center',
  },

  languageOptionText: {
    color: Colors.blackColor,
    fontSize: wp(3.5),
    fontWeight: '600',
  },
  languageOptionUnselectedText: {
    color: Colors.blackColor,
    fontSize: wp(3.5),
    fontWeight: '300',
  },
  languageIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(90),
    alignItems: 'center',
  },
});
export default styles;
