import React, { FC } from 'react';

import FooterContent from '../footer-content';

import SC from './styled';

const Footer: FC = () => (
  <SC.Footer>
    <SC.Illustration />
    <FooterContent />
  </SC.Footer>
);

export default Footer;
