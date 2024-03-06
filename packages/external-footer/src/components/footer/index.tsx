import React, { FC } from 'react';
import Link from '@fellesdatakatalog/link';

import EmailIcon from '../../images/email.svg';
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
          <li>
            <Link href='/search-all'>{localization.searchInAllCatalogs}</Link>
          </li>
          <li>
            <Link href='/datasets'>{localization.searchInDatasets}</Link>
          </li>
          <li>
            <Link href='/apis'>{localization.searchInApis}</Link>
          </li>
          <li>
            <Link href='/concepts'>{localization.searchInConcepts}</Link>
          </li>
          <li>
            <Link href='/informationmodels'>
              {localization.searchInInformationModels}
            </Link>
          </li>
        </SC.Column>
        <SC.Column>
          <SC.ColumnHeading>{localization.about}</SC.ColumnHeading>
          <li>
            <Link href='/guidance'>{localization.guidance}</Link>
          </li>
          <li>
            <Link href='/reports'>{localization.reports}</Link>
          </li>
          <li>
            <Link href='/organizations'>{localization.organizations}</Link>
          </li>
          <li>
            <Link href='/about'>{localization.about}</Link>
          </li>
          <li>
            <Link href='https://uustatus.no/nb/erklaringer/publisert/8020b962-b706-4cdf-ab8b-cdb5f480a696'>
              {localization.accessibility}
            </Link>
          </li>
          <li>
            <Link href='/about-registration'>
              {localization.aboutRegistration}
            </Link>
          </li>
        </SC.Column>
        <SC.Column>
          <SC.ColumnHeading>{localization.aboutTheWebsite}</SC.ColumnHeading>
          <li>
            <p>{localization.directorateOfDigitizationManages}</p>
          </li>
          <li>
            <Link
              href='https://www.digdir.no/om-oss/personvernerklaering/706'
              external
            >
              {localization.privacyStatement}
            </Link>
          </li>
          <li>
            <Link
              href='https://www.digdir.no/om-oss/informasjonskapsler/707'
              external
            >
              {localization.cookies}
            </Link>
          </li>
        </SC.Column>
        <SC.Column>
          <SC.ColumnHeading>{localization.contact}</SC.ColumnHeading>
          <li>
            <p>{localization.contactEmail}</p>
          </li>
          <li>
            <Link
              href='mailto:fellesdatakatalog@digdir.no'
              icon={<EmailIcon />}
            >
              fellesdatakatalog@digdir.no
            </Link>
          </li>
        </SC.Column>
      </SC.Content>
    </SC.Footer>
  );
};

export default Footer;
