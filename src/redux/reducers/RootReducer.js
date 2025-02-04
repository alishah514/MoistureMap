import {combineReducers} from 'redux';
import LanguageReducer from '../language/LanguageReducer';
import ThemeReducer from '../theme/ThemeReducer';

const RootReducer = combineReducers({
  language: LanguageReducer,
  theme: ThemeReducer,
});

export default RootReducer;
