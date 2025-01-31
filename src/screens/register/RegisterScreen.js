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

export default function RegisterScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <CommonSafeAreaViewComponent>
      <ScrollView contentContainerStyle={CommonStyles.marginVertical5}>
        <View style={styles.container}>
          <View style={styles.registerTitleView}>
            <Text style={styles.appTitle}>Ein Konto erstellen</Text>
            <Text style={styles.loginDescription}>
              Geben Sie Ihre Kontodaten ein
            </Text>
          </View>
          <View
            style={[
              CommonStyles.marginVertical5,
              CommonStyles.alignItemsCenter,
            ]}>
            <CommonInputFieldComponent
              label="E-Mail-Adresse"
              placeholder="name@beispiel.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              vectorIcon={
                <Entypo
                  name="email"
                  size={wp(5)}
                  color={Colors.iconGreyColor}
                />
              }
              required
              validationType="email"
            />
            <CommonInputFieldComponent
              label="Benutzername"
              placeholder="Geben Sie Ihren Namen ein"
              value={name}
              onChangeText={setName}
              vectorIcon={
                <MaterialCommunityIcons
                  name="account-outline"
                  size={wp(5.5)}
                  color={Colors.iconGreyColor}
                />
              }
              required
              validationType="email"
            />
            <CommonInputFieldComponent
              label="Neues Passwort"
              placeholder="Geben Sie ein neues Passwort ein"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
              required
              validationType="password"
            />
            <CommonInputFieldComponent
              label="Bestätigen Sie das neue Passwort"
              placeholder="Geben Sie das neue Passwort zur Bestätigung ein"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              required
              validationType="confirmPassword"
              confirmPassword={newPassword}
            />

            <CommonButtonComponent
              title={'Fortfahren'}
              onPress={() => navigation.navigate('Verification')}
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
              title={'Melden Sie sich mit der Telefonnummer an'}
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
                Nutzungsbedingungen und der Datenschutzrichtlinie von App Name
                zu.
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signupText}>
                  Haben Sie bereits ein Konto? Melden Sie sich an.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </CommonSafeAreaViewComponent>
  );
}
