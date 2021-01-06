import {
  ReactNode,
  ReactElement,
  ComponentProps,
  isValidElement,
  cloneElement
} from 'react';

import Breadcrumb from '../breadcrumb';

type BreadcrumbElementType = ReactElement<ComponentProps<typeof Breadcrumb>>;

export const isBreadCrumb = (
  child: ReactNode
): child is BreadcrumbElementType =>
  !!isValidElement(child) && child.type === Breadcrumb;

export const intersperse = (items: ReactNode[], delimiter: ReactNode) =>
  items
    .flatMap((item, index) => [
      isValidElement(delimiter)
        ? cloneElement(delimiter, { key: `delimiter-${index}` })
        : delimiter,
      item
    ])
    .slice(1);
