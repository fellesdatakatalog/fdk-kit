import type {
  GraphQLField,
  GraphQLInputField,
  GraphQLNonNull,
  GraphQLScalarType
} from 'graphql';

import { ShapeFormat } from './enums';

export type Field = GraphQLField<any, any> | GraphQLInputField;
export type ConstraintType = GraphQLNonNull<any> | GraphQLScalarType;

export interface StringShapeArgs {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  flags?: string;
  format?: ShapeFormat;
  startsWith?: string;
  endsWith?: string;
  contains?: string;
}

export interface NumberShapeArgs {
  minExclusive?: number;
  minInclusive?: number;
  maxExclusive?: number;
  maxInclusive?: number;
}
