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
import {useSelector} from 'react-redux';
import I18n from '../../i18n/i18n';

export default function RegisterScreen({navigation}) {
  const selectedLanguage = useSelector(state => state.language.language);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <CommonSafeAreaViewComponent>
      <ScrollView contentContainerStyle={CommonStyles.marginVertical5}>
        <View style={styles.container}>
          <View style={styles.registerTitleView}>
            <Text style={styles.appTitle}>{I18n.t('createAccount')}</Text>
            <Text style={styles.loginDescription}>
              {I18n.t('enterAccountDetails')}
            </Text>
          </View>
          <View
            style={[
              CommonStyles.marginVertical5,
              CommonStyles.alignItemsCenter,
            ]}>
            <CommonInputFieldComponent
              label={I18n.t('email')}
              placeholder={I18n.t('enterEmail')}
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
              label={I18n.t('username')}
              placeholder={I18n.t('enterUsername')}
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
              label={I18n.t('newPassword')}
              placeholder={I18n.t('newPassword')}
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
              required
              validationType="password"
            />
            <CommonInputFieldComponent
              label={I18n.t('confirmNewPassword')}
              placeholder={I18n.t('confirmNewPassword')}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              required
              validationType="confirmPassword"
              confirmPassword={newPassword}
            />

            <CommonButtonComponent
              title={I18n.t('continue')}
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
              title={I18n.t('alreadyHaveAccount')}
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
                {I18n.t('termsAgreement')}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signupText}>
                  {I18n.t('alreadyHaveAccount')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </CommonSafeAreaViewComponent>
  );
}
