import React, {useRef, useState} from 'react';
import {View, Text, Image, FlatList, Dimensions} from 'react-native';
import CommonSafeAreaViewComponent from '../../components/CommonSafeAreaViewComponent';
import styles from './styles';
import CommonStyles from '../../theme/CommonStyles';
import CommonButtonComponent from '../../components/CommonButtonComponent';

const {width} = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Willkommen bei [App Name]',
    text: 'Überwachen Sie die Bodenfeuchtigkeitswerte mühelos mit Echtzeitdaten. Vereinfachen Sie das Feldmanagement mit interaktiven Karten.',
    image: require('../../assets/images/entry01.png'),
  },
  {
    id: '2',
    title: 'Datenansichten erkunden',
    text: 'Wechseln Sie zwischen statischen Punkten und dynamischen Routen. Visualisieren Sie Daten mit Listen, Karten und Polygonen.',
    image: require('../../assets/images/entry02.png'),
  },
  {
    id: '3',
    title: 'Detaillierte Einblicke',
    text: 'Greifen Sie auf detaillierte Einblicke mit interaktiven Karten und Trends zu. Treffen Sie informierte Entscheidungen mit Analysen, die Ihnen zur Verfügung stehen.',
    image: require('../../assets/images/entry03.png'),
  },
];

export default function EntryScreen({navigation}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({index: currentIndex + 1});
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log('Navigate to main app');
      navigation.navigate('Login');
    }
  };

  return (
    <CommonSafeAreaViewComponent>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        onMomentumScrollEnd={event => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        renderItem={({item}) => (
          <View style={styles.slideContainer}>
            <Image source={item.image} style={styles.entryImage} />
            <View style={[CommonStyles.paddingTop10, styles.viewWidth]}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </View>
        )}
      />

      <View style={styles.tabContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.tabIndicator,
              currentIndex === index
                ? styles.activeTabIndicator
                : styles.inactiveTabIndicator,
            ]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <CommonButtonComponent title={'Nächster'} onPress={handleNext} />
      </View>
    </CommonSafeAreaViewComponent>
  );
}
