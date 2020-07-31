import { createSelector } from 'reselect'

export const selectLanguage = state => state.language

export const selectLanguageHidden = createSelector(
  [selectLanguage],
  language => language.hidden
)

export const selectLang = createSelector(
  [selectLanguage],
  lang => lang.language
)
