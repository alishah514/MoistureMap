import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import CommonHeaderComponent from '../../components/CommonHeaderComponent';
import I18n from '../../i18n/i18n';
import {useSelector} from 'react-redux';
import CommonStyles from '../../theme/CommonStyles';
import styles from './styles';
import CommonSafeAreaViewComponent from '../../components/CommonSafeAreaViewComponent';
import {wp} from '../../theme/Dimensions';
import {Colors} from '../../theme/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonInputFieldComponent from '../../components/CommonInputFieldComponent';
import CommonButtonComponent from '../../components/CommonButtonComponent';
import ImagePicker from 'react-native-image-crop-picker';

export default function EditProfileScreen({navigation}) {
  const selectedLanguage = useSelector(state => state.language.language);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePick = () => {
    Alert.alert('Select Image Source', 'Choose where to get the image from', [
      {
        text: 'Gallery',
        onPress: () => openGallery(),
      },
      {
        text: 'Camera',
        onPress: () => openCamera(),
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  const openGallery = () => {
    ImagePicker.openPicker({
      cropping: true,
    }).then(image => {
      console.log(image);
      setSelectedImage(image.path);
    });
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
    }).then(image => {
      console.log(image);
      setSelectedImage(image.path);
    });
  };

  return (
    <CommonSafeAreaViewComponent>
      <CommonHeaderComponent
        title={I18n.t('editProfile')}
        onLeftIconPressed={() => navigation.goBack()}
        leftIcon={
          <Ionicons name="arrow-back" size={wp(5)} color={Colors.blackColor} />
        }
      />
      <View style={CommonStyles.container}>
        <View style={[styles.profileContainer2]}>
          <View style={styles.profileImageContainer}>
            {selectedImage ? (
              <Image
                source={{uri: selectedImage}}
                style={styles.profileImage}
              />
            ) : (
              <Image
                source={require('../../assets/icons/profile-pic.png')}
                style={styles.profileImage}
              />
            )}
          </View>

          <View style={styles.profileTextContainer2}>
            <Text style={styles.profileTitle}>Johann Schmidt</Text>
            <Text style={styles.profileSubtitle}>meineemail@domain.de</Text>
          </View>

          <TouchableOpacity style={[styles.penBox]} onPress={handleImagePick}>
            <Image
              source={require('../../assets/icons/pencil.png')}
              style={styles.penIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputFieldsMainView}>
          <CommonInputFieldComponent
            label={I18n.t('firstName')}
            placeholder={I18n.t('enterFirstName')}
            value={firstName}
            onChangeText={setFirstName}
            required
          />
          <CommonInputFieldComponent
            label={I18n.t('lastName')}
            placeholder={I18n.t('enterLastName')}
            value={lastName}
            onChangeText={setLastName}
            required
          />
          <CommonInputFieldComponent
            label={I18n.t('companyName')}
            placeholder={I18n.t('enterCompanyName')}
            value={companyName}
            onChangeText={setCompanyName}
            required
          />
          <CommonInputFieldComponent
            label={I18n.t('email')}
            placeholder={I18n.t('enterEmail')}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            required
            validationType="email"
          />
          <CommonInputFieldComponent
            label={I18n.t('telephone')}
            placeholder={I18n.t('enterTelephone')}
            value={telephone}
            onChangeText={setTelephone}
            required
          />
        </View>
      </View>
      <View style={styles.profileButtonContainer}>
        <CommonButtonComponent
          title={I18n.t('update')}
          backgroundColor={Colors.blueColor}
        />
      </View>
    </CommonSafeAreaViewComponent>
  );
}
