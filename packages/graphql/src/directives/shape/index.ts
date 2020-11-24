import { SchemaDirectiveVisitor, gql } from 'apollo-server';
import {
  GraphQLField,
  GraphQLInputField,
  GraphQLNonNull,
  GraphQLOutputType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  isNonNullType,
  isScalarType,
  isWrappingType,
  isNamedType
} from 'graphql';

import StringShapeType from './scalars/string';
import NumberShapeType from './scalars/number';

import type {
  Field,
  ConstraintType,
  StringShapeArgs,
  NumberShapeArgs
} from './types';

export class ShapeDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, any>): void {
    this.wrapType(field);
  }

  public visitInputFieldDefinition(field: GraphQLInputField): void {
    this.wrapType(field);
  }

  private wrapType(field: Field): void {
    if (isNonNullType(field.type)) {
      field.type = this.getConstraintType(field.name, field.type.ofType, false);
    } else if (isScalarType(field.type)) {
      field.type = this.getConstraintType(field.name, field.type, true);
    } else {
      throw new Error(`Not a scalar type: ${field.type}`);
    }

    this.addMissingScalarTypesToSchema(field);
  }

  private addMissingScalarTypesToSchema({ type }: Field): void {
    const typeMap = this.schema.getTypeMap();

    if (isWrappingType(type)) {
      type = type.ofType;
    }

    if (isNamedType(type) && !typeMap[type.name]) {
      typeMap[type.name] = type;
    }
  }

  private getConstraintType(
    name: string,
    type: GraphQLOutputType,
    nullable: boolean
  ): ConstraintType {
    if (type === GraphQLString) {
      return nullable
        ? new StringShapeType(name, type, this.args as StringShapeArgs)
        : new GraphQLNonNull(
            new StringShapeType(name, type, this.args as StringShapeArgs)
          );
    }

    if (type === GraphQLInt || type === GraphQLFloat) {
      return nullable
        ? new NumberShapeType(name, type, this.args as NumberShapeArgs)
        : new GraphQLNonNull(
            new NumberShapeType(name, type, this.args as NumberShapeArgs)
          );
    }

    throw new Error(`Not a valid scalar type: ${type}`);
  }
}

export const shapeDirectiveTypeDefs = gql`
  enum ShapeFormat {
    email_shape
  }

  directive @shape(
    minCount: Int
    maxCount: Int
    minExclusive: Int
    minInclusive: Int
    maxExclusive: Int
    maxInclusive: Int
    minLength: Int
    maxLength: Int
    pattern: String
    flags: String
    format: ShapeFormat
    startsWith: String
    endsWith: String
    contains: String
  ) on INPUT_FIELD_DEFINITION | FIELD_DEFINITION
`;
