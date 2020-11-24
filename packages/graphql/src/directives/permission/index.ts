import {
  SchemaDirectiveVisitor,
  gql,
  AuthenticationError,
  ForbiddenError
} from 'apollo-server';
import { defaultFieldResolver } from 'graphql';

import logger, { directiveTags } from '../../logging';

import type {
  ObjectWithPermissions,
  FieldWithPermissions,
  FieldDetails,
  Permission,
  Location,
  Type
} from './types';

export class PermissionDirective extends SchemaDirectiveVisitor {
  public visitObject(object: ObjectWithPermissions): void {
    this.enhanceLocation(object);
    this.wrapType(object);
  }

  public visitFieldDefinition(
    field: FieldWithPermissions,
    details: FieldDetails
  ): void {
    this.enhanceLocation(field);
    this.wrapType(details.objectType);
  }

  private enhanceLocation(location: Location): void {
    const { resource, resourceIdField, role } = this.args as Permission;

    if (!location.permissions) {
      location.permissions = [{ resource, resourceIdField, role }];
    }

    if (Array.isArray(location.permissions)) {
      location.permissions.push({ resource, resourceIdField, role });
    }
  }

  private wrapType(type: Type): void {
    const { name } = this;

    Object.values<FieldWithPermissions>(type.getFields()).forEach(field => {
      const {
        resolve = defaultFieldResolver,
        permissions = type.permissions,
        hasPermissionsWrapper
      } = field;

      if (hasPermissionsWrapper || !permissions) return;

      field.hasPermissionsWrapper = true;

      field.resolve = async function resolver(...args) {
        const [root, input, { user, requestId }] = args;

        if (Array.isArray(permissions) && permissions.length > 0 && !user?.id) {
          throw new AuthenticationError(
            `Unauthenticated | directive: @${name} | field: ${field.name}`
          );
        }

        const hasPermission = permissions?.some(
          ({ resource, resourceIdField, role }) =>
            user?.authorities?.includes(
              `${resource}:${
                input?.[resourceIdField] ??
                root?.[resourceIdField] ??
                resourceIdField
              }:${role}`
            )
        );

        if (hasPermission) {
          logger.info('Access granted to user with necessary permission', {
            tags: [...directiveTags, name, 'success'],
            requestId,
            userId: user?.id,
            field: field.name
          });
        } else {
          throw new ForbiddenError(
            `Access denied | directive: @${name} | field: ${field.name}`
          );
        }

        return resolve.apply(this, args);
      };
    });
  }
}

export const permissionDirectiveTypeDefs = gql`
  enum Resource {
    organisation
    system
  }

  enum Role {
    admin
  }

  directive @permission(
    resource: Resource!
    resourceIdField: String!
    role: Role!
  ) repeatable on OBJECT | FIELD_DEFINITION
`;
