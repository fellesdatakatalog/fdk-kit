import React, { FC } from 'react';
import { ThemeProfile } from '@fellesdatakatalog/theme';

import SkeBasis from '@skatteetaten/frontend-components/SkeBasis';

import FooterContent from '../footer-content';

import SC from './styled';

export interface Props {
  /**
   * Which theme profile to use when rendering Footer
   * @type {ThemeProfile}
   * @default ThemeProfile.FDK
   */
  themeProfile?: ThemeProfile;
}

function FdkProfileFooter() {
  return (
    <SC.Footer>
      <SC.Illustration />
      <FooterContent />
    </SC.Footer>
  );
}

function SkeProfileFooter() {
  return (
    <SkeBasis>
      <SC.SkeFooter>
        <FooterContent />
      </SC.SkeFooter>
    </SkeBasis>
  );
}

export const Footer: FC<Props> = ({ themeProfile = ThemeProfile.FDK }) =>
  themeProfile === ThemeProfile.SKE ? (
    <SkeProfileFooter />
  ) : (
    <FdkProfileFooter />
  );

export default Footer;
