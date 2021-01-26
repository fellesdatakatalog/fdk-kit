import React, { FC, PropsWithChildren } from 'react';

import SC from './styled';

import { Severity } from './enums';

export interface Props {
  /**
   * The severity of the alert. This defines the color and icon used.
   * @type Severity
   * @default Severity.SUCCESS
   */
  severity?: Severity;
}

const icon = (severity?: Severity) => {
  switch (severity) {
    case Severity.INFO:
      return <SC.InfoIcon />;
    case Severity.WARNING:
      return <SC.WarningIcon />;
    case Severity.ERROR:
      return <SC.ErrorIcon />;
    default:
      return <SC.CheckIcon />;
  }
};

export const Alert: FC<PropsWithChildren<Props>> = ({
  children,
  severity,
  ...props
}) => (
  <SC.Alert severity={severity} {...props}>
    {icon(severity)}
    {children}
  </SC.Alert>
);

export default Alert;
