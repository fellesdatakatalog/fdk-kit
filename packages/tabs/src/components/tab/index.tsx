import React, { FC, PropsWithChildren } from 'react';

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

export const Tab: FC<PropsWithChildren<Props>> = ({ children }) => (
  <>{children}</>
);

export default Tab;
