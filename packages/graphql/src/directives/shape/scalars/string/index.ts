import { GraphQLScalarType } from 'graphql';
import { ValidationError } from 'apollo-server';
import validator from 'validator';

import type { StringShapeArgs } from '../../types';

import { ShapeFormat } from '../../enums';

class StringShapeType extends GraphQLScalarType {
  constructor(field: string, type: GraphQLScalarType, args: StringShapeArgs) {
    super({
      name: 'StringShape',
      serialize: value => type.serialize(value),
      parseValue: value => {
        value = type.parseValue(value);

        this.validate(field, value, args);

        return value;
      },
      parseLiteral: ast => type.parseLiteral(ast, {})
    });
  }

  private validate(field: string, value: string, args: StringShapeArgs): void {
    if (args.minLength !== undefined && value.length < args.minLength) {
      throw new ValidationError(
        `${field} must be at least ${args.minLength} characters in length`
      );
    }

    if (args.maxLength !== undefined && value.length > args.maxLength) {
      throw new ValidationError(
        `${field} must be no more than ${args.maxLength} characters in length`
      );
    }

    if (
      args.pattern !== undefined &&
      !new RegExp(args.pattern, args.flags).test(value)
    ) {
      throw new ValidationError(`${field} must match ${args.pattern}`);
    }

    if (args.startsWith !== undefined && !value.startsWith(args.startsWith)) {
      throw new ValidationError(`${field} must start with ${args.startsWith}`);
    }

    if (args.endsWith !== undefined && !value.endsWith(args.endsWith)) {
      throw new ValidationError(`${field} must end with ${args.endsWith}`);
    }

    if (args.contains !== undefined && !value.includes(args.contains)) {
      throw new ValidationError(`${field} must contain ${args.contains}`);
    }

    if (args.format !== undefined) {
      if (
        args.format === ShapeFormat.EMAIL_SHAPE &&
        !validator.isEmail(value)
      ) {
        throw new ValidationError(`${field} must a a valid email`);
      }

      throw new ValidationError(
        `Invalid format type ${args.format} specified for ${field}`
      );
    }
  }
}

export default StringShapeType;
