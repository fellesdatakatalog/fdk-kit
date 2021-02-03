import React, { FC, PropsWithChildren, ComponentPropsWithoutRef } from 'react';

import { Variant } from './enums';

import SC from './styled';

export interface Props extends ComponentPropsWithoutRef<'button'> {
  variant?: Variant;
}

export const Button: FC<PropsWithChildren<Props>> = ({
  children,
  ...props
}) => (
  <SC.Button type='button' {...props}>
    {children}
  </SC.Button>
);

export default Button;
