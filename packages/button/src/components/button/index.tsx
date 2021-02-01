import React, { FC, PropsWithChildren, ComponentPropsWithoutRef } from 'react';

import SC from './styled';

export interface Props extends ComponentPropsWithoutRef<'button'> {}

export const Button: FC<PropsWithChildren<Props>> = ({
  children,
  ...props
}) => (
  <SC.Button type='button' {...props}>
    {children}
  </SC.Button>
);

export default Button;
