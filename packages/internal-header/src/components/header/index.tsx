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

import SkeBasis from '@skatteetaten/frontend-components/SkeBasis';
import { localization } from '../../localization/localization';

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
   * @default {false}
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

  /* Link to the administration interface of concept catalogs*/
  manageConceptCatalogsUrl?: string;

  /**
   * Determine whether the link to the administration interface should be displayed.
   * Only users with administrator permissions have access to the interface.
   */
  showManageConceptCatalogsUrl?: boolean;
}

export const FdkProfileHeader: FC<PropsWithChildren<Props>> = ({
  homeUrl,
  useDemoLogo,
  username,
  onLogout,
  children,
  manageConceptCatalogsUrl,
  showManageConceptCatalogsUrl
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
        <SC.Link href={homeUrl} aria-label='Gå til hovedsiden'>
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
                {showManageConceptCatalogsUrl && (
                  <>
                    <li>
                      <a href={manageConceptCatalogsUrl}>
                        {localization.manageConceptCatalogs}
                      </a>
                    </li>
                  </>
                )}
                {renderDropdownLinks()}

                <SC.LogoutContainer>
                  <SC.LeaveIcon />
                  <SC.LogoutButton onClick={onLogout}>
                    <span>{localization.logout}</span>
                  </SC.LogoutButton>
                </SC.LogoutContainer>
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
  skeHomeText,
  showManageConceptCatalogsUrl,
  manageConceptCatalogsUrl
}: Props) => (
  <SkeBasis>
    <SC.SkeHeader compact homeUrl={homeUrl} homeText={skeHomeText}>
      <SC.Container>
        {username && (
          <SC.User>
            <SC.UserIcon />
            <SC.UserName>{username}</SC.UserName>
          </SC.User>
        )}
        {onLogout && (
          <>
            {showManageConceptCatalogsUrl && (
              <SC.User>
                <a href={manageConceptCatalogsUrl}>
                  {localization.manageConceptCatalogs}
                </a>
              </SC.User>
            )}
            <SC.LogoutButton onClick={onLogout}>
              <span>{localization.logout}</span>
            </SC.LogoutButton>
          </>
        )}
      </SC.Container>
    </SC.SkeHeader>
  </SkeBasis>
);

export const Header: FC<PropsWithChildren<Props>> = ({
  themeProfile = ThemeProfile.FDK,
  homeUrl = '/',
  useDemoLogo = false,
  username,
  onLogout,
  skeHomeText,
  children,
  showManageConceptCatalogsUrl,
  manageConceptCatalogsUrl
}) =>
  themeProfile === ThemeProfile.SKE ? (
    <SkeProfileHeader
      homeUrl={homeUrl}
      username={username}
      onLogout={onLogout}
      skeHomeText={skeHomeText}
      showManageConceptCatalogsUrl={showManageConceptCatalogsUrl}
      manageConceptCatalogsUrl={manageConceptCatalogsUrl}
    />
  ) : (
    <FdkProfileHeader
      homeUrl={homeUrl}
      useDemoLogo={useDemoLogo}
      username={username}
      onLogout={onLogout}
      showManageConceptCatalogsUrl={showManageConceptCatalogsUrl}
      manageConceptCatalogsUrl={manageConceptCatalogsUrl}
    >
      {children}
    </FdkProfileHeader>
  );

export default Header;
