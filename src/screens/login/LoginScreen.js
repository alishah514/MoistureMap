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

export default function LoginScreen({navigation}) {
  const selectedLanguage = useSelector(state => state.language.language);

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
          <Text style={styles.loginTitle}>{I18n.t('login')}</Text>
          <Text style={styles.loginDescription}>{I18n.t('welcomeBack')}</Text>
        </View>
        <View style={[CommonStyles.paddingTop5, CommonStyles.alignItemsCenter]}>
          <CommonInputFieldComponent
            label={I18n.t('email')}
            placeholder={I18n.t('enterEmail')}
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
            label={I18n.t('password')}
            placeholder="********"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            required
            validationType="password"
          />
          <CommonButtonComponent
            title={I18n.t('login')}
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
            title={I18n.t('loginWithPhone')}
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
              <Text style={styles.signupText}>{I18n.t('dontHaveAccount')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </CommonSafeAreaViewComponent>
  );
}
