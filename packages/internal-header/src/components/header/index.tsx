import React, {
  Children,
  FC,
  isValidElement,
  PropsWithChildren,
  useState
} from 'react';
import { ThemeProfile } from '@fellesdatakatalog/theme';
import Link from '@fellesdatakatalog/link';
import { Menu, Trigger } from '@fellesdatakatalog/dropdown-menu';

import SC from './styled';

export interface Props {
  /**
   * Which theme profile to use when rendering Footer
   * @type {ThemeProfile}
   * @default ThemeProfile.FDK
   */
  themeProfile?: ThemeProfile;
  /**
   * Url on logo
   * @type {string}
   */
  homeUrl?: string;
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
  /**
   * Name to display in header for Skatteetaten theme
   * @type {string}
   */
  skeHomeText?: string;
}

export const FdkProfileHeader: FC<PropsWithChildren<Props>> = ({
  homeUrl,
  useDemoLogo,
  username,
  onLogout,
  children
}) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  const openDropdownMenu = () => setIsDropdownMenuOpen(true);
  const closeDropdownMenu = () => setIsDropdownMenuOpen(false);

  const renderNavigationLinks = () =>
    Children.map(children, child =>
      isValidElement(child) && child.type === Link ? (
        <SC.NavigationLink>{child}</SC.NavigationLink>
      ) : null
    );

  const renderDropdownLinks = () =>
    Children.map(children, child =>
      isValidElement(child) && child.type === Link ? (
        <SC.DropdownMenuItem>{child}</SC.DropdownMenuItem>
      ) : null
    );

  return (
    <SC.Header>
      <SC.Container>
        <SC.Link href={homeUrl}>
          {useDemoLogo ? <SC.LogoDemo /> : <SC.Logo />}
        </SC.Link>
        {Children.count(renderNavigationLinks()) > 0 && (
          <SC.NavigationLinks>{renderNavigationLinks()}</SC.NavigationLinks>
        )}

        <SC.DropdownMenu
          isOpen={isDropdownMenuOpen}
          onClose={closeDropdownMenu}
        >
          <Trigger>
            <SC.MenuButton onClick={openDropdownMenu}>
              {username && (
                <SC.User>
                  <SC.UserIcon />
                  <SC.UserName>{username}</SC.UserName>
                </SC.User>
              )}
            </SC.MenuButton>
          </Trigger>
          {onLogout && (
            <Menu>
              <SC.Menu>
                <li>
                  <SC.LogoutButton onClick={onLogout}>
                    <span>Logg ut</span>
                  </SC.LogoutButton>
                </li>
                {renderDropdownLinks()}
              </SC.Menu>
            </Menu>
          )}
        </SC.DropdownMenu>
      </SC.Container>
    </SC.Header>
  );
};

const SkeProfileHeader = ({
  homeUrl,
  username,
  onLogout,
  skeHomeText
}: Props) => (
  <SC.SkeWrapper>
    <div />
    <SC.SkeBasis>
      <SC.SkeHeader compact homeUrl={homeUrl} homeText={skeHomeText}>
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

export const Header: FC<PropsWithChildren<Props>> = ({
  themeProfile = ThemeProfile.FDK,
  homeUrl = '/',
  useDemoLogo = false,
  username,
  onLogout,
  skeHomeText,
  children
}) =>
  themeProfile === ThemeProfile.SKE ? (
    <SkeProfileHeader
      homeUrl={homeUrl}
      username={username}
      onLogout={onLogout}
      skeHomeText={skeHomeText}
    />
  ) : (
    <FdkProfileHeader
      homeUrl={homeUrl}
      useDemoLogo={useDemoLogo}
      username={username}
      onLogout={onLogout}
    >
      {children}
    </FdkProfileHeader>
  );

export default Header;
