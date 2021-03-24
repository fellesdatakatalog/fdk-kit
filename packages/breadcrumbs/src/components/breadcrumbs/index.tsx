import React, {
  FC,
  PropsWithChildren,
  ComponentType,
  ReactNode,
  Children
} from 'react';

import SC from './styled';

import { isBreadCrumb, intersperse } from './utils';

export interface Props {
  /**
   * Breadcrumbs separator
   * @type {ReactNode}
   * @default "/"
   */
  separator?: ReactNode;
  /**
   * Component to render (use nav as base element)
   * @default nav
   */
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

export const Breadcrumbs: FC<PropsWithChildren<Props>> = ({
  separator = '/',
  as,
  children,
  ...props
}) => {
  const breadcrumbs =
    Children.map(children, child =>
      isBreadCrumb(child) ? child : null
    )?.filter(Boolean) ?? [];

  return (
    <SC.Breadcrumbs as={as} {...props}>
      <ol>
        {intersperse(breadcrumbs, <SC.Separator>{separator}</SC.Separator>)}
      </ol>
    </SC.Breadcrumbs>
  );
};

export default Breadcrumbs;
