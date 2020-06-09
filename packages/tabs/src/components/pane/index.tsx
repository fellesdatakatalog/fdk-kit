import React, { FC, PropsWithChildren } from 'react';

export interface Props {}

export const Pane: FC<PropsWithChildren<Props>> = ({ children }) => (
  <>{children}</>
);

export default Pane;
