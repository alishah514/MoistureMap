import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CommonSafeAreaViewComponent from '../../components/CommonSafeAreaViewComponent';
import styles from './styles';
import {Colors} from '../../theme/Colors';
import {wp} from '../../theme/Dimensions';
import CommonInputFieldComponent from '../../components/CommonInputFieldComponent';
import CommonStyles from '../../theme/CommonStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CommonButtonComponent from '../../components/CommonButtonComponent';
import DividerWithText from '../../components/DividerWithTextComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <CommonSafeAreaViewComponent>
      <View style={styles.container}>
        <View style={styles.appTitleView}>
          <Image
            source={require('../../assets/icons/dropIcon.png')}
            style={styles.dropImage}
          />
          <Text style={styles.appTitle}>AppName</Text>
        </View>
        <View style={styles.formView}>
          <Text style={styles.loginTitle}>Einloggen</Text>
          <Text style={styles.loginDescription}>
            Willkommen zurück! Bitte loggen Sie sich mit Ihren Zugangsdaten ein
          </Text>
        </View>
        <View style={[CommonStyles.paddingTop5, CommonStyles.alignItemsCenter]}>
          <CommonInputFieldComponent
            label="E-Mail-Adresse"
            placeholder="name@beispiel.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            vectorIcon={
              <Entypo name="email" size={wp(5)} color={Colors.iconGreyColor} />
            }
            required
            validationType="email"
          />
          <CommonInputFieldComponent
            label="Passwort"
            placeholder="********"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            required
            validationType="password"
          />
          <CommonButtonComponent
            title={'Einloggen'}
            onPress={() => console.log('abxc')}
            style={{marginTop: wp(3)}}
            vectorIcon={
              <Ionicons
                name="arrow-forward"
                size={wp(5)}
                color={Colors.whiteColor}
                style={styles.rightArrowStyle}
              />
            }
            iconPosition="right"
          />
          <DividerWithText />
          <CommonButtonComponent
            title={'Mit Telefon einloggen'}
            onPress={() => console.log('Login')}
            backgroundColor={Colors.greyButtonColor}
            titleColor={Colors.blackColor}
            vectorIcon={
              <Ionicons
                name="call-outline"
                size={wp(5)}
                color={Colors.blackColor}
                style={CommonStyles.marginRight3}
              />
            }
            iconPosition="left"
          />
          <View style={styles.bottomDescriptionView}>
            <Text style={styles.bottomDescriptionText}>
              Typografie Durch die Fortsetzung stimmen Sie den
              Nutzungsbedingungen und der Datenschutzrichtlinie von App Name zu.
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.signupText}>
                Haben Sie noch kein Konto? Jetzt registrieren!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </CommonSafeAreaViewComponent>
  );
}
