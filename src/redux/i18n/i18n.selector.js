import { createSelector } from 'reselect'

const selectI18n = state => state.i18n

export const selectCurrentLocale = createSelector(
  [selectI18n],
  i18n => i18n.locale
);
