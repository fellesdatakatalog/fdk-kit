import styled from 'styled-components';
import { Colour, theme, Unit } from '@fellesdatakatalog/theme';
import LinkBase from '@fellesdatakatalog/link';
import DropdownMenuBase from '@fellesdatakatalog/dropdown-menu';
import SkeBasisBase from '@skatteetaten/frontend-components/SkeBasis';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';

import LogoFDK from '../../images/fdk-publishing-logo-negative.svg';
import LogoFDKDemo from '../../images/fdk-registration-demo-logo.svg';
import UserIconBase from '../../images/icon-user-md.svg';

const Header = styled.header`
  background: ${theme.colour(Colour.NEUTRAL, 'N60')};
  border-bottom: 1px solid rgb(230, 230, 230);
  box-shadow: ${theme.colour(Colour.NEUTRAL, 'N40')} 0px 0px 10px -5px;
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  display: flex;
  font-size: ${theme.fontSize('FS16', Unit.PX)};
  justify-content: center;
  padding: ${theme.spacing('S48')} 0;
  height: 74px;
  width: 100%;
  z-index: 1000;
`;

const SkeWrapper = styled.div`
  color: ${theme.colour(Colour.NEUTRAL, 'N70')};
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1000;

  & > div:first-child {
    background-color: #6f2c3f;
    flex: 1 1 0;

    @media (max-width: 960px) {
      display: none;
    }
  }

  & > div:last-child {
    background-color: #ece6e8;
    flex: 1 1 0;
    margin-left: -3px;

    @media (max-width: 960px) {
      display: none;
    }
  }
`;

const SkeBasis = styled(SkeBasisBase)`
  flex-grow: 2;
  max-width: 1140px;
`;

const SkeHeader = styled(TopBanner)`
  max-width: 1140px;
  width: 100%;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  overflow-wrap: break-word;
  padding: 0px 15px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 1140px;
  }
`;

const Link = styled(LinkBase)`
  & > div {
    border: none;
    padding: 0;
  }
`;

const Logo = styled(LogoFDK)`
  height: 45px;
  @media (max-width: 900px) {
    & {
      height: calc(35px + (55 - 35) * ((100vw - 320px) / (900 - 320)));
    }
  }

  & > path {
    fill: ${theme.colour(Colour.NEUTRAL, 'N0')};
  }
`;

const LogoDemo = styled(LogoFDKDemo)`
  width: 145px;
`;

const User = styled.div`
  align-items: center;
  display: flex;
`;

const UserIcon = styled(UserIconBase)`
  margin-right: 0.5em;
  width: 30px;

  & > path {
    fill: currentColor;
  }
`;

const UserName = styled.span`
  max-width: 120px;
  @media (min-width: 900px) {
    & {
      max-width: 155px;
    }
  }
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  white-space: nowrap;
`;

const ButtonLabel = styled.span`
  color: currentColor;
  font-size: ${theme.fontSize('FS16')};
  padding: 0em 0.5em;
`;

const NavigationLinks = styled.ul`
  display: none;
  margin: 0;

  @media (min-width: 900px) {
    & {
      display: flex;
    }
  }

  & > li:nth-of-type(n + 2) {
    margin-left: ${theme.spacing('S16')};
  }
`;

const NavigationLink = styled.li`
  color: currentColor;
  list-style-type: none;

  & > * div {
    border: none;
    padding: 0;

    &:hover {
      border-bottom: 1px solid currentColor;
    }

    & > svg {
      margin-left: 0.3rem;
    }
  }
`;

const DropdownMenu = styled(DropdownMenuBase)`
  display: flex;
`;

const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  background: none;
  border: none;
  outline: none;
  color: currentColor;
  cursor: pointer;

  &:after {
    content: '\\25BC';
    font-size: 10px;
    margin-top: 1px;
    margin-left: ${theme.spacing('S6')};
  }
`;

const Menu = styled.ul`
  border-radius: 5px;
  background: ${theme.colour(Colour.NEUTRAL, 'N0')};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  color: ${theme.colour(Colour.NEUTRAL, 'N70')};
  list-style: none;
  padding: ${theme.spacing('S10', Unit.EM)};
  overflow: hidden;

  & > li > a {
    display: block;
    margin-top: ${theme.spacing('S10')};
    white-space: pre;

    &:hover {
      background: ${theme.colour(Colour.NEUTRAL, 'N0')};
    }

    & > div {
      border-bottom: none;
    }
  }
`;

const DropdownMenuItem = styled.li`
  display: none;
  list-style-type: none;

  @media (max-width: 900px) {
    & {
      display: flex;
    }
  }
`;

export default {
  Header,
  SkeWrapper,
  SkeBasis,
  SkeHeader,
  Container,
  Link,
  Logo,
  LogoDemo,
  User,
  UserIcon,
  UserName,
  LogoutButton,
  ButtonLabel,
  NavigationLinks,
  NavigationLink,
  DropdownMenu,
  MenuButton,
  Menu,
  DropdownMenuItem
};
