import I18n from 'react-native-i18n';

import english from '../languages/english.json';
import chinese from '../languages/chinese.json';
import deutsch from '../languages/deutsch.json';
import finnish from '../languages/finnish.json';
import greek from '../languages/greek.json';
import hindi from '../languages/hindi.json';
import irish from '../languages/irish.json';
import italian from '../languages/italian.json';
import japanese from '../languages/japanese.json';
import kazakh from '../languages/kazakh.json';

I18n.translations = {
  english,
  chinese,
  deutsch,
  finnish,
  greek,
  hindi,
  irish,
  italian,
  japanese,
  kazakh,
};

I18n.fallbacks = true;
I18n.defaultLocale = 'english';

export default I18n;
