/*
 *   ANY CHANGES MADE TO THIS FILE WILL BE
 *   OVERWRITTEN IF FORCE (-f) FLAG IS USED
 *
 *   GENERATED BY REACT-SVGS
 *   https://github.com/wllkle/react-svgs.git
 */

// @ts-nocheck

import React, { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { data, SVGTypes, INode } from './types';

interface SVGProps extends DetailedHTMLProps<HTMLAttributes<SVGElement>, any> {
  name?: SVGTypes;
}

export const SVG = (props: SVGProps) => {
  const { name, className, style, ...rest } = props;
  const { attributes, children } = data[name] || {};

  const svgProps = {
    ...(attributes && { ...attributes }),
    ...(className && { className }),
    ...(style && { style }),
    ...(children && { children: renderChildNodes(children) }),
    ...rest
  };

  return <svg {...svgProps} />;
};

const renderChildNodes = (nodes: INode[]): ReactNode => (
  <>
    {nodes.map((node: INode, index: number) => {
      const { name, attributes = {}, type, value, children = [] } = node;
      const Tag = name.toString();

      if (type === 'print') return <Tag key={index}>{value}</Tag>;

      return (
        <Tag key={index} {...attributes}>
          {renderChildNodes(children)}
        </Tag>
      );
    })}
  </>
);

export default SVG;
export { SVGTypesArray } from './types';
export type { SVGTypes };
