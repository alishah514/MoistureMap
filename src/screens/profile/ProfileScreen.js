import {View, Text, Image} from 'react-native';
import React from 'react';
import CommonSafeAreaViewComponent from '../../components/CommonSafeAreaViewComponent';
import CommonHeaderComponent from '../../components/CommonHeaderComponent';
import {wp} from '../../theme/Dimensions';
import {Colors} from '../../theme/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import CommonStyles from '../../theme/CommonStyles';
import CommonButtonComponent from '../../components/CommonButtonComponent';

export default function ProfileScreen({route}) {
  return (
    <CommonSafeAreaViewComponent>
      <CommonHeaderComponent title={route?.params?.title || 'Profile'} />
      <View style={styles.profileMainContainer}>
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
              <Text>Profil bearbeiten</Text>
            </View>
          </View>
        </View>

        <View style={styles.profileNavigatorContainer}>
          <Text style={styles.profileNavigatorTitleText}>Konto verwalten</Text>
        </View>

        <View style={styles.profileOptionsContainer}>
          {[
            {
              icon: require('../../assets/icons/person.png'),
              label: 'Profil bearbeiten',
            },
            {
              icon: require('../../assets/icons/bell.png'),
              label: 'Benachrichtigung',
            },
            {icon: require('../../assets/icons/headset.png'), label: 'Support'},
            {
              icon: require('../../assets/icons/moon.png'),
              label: 'Dunkelmodus',
              extra: 'Automatisch',
            },
            {
              icon: require('../../assets/icons/language.png'),
              label: 'Sprache',
              extra: 'Deutsch (DE)',
            },
            {
              icon: require('../../assets/icons/info.png'),
              label: 'Über die App',
            },
          ].map((item, index) => (
            <View key={index} style={CommonStyles.paddingHorizontal5}>
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
            </View>
          ))}
        </View>
      </View>

      <View style={styles.profileButtonContainer}>
        <CommonButtonComponent
          title={'Abmelden'}
          backgroundColor={'#FFECEB'}
          titleColor={'#B80900'}
        />
      </View>
    </CommonSafeAreaViewComponent>
  );
}
