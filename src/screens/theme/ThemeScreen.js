import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CommonSafeAreaViewComponent from '../../components/CommonSafeAreaViewComponent';
import CommonHeaderComponent from '../../components/CommonHeaderComponent';
import {setTheme} from '../../redux/theme/ThemeActions';
import I18n from '../../i18n/i18n';

import {wp} from '../../theme/Dimensions';
import {Colors} from '../../theme/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const themes = [
  {code: 'light', name: 'lightMode'},
  {code: 'dark', name: 'darkMode'},
  {code: 'auto', name: 'automatic'},
];

export default function ThemeScreen({navigation}) {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(state => state.theme.theme);

  const handleThemeChange = theme => {
    dispatch(setTheme(theme));
  };

  return (
    <CommonSafeAreaViewComponent>
      <CommonHeaderComponent
        title={I18n.t('theme')}
        onLeftIconPressed={() => navigation.goBack()}
        leftIcon={
          <Ionicons name="arrow-back" size={wp(5)} color={Colors.blackColor} />
        }
      />

      <FlatList
        data={themes}
        keyExtractor={item => item.code}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleThemeChange(item.code)}
            style={styles.languageOptionRow}>
            <View style={styles.languageIcon}>
              <Text
                style={[
                  styles.languageOptionUnselectedText,
                  selectedTheme === item.code && styles.languageOptionText,
                ]}>
                {item.name}
              </Text>
              {selectedTheme === item.code && (
                <Ionicons
                  name="checkmark"
                  size={wp(5)}
                  color={Colors.blackColor}
                />
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </CommonSafeAreaViewComponent>
  );
}
