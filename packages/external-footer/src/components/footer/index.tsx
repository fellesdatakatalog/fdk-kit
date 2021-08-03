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
        <h6>Søk i kataloger</h6>
        <Link href='/search-all'>Søk i alle kataloger</Link>
        <Link href='/datasets'>Søk i datasett</Link>
        <Link href='/apis'>Søk i datatjenester</Link>
        <Link href='/concepts'>Søk i begreper</Link>
        <Link href='/informationmodels'>Søk i informasjonsmodeller</Link>
      </SC.Column>
      <SC.Column>
        <h6>Om Felles datakatalog</h6>
        <Link href='/guidance'>
          Veiledere og standarder
        </Link>
        <Link href='/reports'>Rapporter</Link>
        <Link href='/organizations'>Virksomheter</Link>
        <Link href='/about'>Om Felles datakatalog</Link>
        <Link href='/about-registration'>
          Hjelp til å registrere
        </Link>
        <Link href='/news-archive'>Aktuelt</Link>
      </SC.Column>
      <SC.Column>
        <h6>Om nettstedet</h6>
        <p>Digitaliseringsdirektoratet forvalter Felles datakatalog.</p>
        <Link href='https://www.digdir.no/om-oss/personvernerklaering/706'>
          Personvernerklæring
        </Link>
        <Link href='https://www.digdir.no/om-oss/informasjonskapsler/707'>
          Informasjonskapsler
        </Link>
      </SC.Column>
      <SC.Column>
        <h6>Kontakt</h6>
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
