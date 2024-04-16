import I18n from 'i18n-js';
import RNLocalize from 'react-native-localize';

const locales = RNLocalize.getLocales();

let locale = 'en';
if (Array.isArray(locales)) {
  locale = locales[0].languageCode;
}

switch (locale) {
  case 'fr':
    I18n.translations = require('./fr.js');
    break;
  default:
    I18n.translation = require('./en.js');
}

export default I18n;
