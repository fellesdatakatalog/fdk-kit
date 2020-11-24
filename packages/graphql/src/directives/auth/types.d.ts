import type {
  GraphQLField,
  GraphQLObjectType,
  GraphQLInterfaceType
} from 'graphql';

import type { Context } from '../../types';

type TypeWithAuthWrapper<T> = T & { hasAuthWrapper?: bolean };
type TypeWithAuth<T> = T & TypeWithAuthWrapper<T>;

export type FieldWithAuth = TypeWithAuth<GraphQLField<any, Readonly<Context>>>;
export type ObjectWithAuth = TypeWithAuth<GraphQLObjectType>;
export type InterfaceWithAuth = TypeWithAuth<GraphQLInterfaceType>;

export type Type = ObjectWithAuth | InterfaceWithAuth;

export interface FieldDetails {
  objectType: Type;
}
