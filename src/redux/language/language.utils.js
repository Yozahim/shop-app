export const setLanguage = (currentLang, newLang) => {
  console.log('utilsy', currentLang, newLang)
  if (currentLang === newLang) {
    return currentLang
  } else {
    return newLang
  }
}