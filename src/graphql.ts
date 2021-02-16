import { ApolloServer } from 'apollo-server-lambda';
import * as jwt from 'jsonwebtoken';
import resolvers from './resolvers';
import typeDefs from './schema';
import './util/env';
import { logger } from './util/logger';

const endpoint: string = process.env.STAGE
  ? `/${process.env.STAGE}/graphql`
  : '/graphql';
// Create the Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
  formatError: (err) => {
    if (process.env.NODE_ENV !== 'PROD') {
      logger.error(err);
    }
    return err;
  },
  tracing: true,
  playground: {
    endpoint,
  },
});

// Export the handler for use on the lambda
exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
