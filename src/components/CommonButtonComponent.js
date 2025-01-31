import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  StyleSheet,
} from 'react-native';
import CommonStyles from '../theme/CommonStyles';
import {Colors} from '../theme/Colors';
import {wp} from '../theme/Dimensions';

export default function CommonButtonComponent({
  title,
  titleColor,
  backgroundColor,
  style,
  disabled = false,
  onPress,
  outlined = false,
  half = false,
  icon, // Image icon (require)
  vectorIcon, // Vector Icon Component
  iconPosition = 'left', // 'left' | 'right'
}) {
  const buttonStyles = [
    half ? CommonStyles.commonHalfButton : CommonStyles.commonButton,
    Platform.OS === 'ios' && CommonStyles.shadow,
    {
      backgroundColor: outlined
        ? 'transparent'
        : disabled
        ? Colors.greyColor
        : backgroundColor || Colors.blueColor,
      borderColor: outlined ? titleColor || Colors.blueColor : 'transparent',
      borderWidth: outlined ? 1 : 0,
      opacity: disabled ? 0.5 : 1,
    },
    style,
  ];

  const textStyles = [
    {
      fontWeight: '500',
      fontSize: wp('4'),
      maxWidth: wp(65),
      textAlign: 'center',
    },
    {
      color: outlined
        ? titleColor || Colors.blueColor
        : titleColor || Colors.whiteColor,
    },
  ];

  return (
    <TouchableOpacity
      disabled={disabled}
      style={buttonStyles}
      onPress={!disabled ? onPress : null}>
      <View style={styles.content}>
        {iconPosition === 'left' && (
          <>
            {vectorIcon ? (
              vectorIcon
            ) : icon ? (
              <Image source={icon} style={styles.icon} />
            ) : null}
          </>
        )}

        <Text style={textStyles} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>

        {iconPosition === 'right' && (
          <>
            {vectorIcon ? (
              vectorIcon
            ) : icon ? (
              <Image source={icon} style={styles.icon} />
            ) : null}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginHorizontal: 5,
  },
});
