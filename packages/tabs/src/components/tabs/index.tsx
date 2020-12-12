import React, { FC, PropsWithChildren, Children, useState } from 'react';
import { Alignment } from '@fellesdatakatalog/theme';

import SC from './styled';

import { isTab, isPane, createTab, createPane, TabClickHandler } from './utils';

export interface Props {
  /**
   * Tabs alignment
   * @type {Alignment}
   * @default Alignment.CENTRE
   */
  tabsAlignment?: Alignment;
}

export const Tabs: FC<PropsWithChildren<Props>> = ({
  tabsAlignment,
  children,
  ...props
}) => {
  const tabsChildren = Children.map(children, child =>
    isTab(child) ? child : null
  )?.filter(Boolean);

  const [activeTab, setActiveTab] = useState<string | undefined>(
    tabsChildren?.find(({ props: { active } }) => active)?.props.for ??
      tabsChildren?.[0].props.for
  );

  const paneChild = Children.map(children, child =>
    isPane(child) && child.props.id === activeTab ? child : null
  )?.shift();

  const onTabClick: TabClickHandler = (key: string) => () => setActiveTab(key);

  return (
    <SC.Tabs {...props}>
      <SC.Bar alignment={tabsAlignment ?? Alignment.CENTRE}>
        {tabsChildren?.map(createTab(onTabClick, activeTab))}
      </SC.Bar>
      {paneChild && createPane(paneChild)}
    </SC.Tabs>
  );
};

export default Tabs;
