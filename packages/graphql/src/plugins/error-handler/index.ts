import type { ApolloServerPlugin } from 'apollo-server-plugin-base';

import logger, { requestTags } from '../../logging';
import type { Context } from '../../types';

const plugin: ApolloServerPlugin<Context> = {
  requestDidStart: ({
    queryHash,
    operationName: operation,
    context: { requestId, user }
  }) => ({
    didEncounterErrors: ({ errors }) =>
      errors.forEach(error => {
        logger.error(error.message, {
          tags: [...requestTags, 'error'],
          requestId,
          userId: user?.id,
          operation,
          queryHash,
          error
        });
      })
  })
};

export default plugin;
