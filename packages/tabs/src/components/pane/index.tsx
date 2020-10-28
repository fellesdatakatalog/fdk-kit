import React, { FC, PropsWithChildren } from 'react';

export interface Props {
  /**
   * Tab ID
   * @type {string}
   */
  id: string;
}

export const Pane: FC<PropsWithChildren<Props>> = ({ children }) => (
  <>{children}</>
);

export default Pane;
