import type {
  GraphQLField,
  GraphQLObjectType,
  GraphQLInterfaceType
} from 'graphql';

import type { Context, Resource, Role } from '../../types';

interface Permission {
  resource: Resource;
  resourceIdField: string;
  role: Role;
}

type TypeWithPermissionsWrapper<T> = T & { hasPermissionsWrapper?: bolean };
type TypeWithPermissions<T> = T &
  TypeWithPermissionsWrapper<T> & { permissions?: Permission[] };

export type FieldWithPermissions = TypeWithPermissions<
  GraphQLField<any, Readonly<Context>>
>;
export type ObjectWithPermissions = TypeWithPermissions<GraphQLObjectType>;
export type InterfaceWithPermissions = TypeWithPermissions<
  GraphQLInterfaceType
>;

export type Type = ObjectWithPermissions | InterfaceWithPermissions;
export type Location =
  | ObjectWithPermissions
  | InterfaceWithPermissions
  | FieldWithPermissions;

export interface FieldDetails {
  objectType: Type;
}
