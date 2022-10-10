import React, { FC, PropsWithChildren } from 'react';

import SvgIcon from '@fellesdatakatalog/icons';
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
  let alertIcon: JSX.Element;
  switch (severity) {
    case Severity.INFO:
      alertIcon = <SvgIcon name='squareInfoStroke' />;
      break;
    case Severity.WARNING:
      alertIcon = <SvgIcon name='circleExclamationPointStroke' />;
      break;
    case Severity.ERROR:
      alertIcon = <SvgIcon name='triangleExclamationPointStroke' />;
      break;
    default:
      alertIcon = <SvgIcon name='circleCheckStroke' />;
  }
  return <SC.IconWrapper $severity={severity}>{alertIcon}</SC.IconWrapper>;
};

export const Alert: FC<PropsWithChildren<Props>> = ({
  children,
  severity,
  ...props
}) => (
  <SC.Alert $severity={severity} {...props}>
    {icon(severity)}
    {children}
  </SC.Alert>
);

export default Alert;
