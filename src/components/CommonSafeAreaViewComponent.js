import React from 'react';
import {SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native';
import CommonStyles from '../theme/CommonStyles';
import {Colors} from '../theme/Colors';

export default function CommonSafeAreaViewComponent({children}) {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={CommonStyles.container}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
