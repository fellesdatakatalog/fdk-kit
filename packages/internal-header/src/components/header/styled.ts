import styled from 'styled-components';
import { Colour, theme, Unit } from '@fellesdatakatalog/theme';
import LinkBase from '@fellesdatakatalog/link';
import DropdownMenuBase from '@fellesdatakatalog/dropdown-menu';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';

import LogoFDK from '../../images/fdk-publishing-logo-negative.svg';
import LogoFDKDemo from '../../images/fdk-publishing-logo-negative-demo.svg';
import UserIconBase from '../../images/icon-user-md.svg';
import LeaveIconBase from '../../images/leave-icon.svg'
 

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

const SkeHeader = styled(TopBanner)`
  width: 100%;
  & * {
    font-size: ${theme.fontSize('FS16')};
  }
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
  height: 45px;
  @media (max-width: 900px) {
    & {
      height: calc(35px + (55 - 35) * ((100vw - 320px) / (900 - 320)));
    }
  }
  & > path {
    fill: ${theme.colour(Colour.NEUTRAL, 'N0')};
  }
  & > .st1 {
    fill: ${theme.colour(Colour.BLUE, 'B30')};
  }
`;

const User = styled.div`
  align-items: center;
  display: flex;
  padding-right: 10px;
`;

const UserIcon = styled(UserIconBase)`
  margin-right: 0.5em;
  width: 30px;

  & > path {
    fill: currentColor;
  }
`;

const LeaveIcon = styled(LeaveIconBase)`
  color: #0062ba;
  margin-right: 0.5em;
  height: 20px;
  width: 20px;
  align-self: center;
  margin: 0px;
  padding-right: 5px;

  & > path {
    fill: currentColor;
  }
`

const LogoutContainer = styled.li`
  display: flex;
  align-items: center;
  padding-top: 10px;
`

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
  color: #0062ba;
`;

const HorizontalLineContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 5px;
`

const ButtonLabel = styled.span`
  color: currentColor;
  font-size: ${theme.fontSize('FS16')};
  padding: 0em 0.5em;
`;

const NavigationLinks = styled.ul`
  display: none;
  margin: 0;
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};

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
  list-style-type: none;
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};

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
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
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

  & >  a {
    text-decoration: none !important;
  }
  

  @media (max-width: 900px) {
    & {
      display: flex;
    }
  }
`;

export default {
  Header,
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
  DropdownMenuItem,
  HorizontalLineContainer,
  LeaveIcon,
  LogoutContainer,
};
