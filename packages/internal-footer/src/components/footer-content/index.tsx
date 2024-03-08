import React, { FC } from 'react';
import Link from '@fellesdatakatalog/link';

import EmailIcon from '../../images/email.svg';

import SC from './styled';

const FooterContent: FC = () => (
  <SC.Content>
    <SC.Column>
      Digitaliseringsdirektoratet forvalter Felles datakatalog.
    </SC.Column>
    <SC.Column>
      <li>
        <Link href='https://data.norge.no/publishing/terms-of-use'>
          Bruksvilkår
        </Link>
      </li>
      <li>
        <Link href='https://www.digdir.no/om-oss/personvernerklaering/706'>
          Personvernerklæring
        </Link>
      </li>
      <li>
        <Link href='https://www.digdir.no/om-oss/informasjonskapsler/707'>
          Informasjonskapsler
        </Link>
      </li>
      <li>
        <Link href='https://uustatus.no/nb/erklaringer/publisert/8020b962-b706-4cdf-ab8b-cdb5f480a696'>
          Tilgjengelighetserklæring
        </Link>
      </li>
    </SC.Column>
    <SC.Column>
      <Link href='mailto:fellesdatakatalog@digdir.no' icon={<EmailIcon />}>
        fellesdatakatalog@digdir.no
      </Link>
    </SC.Column>
  </SC.Content>
);

export default FooterContent;
