import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import CommonSafeAreaViewComponent from '../../components/CommonSafeAreaViewComponent';
import I18n from '../../i18n/i18n';
import {setLanguage} from '../../redux/language/LanguageActions';
import styles from './styles';
import CommonHeaderComponent from '../../components/CommonHeaderComponent';
import {wp} from '../../theme/Dimensions';
import {Colors} from '../../theme/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const languages = [
  {code: 'english', name: 'English'},
  {code: 'chinese', name: 'Chinese'},
  {code: 'deutsch', name: 'German'},
  {code: 'finnish', name: 'Finnish'},
  {code: 'greek', name: 'Greek'},
  {code: 'hindi', name: 'Hindi'},
  {code: 'irish', name: 'Irish'},
  {code: 'italian', name: 'Italian'},
  {code: 'japanese', name: 'Japanese'},
  {code: 'kazakh', name: 'Kazakh'},
];

export default function LanguageScreen({navigation}) {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(state => state.language.language);

  const handleLanguageChange = lang => {
    dispatch(setLanguage(lang));
  };

  return (
    <CommonSafeAreaViewComponent>
      <CommonHeaderComponent
        title={I18n.t('language')}
        onLeftIconPressed={() => navigation.goBack()}
        leftIcon={
          <Ionicons name="arrow-back" size={wp(5)} color={Colors.blackColor} />
        }
      />

      <FlatList
        data={languages}
        keyExtractor={item => item.code}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleLanguageChange(item.code)}
            style={styles.languageOptionRow}>
            <View style={styles.languageIcon}>
              <Text
                style={[
                  styles.languageOptionUnselectedText,
                  selectedLanguage === item.code && styles.languageOptionText,
                ]}>
                {item.name}
              </Text>
              {selectedLanguage === item.code && (
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
