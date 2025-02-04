import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CommonSafeAreaViewComponent from '../../components/CommonSafeAreaViewComponent';
import CommonHeaderComponent from '../../components/CommonHeaderComponent';
import {wp} from '../../theme/Dimensions';
import {Colors} from '../../theme/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import CommonStyles from '../../theme/CommonStyles';
import CommonButtonComponent from '../../components/CommonButtonComponent';
import {useSelector} from 'react-redux';
import {languages} from '../../constants/language';
import I18n from '../../i18n/i18n';

export default function ProfileScreen({navigation}) {
  const selectedLanguage = useSelector(state => state.language.language);
  const selectedLanguageName =
    languages.find(lang => lang.code === selectedLanguage)?.name ||
    'Deutsch (DE)';

  return (
    <CommonSafeAreaViewComponent>
      <CommonHeaderComponent title={I18n.t('account') || 'Profile'} />
      <View style={CommonStyles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../../assets/icons/profile-pic.png')}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileTitle}>Johann Schmidt</Text>
            <Text style={styles.profileSubtitle}>meineemail@domain.de</Text>
          </View>

          <View style={styles.profileBox}>
            <View style={styles.profileEditIconContainer}>
              <Text style={CommonStyles.textAlignCenter}>
                {I18n.t('editProfile')}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.profileNavigatorContainer}>
          <Text style={styles.profileNavigatorTitleText}>
            {I18n.t('manageAccount')}
          </Text>
        </View>

        <View style={styles.profileOptionsContainer}>
          {[
            {
              icon: require('../../assets/icons/person.png'),
              label: I18n.t('editProfile'),
              onPress: () => navigation.navigate('Edit Profile'),
            },
            {
              icon: require('../../assets/icons/bell.png'),
              label: I18n.t('notifications'),
              onPress: () => console.log('Notifications'),
            },
            {
              icon: require('../../assets/icons/headset.png'),
              label: I18n.t('support'),
              onPress: () => console.log('Support'),
            },
            {
              icon: require('../../assets/icons/moon.png'),
              label: I18n.t('darkMode'),
              extra: 'Automatisch',
              onPress: () => console.log('Dark Mode'),
            },
            {
              icon: require('../../assets/icons/language.png'),
              label: I18n.t('language'),
              extra: selectedLanguageName,
              onPress: () => navigation.navigate('Language'),
            },
            {
              icon: require('../../assets/icons/info.png'),
              label: I18n.t('aboutApp'),
              onPress: () => console.log('About Us'),
            },
          ].map((item, index) => (
            <TouchableOpacity
              onPress={item.onPress ? item.onPress : () => {}}
              key={index}
              style={CommonStyles.paddingHorizontal5}>
              <View style={styles.profileNavigatorOptionRow}>
                <View style={styles.profileNavigatorOptionLeft}>
                  <Image
                    source={item.icon}
                    style={styles.profileNavigatorIcon}
                  />
                  <Text style={styles.profileNavigatorOptionText}>
                    {item.label}
                  </Text>
                </View>
                <View style={[CommonStyles.flexRow]}>
                  {item.extra && (
                    <Text style={styles.profileExtraText}>{item.extra}</Text>
                  )}
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={wp(4)}
                    color={Colors.descriptionGrey}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.profileButtonContainer}>
        <CommonButtonComponent
          title={I18n.t('logout')}
          backgroundColor={'#FFECEB'}
          titleColor={'#B80900'}
        />
      </View>
    </CommonSafeAreaViewComponent>
  );
}
