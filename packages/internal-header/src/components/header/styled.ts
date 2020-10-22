import styled from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';
import LinkBase from '@fellesdatakatalog/link';
import SkeBasisBase from '@skatteetaten/frontend-components/SkeBasis';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';

import LogoFDK from '../../images/fdk-registration-logo.svg';
import LogoFDKDemo from '../../images/fdk-registration-demo-logo.svg';
import UserIconBase from '../../images/icon-user-md.svg';

const Header = styled.header`
  background: ${theme.colour(Colour.NEUTRAL, 'N0')};
  border-bottom: 1px solid rgb(230, 230, 230);
  box-shadow: ${theme.colour(Colour.NEUTRAL, 'N40')} 0px 0px 10px -5px;
  color: ${theme.colour(Colour.NEUTRAL, 'N60')};
  display: flex;
  justify-content: center;
  padding: ${theme.spacing('S48')} 0;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 74px;
  width: 100%;
  z-index: 1000;
`;

const SkeWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
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

const LogoWrapper = styled.div`
  flex-grow: 1;
`;

const Link = styled(LinkBase)`
  & > div {
    border: none;
    padding: 0;
  }
`;

const Logo = styled(LogoFDK)`
  width: 145px;
`;

const LogoDemo = styled(LogoFDKDemo)`
  width: 145px;
`;

const User = styled.div`
  align-items: center;
  display: flex;
  margin-right: 1em;
`;

const UserIcon = styled(UserIconBase)`
  margin-right: 0.5em;
  width: 30px;
`;

const UserName = styled.span`
  white-space: nowrap;
`;

const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 15px;
  white-space: nowrap;
`;

const ButtonLabel = styled.span`
  font-size: ${theme.fontSize('FS16')};
  padding: 0em 0.5em;
`;

export default {
  Header,
  SkeWrapper,
  SkeBasis,
  SkeHeader,
  Container,
  LogoWrapper,
  Link,
  Logo,
  LogoDemo,
  User,
  UserIcon,
  UserName,
  LogoutButton,
  ButtonLabel
};
