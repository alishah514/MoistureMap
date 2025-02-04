import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CommonSafeAreaViewComponent from '../../components/CommonSafeAreaViewComponent';
import styles from './styles';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {wp} from '../../theme/Dimensions';
import CommonStyles from '../../theme/CommonStyles';
import CommonButtonComponent from '../../components/CommonButtonComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../theme/Colors';
import {useSelector} from 'react-redux';
import I18n from '../../i18n/i18n';

const CELL_COUNT = 5;

export default function VerificationScreen({navigation}) {
  const selectedLanguage = useSelector(state => state.language.language);

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const isButtonDisabled = value.length < CELL_COUNT;

  return (
    <CommonSafeAreaViewComponent>
      <View style={styles.container}>
        <View style={styles.twoSeparateViews}>
          <View style={styles.registerTitleView}>
            <Text style={styles.appTitle}>{I18n.t('verifyEmail')}</Text>
            <Text style={[styles.loginDescription, CommonStyles.paddingTop3]}>
              {I18n.t('enterConfirmationCode')}
            </Text>
            <View style={styles.codeFieldView}>
              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <View
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    <Text style={styles.cellText}>
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  </View>
                )}
              />
            </View>
            <Text style={[styles.expiryText, styles.loginDescription]}>
              {I18n.t('codeExpiresIn')}
            </Text>

            <CommonButtonComponent
              title={I18n.t('verifyCode')}
              onPress={() => navigation.navigate('Location')}
              style={[
                CommonStyles.marginVertical5,
                {
                  width: wp(85),
                  opacity: isButtonDisabled ? 0.5 : 1,
                  backgroundColor: Colors.blueColor,
                },
              ]}
              disabled={isButtonDisabled}
            />

            <TouchableOpacity style={styles.miniButtonView}>
              <Ionicons
                name="arrow-back"
                size={wp(5)}
                color={Colors.blackColor}
                style={CommonStyles.marginRight3}
              />
              <Text style={styles.miniButtonText}>{I18n.t('backToLogin')}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.registerTitleView2}>
            <Text
              style={[styles.loginDescription, CommonStyles.textAlignCenter]}>
              {I18n.t('agreeTermsPrivacy')}
            </Text>
            <Text style={styles.miniText}>{I18n.t('alreadyHaveAccount')}</Text>
          </View>
        </View>
      </View>
    </CommonSafeAreaViewComponent>
  );
}
