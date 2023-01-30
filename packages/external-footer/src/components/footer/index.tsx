import React, { FC } from 'react';
import Link from '@fellesdatakatalog/link';

import EmailIcon from '../../images/email.svg';
import TwitterIcon from '../../images/twitter.svg';

import SC from './styled';
import { localization } from '../../utils/localization/localization';

export interface Props {
  /**
   * Language
   * @type {string}
   * @default 'nb'
   */
  language?: string;
}

export const Footer: FC<Props> = ({ language = 'nb' }) => {
  localization.setLanguage(language);

  return (
    <SC.Footer>
      <SC.Illustration />
      <SC.Content>
        <SC.Column>
          <SC.ColumnHeading>{localization.searchInCatalogs}</SC.ColumnHeading>
          <Link href='/search-all'>{localization.searchInAllCatalogs}</Link>
          <Link href='/datasets'>{localization.searchInDatasets}</Link>
          <Link href='/apis'>{localization.searchInApis}</Link>
          <Link href='/concepts'>{localization.searchInConcepts}</Link>
          <Link href='/informationmodels'>
            {localization.searchInInformationModels}
          </Link>
        </SC.Column>
        <SC.Column>
          <SC.ColumnHeading>{localization.about}</SC.ColumnHeading>
          <Link href='/guidance'>{localization.guidance}</Link>
          <Link href='/reports'>{localization.reports}</Link>
          <Link href='/organizations'>{localization.organizations}</Link>
          <Link href='/about'>{localization.about}</Link>
          <Link href='https://uustatus.no/nb/erklaringer/publisert/8020b962-b706-4cdf-ab8b-cdb5f480a696'>{localization.accessibility}</Link>
          <Link href='/about-registration'>
            {localization.aboutRegistration}
          </Link>
          <Link href='/news-archive'>{localization.news}</Link>
        </SC.Column>
        <SC.Column>
          <SC.ColumnHeading>{localization.aboutTheWebsite}</SC.ColumnHeading>
          <p>{localization.directorateOfDigitizationManages}</p>
          <Link
            href='https://www.digdir.no/om-oss/personvernerklaering/706'
            external
          >
            {localization.privacyStatement}
          </Link>
          <Link
            href='https://www.digdir.no/om-oss/informasjonskapsler/707'
            external
          >
            {localization.cookies}
          </Link>
        </SC.Column>
        <SC.Column>
          <SC.ColumnHeading>{localization.contact}</SC.ColumnHeading>
          <Link href='mailto:fellesdatakatalog@digdir.no' icon={<EmailIcon />}>
            fellesdatakatalog@digdir.no
          </Link>
          <Link
            href='https://twitter.com/datakatalogen?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3Adatakatalogen&ref_url=https%3A%2F%2Ffellesdatakatalog.digdir.no%2F'
            icon={<TwitterIcon />}
            external
          >
            {localization.nationalDataCatalogOnTwitter}
          </Link>
        </SC.Column>
      </SC.Content>
    </SC.Footer>
  );
};

export default Footer;
