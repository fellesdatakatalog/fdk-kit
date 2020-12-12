import React, { FC, PropsWithChildren, ComponentType } from 'react';

import SC from './styled';

export interface Props {
  /**
   * Tab ID
   * @type {string}
   */
  id: string;
  /**
   * Component to render
   * @default div
   */
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

export const Pane: FC<PropsWithChildren<Props>> = ({
  as,
  children,
  ...props
}) => (
  <SC.Pane as={as} {...props}>
    {children}
  </SC.Pane>
);

export default Pane;
