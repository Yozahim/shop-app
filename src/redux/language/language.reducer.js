import LanguageActionTypes from "./language.types";
// import { setLanguage } from './language.utils'

const INITIAL_STATE = {
  hidden: true,
  language: true,
};

const languageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LanguageActionTypes.TOGGLE_LANGUAGE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    case LanguageActionTypes.SET_LANGUAGE_EN:
      return {
        ...state,
        // language: setLanguage(state.language, action.payload)
        language: true
      };
    case LanguageActionTypes.SET_LANGUAGE_PL:
      return {
        ...state,
        language: false
      };
    default:
      return state
  }
};

export default languageReducer