import {SET_THEME} from '../actions/actionTypes';

const initialState = {
  language: 'auto',
};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default ThemeReducer;
