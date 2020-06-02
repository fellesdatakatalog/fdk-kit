import React, {
  FC,
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactNode,
  ComponentType
} from 'react';

import SC from './styled';

export interface Props extends ComponentPropsWithoutRef<'a'> {
  /**
   * An indication whether link points to an external resource
   * @type {boolean}
   * @default false
   */
  external?: boolean;
  /**
   * Icon placed before link text
   * @type {ReactNode}
   */
  icon?: ReactNode;
  /**
   * Component to render
   * @default a
   */
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

const Link: FC<PropsWithChildren<Props>> = ({
  external,
  icon,
  children,
  as,
  ...props
}) => (
  <SC.Link as={as} target={external ? '_blank' : undefined} {...props}>
    {icon && <SC.Icon>{icon}</SC.Icon>}
    <SC.Underlined>
      {children}
      {external && <SC.ExternalLinkIcon />}
    </SC.Underlined>
  </SC.Link>
);

export default Link;
