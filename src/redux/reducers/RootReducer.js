import {combineReducers} from 'redux';
import LanguageReducer from '../language/LanguageReducer';

const RootReducer = combineReducers({
  language: LanguageReducer,
});

export default RootReducer;
