import React, { FC, PropsWithChildren, ReactNode, Children } from 'react';

import SC from './styled';

import { isBreadCrumb, intersperse } from './utils';

export interface Props {
  /**
   * Breadcrumbs separator
   * @type {ReactNode}
   * @default "/"
   */
  separator?: ReactNode;
}

export const Breadcrumbs: FC<PropsWithChildren<Props>> = ({
  separator = '/',
  children,
  ...props
}) => {
  const breadcrumbs =
    Children.map(children, child =>
      isBreadCrumb(child) ? child : null
    )?.filter(Boolean) ?? [];

  return (
    <SC.Breadcrumbs {...props}>
      <ol>
        {intersperse(breadcrumbs, <SC.Separator>{separator}</SC.Separator>)}
      </ol>
    </SC.Breadcrumbs>
  );
};

export default Breadcrumbs;
