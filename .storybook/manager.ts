import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  sidebar: {
    showRoots: false
  },
  theme: create({
    base: 'light',
    brandTitle: 'FDK UI Kit'
  })
});
