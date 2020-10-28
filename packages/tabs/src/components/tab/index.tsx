import React, { FC, PropsWithChildren } from 'react';

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
}

export const Tab: FC<PropsWithChildren<Props>> = ({ children, ...props }) => (
  <SC.Tab {...props}>{children}</SC.Tab>
);

export default Tab;
