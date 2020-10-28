import React, { FC } from 'react';
import { ThemeProfile } from '@fellesdatakatalog/theme';

import SC from './styled';

export interface Props {
  /**
   * Which theme profile to use when rendering Footer
   * @type {ThemeProfile}
   * @default ThemeProfile.FDK
   */
  themeProfile?: ThemeProfile;
  /**
   * Use demo logo when ThemeProfile.FDK
   * @type {boolean}
   * * @default {false}
   */
  useDemoLogo?: boolean;
  /**
   * Username to display in header
   * @type {string}
   */
  username?: string;
  /**
   * Logout function
   * @type {() => void;}
   */
  onLogout?: () => void;
}

const FdkProfileHeader = ({ useDemoLogo, username, onLogout }: Props) => (
  <SC.Header>
    <SC.Container>
      <SC.LogoWrapper>
        <SC.Link href='/'>
          {useDemoLogo ? <SC.LogoDemo /> : <SC.Logo />}
        </SC.Link>
      </SC.LogoWrapper>
      {username && (
        <SC.User>
          <SC.UserIcon />
          <SC.UserName>{username}</SC.UserName>
        </SC.User>
      )}
      {onLogout && (
        <SC.LogoutButton onClick={onLogout}>
          <SC.ButtonLabel>Logg ut</SC.ButtonLabel>
        </SC.LogoutButton>
      )}
    </SC.Container>
  </SC.Header>
);

const SkeProfileHeader = ({ username, onLogout }: Props) => (
  <SC.SkeWrapper>
    <div />
    <SC.SkeBasis>
      <SC.SkeHeader compact homeUrl='/'>
        <SC.Container>
          {username && (
            <SC.User>
              <SC.UserIcon />
              <SC.UserName>{username}</SC.UserName>
            </SC.User>
          )}
          {onLogout && (
            <SC.LogoutButton onClick={onLogout}>
              <SC.ButtonLabel>Logg ut</SC.ButtonLabel>
            </SC.LogoutButton>
          )}
        </SC.Container>
      </SC.SkeHeader>
    </SC.SkeBasis>
    <div />
  </SC.SkeWrapper>
);

export const Header: FC<Props> = ({
  themeProfile = ThemeProfile.FDK,
  useDemoLogo = false,
  username,
  onLogout
}) =>
  themeProfile === ThemeProfile.SKE ? (
    <SkeProfileHeader username={username} onLogout={onLogout} />
  ) : (
    <FdkProfileHeader
      useDemoLogo={useDemoLogo}
      username={username}
      onLogout={onLogout}
    />
  );

export default Header;