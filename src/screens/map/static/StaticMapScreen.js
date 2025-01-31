import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CommonSafeAreaViewComponent from '../../../components/CommonSafeAreaViewComponent';
import TabShifting from '../components/TabShifting';
import styles from '../styles';

export default function StaticMapScreen() {
  const [activeTab, setActiveTab] = useState('map');

  return (
    <CommonSafeAreaViewComponent>
      <Text>StaticMapScreen</Text>
      <View style={styles.buttonContainer}>
        <TabShifting
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabName="map"
          label="Kartenansicht"
          icon={require('../../../assets/icons/map.png')}
          inactiveIcon={require('../../../assets/icons/map-black.png')}
        />
        <TabShifting
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabName="list"
          label="Listenansicht"
          icon={require('../../../assets/icons/menu.png')}
          inactiveIcon={require('../../../assets/icons/menu-black.png')}
        />
      </View>

      <View style={styles.contentContainer}>
        {activeTab === 'map' ? (
          <Text>Map View Content</Text>
        ) : (
          <Text>List View Content</Text>
        )}
      </View>
    </CommonSafeAreaViewComponent>
  );
}
