import I18n from 'react-native-i18n';
import english from '../languages/english.json';

I18n.translations = {
  english,
  //   ja,
};

I18n.fallbacks = true;
I18n.defaultLocale = 'english';

export default I18n;
