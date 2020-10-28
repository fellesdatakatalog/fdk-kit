import React, {
  FC,
  PropsWithChildren,
  Children,
  isValidElement,
  useState
} from 'react';
import { Alignment } from '@fellesdatakatalog/theme';

import Tab from '../tab';
import Pane from '../pane';

import SC from './styled';

export interface Props {
  /**
   * An indication whether tab is active
   * @type {Alignment}
   * @default Alignment.CENTRE
   */
  tabsAlignment?: Alignment;
}

const Tabs: FC<PropsWithChildren<Props>> = ({
  tabsAlignment,
  children,
  ...props
}) => {
  const tabsChildren = Children.map(children, child =>
    isValidElement(child) && child.type === Tab ? child : null
  )?.filter(Boolean);

  const [activeTab, setActiveTab] = useState<string | undefined>(
    tabsChildren?.find(({ props: { active } }) => active)?.props.for ??
      tabsChildren?.[0].props.for
  );

  const paneChild = Children.map(children, child =>
    isValidElement(child) && child.type === Pane && child.props.id === activeTab
      ? child
      : null
  )?.shift();

  return (
    <SC.Tabs {...props}>
      <SC.Bar alignment={tabsAlignment ?? Alignment.CENTRE}>
        {tabsChildren?.map(child => (
          <SC.Tab
            key={child.props.for}
            active={child.props.for === activeTab}
            onClick={() => setActiveTab(child.props.for)}
          >
            <SC.TabChild>{child}</SC.TabChild>
          </SC.Tab>
        ))}
      </SC.Bar>
      <SC.Contents>{paneChild}</SC.Contents>
    </SC.Tabs>
  );
};

export default Tabs;
