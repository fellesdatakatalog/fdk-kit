import React, { FC, PropsWithChildren } from 'react';
import { Severity } from './enums';

import SC from './styled';

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

export const Alert: FC<PropsWithChildren<Props>> = ({ children, severity }) => (
  <SC.Alert severity={severity}>
    {icon(severity)}
    {children}
  </SC.Alert>
);

export default Alert;
