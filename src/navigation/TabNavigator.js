import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, Text} from 'react-native';
import AnalyticScreen from '../screens/analytics/AnalyticScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import StaticMapScreen from '../screens/map/static/StaticMapScreen';
import DynamicMapScreen from '../screens/map/dynamic/DynamicMapScreen';
import {wp} from '../theme/Dimensions';
import {Colors} from '../theme/Colors';
import CommonStyles from '../theme/CommonStyles';

const Tab = createBottomTabNavigator();

const staticMapIcon = require('../assets/icons/staticMap.png');
const dynamicMapIcon = require('../assets/icons/dynamicMap.png');
const analyticsIcon = require('../assets/icons/stars.png');
const profileIcon = require('../assets/icons/user.png');

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconSource;

          if (route.name === 'StaticMap') {
            iconSource = staticMapIcon;
          } else if (route.name === 'DynamicMap') {
            iconSource = dynamicMapIcon;
          } else if (route.name === 'Analytics') {
            iconSource = analyticsIcon;
          } else if (route.name === 'Profile') {
            iconSource = profileIcon;
          }

          return (
            <View style={CommonStyles.alignItemsCenter}>
              <Image
                source={iconSource}
                style={{
                  width: wp(5),
                  height: wp(5),
                  tintColor: focused
                    ? Colors.blueColor
                    : Colors.inActiveTabIconColor,
                }}
              />
            </View>
          );
        },
        tabBarLabel: ({focused}) => (
          <Text
            style={{
              fontSize: wp(3),
              color: focused ? Colors.blueColor : Colors.inActiveTabIconColor,
            }}>
            {route.name === 'StaticMap'
              ? 'Statische'
              : route.name === 'DynamicMap'
              ? 'Dynamische'
              : route.name === 'Analytics'
              ? 'Analytik'
              : 'Konto'}
          </Text>
        ),
        tabBarStyle: {
          height: wp(20),
          paddingBottom: wp(1),
        },
      })}>
      <Tab.Screen
        name="StaticMap"
        component={StaticMapScreen}
        initialParams={{title: 'Statische'}}
      />
      <Tab.Screen
        name="DynamicMap"
        component={DynamicMapScreen}
        initialParams={{title: 'Dynamische'}}
      />
      <Tab.Screen
        name="Analytics"
        component={AnalyticScreen}
        initialParams={{title: 'Analytik'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{title: 'Konto'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
