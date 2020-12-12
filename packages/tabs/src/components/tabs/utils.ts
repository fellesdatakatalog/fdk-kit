import {
  ReactNode,
  ReactElement,
  ComponentProps,
  isValidElement,
  createElement
} from 'react';

import Tab from '../tab';
import Pane from '../pane';

type TabElementType = ReactElement<ComponentProps<typeof Tab>>;
type PaneElementType = ReactElement<ComponentProps<typeof Pane>>;

export type TabClickHandler = (key: string) => () => void;

export const isTab = (child: ReactNode): child is TabElementType =>
  !!isValidElement(child) && child.type === Tab;

export const isPane = (child: ReactNode): child is PaneElementType =>
  !!isValidElement(child) && child.type === Pane;

export const createTab = (clickHandler: TabClickHandler, tab?: string) => ({
  type,
  props: { for: key, as, active, children }
}: TabElementType) =>
  createElement(
    type,
    {
      key,
      as,
      active: active || key === tab,
      onClick: clickHandler(key)
    },
    children
  );

export const createPane = ({
  type,
  props: { as, children }
}: PaneElementType) => createElement(type, { as }, children);
