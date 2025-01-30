import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {wp} from '../theme/Dimensions';
import {Colors} from '../theme/Colors';

const DividerWithText = ({text = 'ODER'}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: wp(5),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.greyColor,
  },
  text: {
    marginHorizontal: wp(2),
    fontSize: wp(4),
    fontWeight: '500',
    color: Colors.grey,
  },
});

export default DividerWithText;
