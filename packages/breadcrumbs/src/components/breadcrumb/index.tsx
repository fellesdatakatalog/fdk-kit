import React, { FC, PropsWithChildren, ComponentType } from 'react';

import SC from './styled';

export interface Props {
  /**
   * An indicator whether current breadcrumb is active
   * @type {boolean}
   * @default false
   */
  active?: boolean;
  /**
   * Component to render (use li as base element)
   * @default li
   */
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

export const Breadcrumb: FC<PropsWithChildren<Props>> = ({
  active,
  as,
  children,
  ...props
}) => (
  <SC.Breadcrumb active={active} as={as} {...props}>
    {children}
  </SC.Breadcrumb>
);

export default Breadcrumb;
