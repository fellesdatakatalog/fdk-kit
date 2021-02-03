import React, { ComponentPropsWithoutRef, FC } from 'react';

import SC from './styled';

interface MenuItem {
  id: string;
  title: string;
  active: boolean;
}

export interface Props extends ComponentPropsWithoutRef<'aside'> {
  menuItems?: MenuItem[];
  title?: string;
}

export const SideMenu: FC<Props> = ({
  menuItems = [],
  title = '',
  ...props
}) => (
  <SC.SideMenu {...props}>
    <SC.Menu>
      {title && <SC.Title>{title}</SC.Title>}
      <ul>
        {menuItems.map(({ id, title: itemTitle, active }) => (
          <SC.MenuItem key={id} active={active}>
            <SC.Link href={id}>{itemTitle}</SC.Link>
          </SC.MenuItem>
        ))}
      </ul>
    </SC.Menu>
  </SC.SideMenu>
);

export default SideMenu;
