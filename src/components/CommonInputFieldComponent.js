import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';
import CommonStyles from '../theme/CommonStyles';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../theme/Colors';
import {wp} from '../theme/Dimensions';

const CommonInputFieldComponent = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  image,
  vectorIcon,
  required = false,
  validationType, // 'email', 'password', 'custom'
  customValidation, // Custom validation function
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);
  const [error, setError] = useState('');

  const validateInput = text => {
    let errorMsg = '';

    if (required && !text.trim()) {
      errorMsg = 'Dieses Feld ist erforderlich';
    } else if (validationType === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(text)) {
        errorMsg = 'Ungültige E-Mail-Adresse';
      }
    } else if (validationType === 'password' && text.length < 6) {
      errorMsg = 'Passwort muss mindestens 6 Zeichen enthalten';
    } else if (validationType === 'custom' && customValidation) {
      errorMsg = customValidation(text);
    }

    setError(errorMsg);
  };

  return (
    <View style={CommonStyles.inputContainer}>
      {label && (
        <Text style={CommonStyles.inputLabel}>
          {label}{' '}
          {required && <Text style={CommonStyles.inputRequired}>*</Text>}
        </Text>
      )}
      <View
        style={[
          CommonStyles.inputWrapper,
          isFocused && CommonStyles.inputFocused,
        ]}>
        <TextInput
          style={CommonStyles.inputField}
          placeholder={placeholder}
          placeholderTextColor={Colors.placeholderTextColor}
          value={value}
          onChangeText={text => {
            onChangeText(text);
            validateInput(text);
          }}
          keyboardType={keyboardType}
          secureTextEntry={!isPasswordVisible}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {vectorIcon ? (
          vectorIcon
        ) : image ? (
          <Image source={image} style={CommonStyles.inputIcon} />
        ) : null}

        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Feather
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={wp(5)}
              color={Colors.iconGreyColor}
            />
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={CommonStyles.inputErrorText}>{error}</Text> : null}
    </View>
  );
};

export default CommonInputFieldComponent;
