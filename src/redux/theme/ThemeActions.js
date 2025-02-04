import {SET_THEME} from '../actions/actionTypes';

export const setTheme = theme => ({
  type: SET_THEME,
  payload: theme,
});
