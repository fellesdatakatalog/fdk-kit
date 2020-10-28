import React, { FC, PropsWithChildren } from 'react';

import SC from './styled';

export interface Props {
  /**
   * Tab ID
   * @type {string}
   */
  id: string;
}

export const Pane: FC<PropsWithChildren<Props>> = ({ children, ...props }) => (
  <SC.Pane {...props}>{children}</SC.Pane>
);

export default Pane;
