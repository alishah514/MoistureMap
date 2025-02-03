import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import CommonStyles from '../theme/CommonStyles';
import {wp} from '../theme/Dimensions';
import {Colors} from '../theme/Colors';

const CommonHeaderComponent = props => {
  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength
      ? title.substring(0, maxLength - 3) + '...'
      : title;
  };

  const renderOnlyTitle = props => (
    <View
      style={{alignItems: 'flex-start', width: '100%', paddingLeft: wp(10)}}>
      <Text style={CommonStyles.headerTitleText}>
        {truncateTitle(props?.title, 13)}
      </Text>
    </View>
  );
  const renderTitleWithLeftIcon = props => (
    <View style={CommonStyles.header80View}>
      <TouchableOpacity
        onPress={props?.onLeftIconPressed && props?.onLeftIconPressed}>
        {props?.leftIcon && props?.leftIcon}
      </TouchableOpacity>
      <View
        style={{alignItems: 'flex-start', width: '100%', paddingLeft: wp(3)}}>
        <Text style={CommonStyles.headerTitleText}>
          {truncateTitle(props?.title, 20)}
        </Text>
      </View>
    </View>
  );

  const renderTitleWithRightIcon = props => (
    <View style={CommonStyles.headerFullView}>
      <View style={CommonStyles.headerTitleCenter}>
        <Text style={CommonStyles.headerTitleText}>
          {truncateTitle(props?.title, 13)}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 20,
        }}
        onPress={props?.onRightIconPressed && props?.onRightIconPressed}>
        {props?.rightIcon && props?.rightIcon}
      </TouchableOpacity>
    </View>
  );

  const renderTitleWithTwoIcons = props => (
    <View style={CommonStyles.header80View}>
      <TouchableOpacity
        onPress={props?.onLeftIconPressed && props?.onLeftIconPressed}>
        {props?.leftIcon && props?.leftIcon}
      </TouchableOpacity>
      <View style={CommonStyles.headerTitleCenter}>
        <Text style={CommonStyles.headerTitleText}>
          {truncateTitle(props?.title, 13)}
        </Text>
      </View>
      <TouchableOpacity
        onPress={props?.onRightIconPressed && props?.onRightIconPressed}>
        {props?.rightIcon && props?.rightIcon}
      </TouchableOpacity>
    </View>
  );

  const renderTitleWithAllIcons = props => (
    <View style={CommonStyles.headerFullView}>
      <TouchableOpacity
        onPress={props?.onLeftIconPressed && props?.onLeftIconPressed}>
        {props?.leftIcon && props?.leftIcon}
      </TouchableOpacity>
      <View style={CommonStyles.headerTitleContainer}>
        <Text style={CommonStyles.headerTitleText}>
          {truncateTitle(props?.title, 13)}
        </Text>
      </View>
      <View style={CommonStyles.headerRight2Views}>
        <TouchableOpacity
          style={CommonStyles.headerPaddingRight10}
          onPress={props?.onThirdIconPressed && props?.onThirdIconPressed}>
          {props?.thirdIcon && props?.thirdIcon}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props?.onRightIconPressed && props?.onRightIconPressed}>
          {props?.rightIcon && props?.rightIcon}
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.whiteColor,
        borderBottomWidth: 1,
        borderBottomColor: Colors.greyColor,
      }}>
      <View style={CommonStyles.headerMain}>
        {props?.leftIcon &&
        props?.title &&
        !props?.rightIcon &&
        !props?.thirdIcon
          ? renderTitleWithLeftIcon(props)
          : null}

        {props?.rightIcon &&
        props?.title &&
        !props?.leftIcon &&
        !props?.thirdIcon
          ? renderTitleWithRightIcon(props)
          : null}

        {!props?.leftIcon &&
        !props?.rightIcon &&
        !props?.thirdIcon &&
        props?.title
          ? renderOnlyTitle(props)
          : null}

        {props?.leftIcon &&
        props?.title &&
        props?.rightIcon &&
        !props?.thirdIcon
          ? renderTitleWithTwoIcons(props)
          : null}

        {props?.leftIcon && props?.title && props?.rightIcon && props?.thirdIcon
          ? renderTitleWithAllIcons(props)
          : null}
      </View>
    </SafeAreaView>
  );
};

export default CommonHeaderComponent;
