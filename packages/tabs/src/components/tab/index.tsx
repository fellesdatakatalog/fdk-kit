import React, { FC, PropsWithChildren, ComponentType } from 'react';

import SC from './styled';

export interface Props {
  /**
   * A reference to tab ID
   * @type {string}
   */
  for: string;
  /**
   * An indication whether tab is active
   * @type {boolean}
   * @default false
   */
  active?: boolean;
  /**
   * Component to render
   * @default div
   */
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

export const Tab: FC<PropsWithChildren<Props>> = ({
  as,
  active,
  children,
  ...props
}) => (
  <SC.Tab
    as={as}
    active={active}
    className={active ? 'active' : undefined}
    {...props}
  >
    <SC.Contents>{children}</SC.Contents>
  </SC.Tab>
);

export default Tab;
