import React, { FC } from 'react';
import Link from '@fellesdatakatalog/link';

import EmailIcon from '../../images/email.svg';
import TwitterIcon from '../../images/twitter.svg';

import SC from './styled';

const Footer: FC = () => (
  <SC.Footer>
    <SC.Illustration />
    <SC.Content>
      <SC.Column>
        Digitaliseringsdirektoratet forvalter Felles datakatalog.
      </SC.Column>
      <SC.Column>
        <Link
          href='https://www.digdir.no/om-oss/personvernerklaering/706'
          external
        >
          Personvernerklæring
        </Link>
        <Link
          href='https://www.digdir.no/om-oss/informasjonskapsler/707'
          external
        >
          Informasjonskapsler
        </Link>
      </SC.Column>
      <SC.Column>
        <Link href='mailto:fellesdatakatalog@digdir.no' icon={<EmailIcon />}>
          fellesdatakatalog@digdir.no
        </Link>
        <Link
          href='https://twitter.com/datakatalogen?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3Adatakatalogen&ref_url=https%3A%2F%2Ffellesdatakatalog.digdir.no%2F'
          icon={<TwitterIcon />}
          external
        >
          Felles datakatalog på Twitter
        </Link>
      </SC.Column>
    </SC.Content>
  </SC.Footer>
);

export default Footer;
