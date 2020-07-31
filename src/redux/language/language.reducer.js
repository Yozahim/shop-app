import LanguageActionTypes from "./language.types";

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
    case LanguageActionTypes.CHECK_LANGUAGE_CART:
      return {
        ...state,
        language: state.language
      };
    default:
      return state
  }
};

export default languageReducer