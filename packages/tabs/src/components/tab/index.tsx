import React, { FC, PropsWithChildren } from 'react';

export interface Props {
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
