import {
  SchemaDirectiveVisitor,
  gql,
  AuthenticationError
} from 'apollo-server';
import { defaultFieldResolver } from 'graphql';

import logger, { directiveTags } from '../../logging';

import type {
  Type,
  FieldDetails,
  ObjectWithAuth,
  FieldWithAuth
} from './types';

export class AuthDirective extends SchemaDirectiveVisitor {
  public visitObject(object: ObjectWithAuth): void {
    this.wrapType(object);
  }

  public visitFieldDefinition(_: FieldWithAuth, details: FieldDetails): void {
    this.wrapType(details.objectType);
  }

  private wrapType(type: Type): void {
    const { name } = this;

    Object.values<FieldWithAuth>(type.getFields()).forEach(field => {
      const { resolve = defaultFieldResolver, hasAuthWrapper } = field;

      if (hasAuthWrapper) return;

      field.hasAuthWrapper = true;

      field.resolve = async function resolver(...args) {
        const { user, requestId } = args[2];

        if (!user?.id) {
          throw new AuthenticationError(
            `Unauthenticated | directive: @${name} | field: ${field.name}`
          );
        }

        logger.info('Access granted to authenticated user', {
          tags: [...directiveTags, name, 'success'],
          requestId,
          userId: user?.id,
          field: field.name
        });

        return resolve.apply(this, args);
      };
    });
  }
}

export const authDirectiveTypeDefs = gql`
  directive @auth on OBJECT | FIELD_DEFINITION
`;
