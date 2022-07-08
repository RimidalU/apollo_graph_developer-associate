const { ApolloServer, MocksList } = require('apollo-server');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');
const TrackAPI = require('./src/datasources/track-api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI()
    };
  }
});


server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
