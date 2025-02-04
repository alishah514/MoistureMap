import React from 'react';
import {View, Text, Image} from 'react-native';
import CommonSafeAreaViewComponent from '../../components/CommonSafeAreaViewComponent';
import styles from './styles';
import CommonStyles from '../../theme/CommonStyles';
import CommonButtonComponent from '../../components/CommonButtonComponent';
import {Colors} from '../../theme/Colors';
import I18n from '../../i18n/i18n'; // import i18n for translations

export default function LocationScreen({navigation}) {
  return (
    <CommonSafeAreaViewComponent>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/location.png')}
          style={styles.entryImage}
        />
        <View style={[CommonStyles.paddingTop15, styles.viewWidth]}>
          <Text style={styles.title}>{I18n.t('enableLocationServices')}</Text>
          <Text style={styles.text}>{I18n.t('allowLocationAccess')}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <CommonButtonComponent
          title={I18n.t('allowLocationAccessBtn')}
          onPress={() => navigation.navigate('MainMap')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CommonButtonComponent
          backgroundColor={Colors.greyButtonColor}
          titleColor={Colors.blackColor}
          title={I18n.t('skipNow')}
          onPress={() => navigation.navigate('NextScreen')}
        />
      </View>
    </CommonSafeAreaViewComponent>
  );
}
