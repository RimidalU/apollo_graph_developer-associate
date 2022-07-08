const { ApolloServer, MocksList } = require('apollo-server');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');
const TrackAPI = require('./src/datasources/track-api');

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        trackAPI: new TrackAPI(),
      };
    },
  });
  const { url } = await server.listen({ port: process.env.PORT || 4000 });
  console.log(`
      🚀  Server is running!
      🔉  Listening...
      📭  Query at ${url}
    `);
}

startApolloServer(typeDefs, resolvers);
