# @fellesdatakatalog/graphql

Felles datakatalog collection of reusable GraphQL modules.

## Installation

```bash
npm i @fellesdatakatalog/graphql
```

## Dependencies

- graphql
- apollo-server
- axios
- jose
- validator
- winston

## Usage

### Directives

The following directives are available:
  - `@auth` - checks authorisation state when accessing GraphQL fields and objects
  - `@permission` - checks for necessary permissions when accessing GraphQL fields and objects
  - `@shape` - allows adding constraints to GraphQL fields

In order to add a directive to the schema, do the following:
  - Add directive-specific type definitions to schema
  - Register directive with schema
