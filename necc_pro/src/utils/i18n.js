/**
 *  语言国际化的设置
 */
let T = {
  locale: null,
  locales: {},
  langCode: ['zh_CN', 'en']
}

T.registerLocale = function (locales) {
  T.locales = locales;
}

T.setLocale = function (code) {
  T.locale = code;
}

T.setLocaleByIndex = function(index) {
  T.setLocale(T.langCode[index]);
}
      

T.getLanguage = function(data) {
  const locale = T.locale
  const locales = T.locales
  if (locale && locales[locale] && locales[locale][data]) {
    data = locales[locale][data];
  }

  return data
}

export default T