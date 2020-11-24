import { GraphQLScalarType } from 'graphql';
import { ValidationError } from 'apollo-server';

import type { NumberShapeArgs } from '../../types';

class NumberShapeType extends GraphQLScalarType {
  constructor(field: string, type: GraphQLScalarType, args: NumberShapeArgs) {
    super({
      name: 'NumberShape',
      serialize: value => {
        value = type.serialize(value);

        this.validate(field, value, args);

        return value;
      },
      parseValue: value => type.parseValue(value),
      parseLiteral: ast => type.parseLiteral(ast, {})
    });
  }

  private validate(field: string, value: number, args: NumberShapeArgs): void {
    if (args.minExclusive !== undefined && value <= args.minExclusive) {
      throw new ValidationError(
        `${field} value must be greater than ${args.minExclusive}`
      );
    }

    if (args.minInclusive !== undefined && value < args.minInclusive) {
      throw new ValidationError(
        `${field} must be at least ${args.minInclusive}`
      );
    }

    if (args.maxExclusive !== undefined && value >= args.maxExclusive) {
      throw new ValidationError(
        `${field} must be less than ${args.maxExclusive}`
      );
    }

    if (args.maxInclusive !== undefined && value > args.maxInclusive) {
      throw new ValidationError(
        `${field} must be no greater than ${args.maxInclusive}`
      );
    }
  }
}

export default NumberShapeType;
