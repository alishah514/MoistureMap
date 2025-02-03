import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CommonSafeAreaViewComponent from '../../../components/CommonSafeAreaViewComponent';
import TabShifting from '../components/TabShifting';
import styles from '../styles';
import {useSelector} from 'react-redux';
import I18n from '../../../i18n/i18n';

export default function StaticMapScreen() {
  const selectedLanguage = useSelector(state => state.language.language);

  const [activeTab, setActiveTab] = useState('map');

  return (
    <CommonSafeAreaViewComponent>
      <Text>StaticMapScreen</Text>
      <View style={styles.buttonContainer}>
        <TabShifting
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabName="map"
          label={I18n.t('mapView')}
          icon={require('../../../assets/icons/map.png')}
          inactiveIcon={require('../../../assets/icons/map-black.png')}
        />
        <TabShifting
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabName="list"
          label={I18n.t('listView')}
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
