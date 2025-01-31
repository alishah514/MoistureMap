import React from 'react';
import {View, Text, Image} from 'react-native';
import CommonSafeAreaViewComponent from '../../components/CommonSafeAreaViewComponent';
import styles from './styles';
import CommonStyles from '../../theme/CommonStyles';
import CommonButtonComponent from '../../components/CommonButtonComponent';
import {Colors} from '../../theme/Colors';

export default function LocationScreen({navigation}) {
  return (
    <CommonSafeAreaViewComponent>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/location.png')}
          style={styles.entryImage}
        />
        <View style={[CommonStyles.paddingTop15, styles.viewWidth]}>
          <Text style={styles.title}>Standortdienste aktivieren</Text>
          <Text style={styles.text}>
            Erlauben Sie den Zugriff auf Ihren Standort, um personalisierte
            Empfehlungen und Echtzeit-Updates zu nahegelegenen Zielen zu
            erhalten.
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <CommonButtonComponent
          title={'Standortzugriff erlauben'}
          onPress={() => navigation.navigate('MainMap')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CommonButtonComponent
          backgroundColor={Colors.greyButtonColor}
          titleColor={Colors.blackColor}
          title={'Jetzt überspringen'}
          onPress={() => navigation.navigate('NextScreen')}
        />
      </View>
    </CommonSafeAreaViewComponent>
  );
}
