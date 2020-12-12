import styled from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';

const Tab = styled.div`
  padding: ${theme.spacing('S6')} ${theme.spacing('S12')};

  &.active,
  &:before,
  &:after {
    border-color: ${theme.colour(Colour.VIOLET, 'V30')};
  }

  &:not(.active) {
    color: ${theme.colour(Colour.VIOLET, 'V50')};
  }
`;

const Pane = styled.div`
  padding: ${theme.spacing('S12')};
`;

const EntityTab = styled(Tab)`
  font-weight: ${theme.fontWeight('FW700')};

  &:not(.active) {
    color: inherit;
  }
`;

const EntityPane = styled(Pane)`
  & > h1 {
    font-size: ${theme.fontSize('FS20')};
  }

  & > p {
    margin-top: ${theme.spacing('S12')};
    line-height: 1.5;
  }
`;

const DatasetsTab = styled(EntityTab)`
  background: ${theme.colour(Colour.BLUE, 'B30')};

  &.active,
  &:before,
  &:after {
    border-color: ${theme.colour(Colour.BLUE, 'B50')};
  }
`;

const DataServicesTab = styled(EntityTab)`
  background: ${theme.colour(Colour.BROWN, 'B30')};

  &.active,
  &:before,
  &:after {
    border-color: ${theme.colour(Colour.BROWN, 'B50')};
  }
`;

const ConceptsTab = styled(EntityTab)`
  background: ${theme.colour(Colour.CYAN, 'C30')};

  &.active,
  &:before,
  &:after {
    border-color: ${theme.colour(Colour.CYAN, 'C50')};
  }
`;

const InformationModelsTab = styled(EntityTab)`
  background: ${theme.colour(Colour.VIOLET, 'V30')};

  &.active,
  &:before,
  &:after {
    border-color: ${theme.colour(Colour.VIOLET, 'V50')};
  }
`;

const DatasetsPane = styled(EntityPane)`
  background: ${theme.colour(Colour.BLUE, 'B30')};
`;

const DataServicesPane = styled(EntityPane)`
  background: ${theme.colour(Colour.BROWN, 'B30')};
`;

const ConceptsPane = styled(EntityPane)`
  background: ${theme.colour(Colour.CYAN, 'C30')};
`;

const InformationModelsPane = styled(EntityPane)`
  background: ${theme.colour(Colour.VIOLET, 'V30')};
`;

export default {
  Tab,
  Pane,
  DatasetsTab,
  DataServicesTab,
  ConceptsTab,
  InformationModelsTab,
  DatasetsPane,
  DataServicesPane,
  ConceptsPane,
  InformationModelsPane
};
