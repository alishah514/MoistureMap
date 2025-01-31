import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {Colors} from '../../../theme/Colors';
import styles from '../styles';

const TabShifting = ({
  activeTab,
  setActiveTab,
  tabName,
  label,
  icon,
  inactiveIcon,
}) => {
  const isActive = activeTab === tabName;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isActive
          ? {backgroundColor: Colors.blueColor}
          : {backgroundColor: Colors.greyButtonColor},
      ]}
      onPress={() => setActiveTab(tabName)}>
      <Image
        source={isActive ? icon : inactiveIcon}
        style={[styles.icon, isActive ? {} : styles.listIcon]}
      />
      <Text
        style={{
          color: isActive ? Colors.whiteColor : Colors.blackColor,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabShifting;
