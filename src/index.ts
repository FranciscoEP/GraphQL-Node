/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server';

const typeDefs = `
type Query{
	info: String!
}
`;
const resolvers = {
  Query: {
    info: () => `Mock API `,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
