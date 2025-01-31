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

  buttonContainer: {
    width: wp(80),
    marginBottom: wp(5),
    alignSelf: 'center',
  },
});

export default styles;
