import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';
import { en } from './en';
import { nb } from './nb';
import { nn } from './nn';

interface LocaleStrings extends LocalizedStringsMethods {
  [key: string]: any;
}

export const localization: LocaleStrings = new LocalizedStrings({
  en: { ...en },
  nb: { ...nb },
  nn: { ...nn }
});

localization.setLanguage('nb');
