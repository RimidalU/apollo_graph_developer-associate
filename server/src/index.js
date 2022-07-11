const { ApolloServer, MocksList } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   dataSources: () => {
//     return {
//       trackAPI: new TrackAPI()
//     };
//   }
// });


// server.listen().then(() => {
//   console.log(`
//     🚀  Server is running!
//     🔉  Listening on port 4000
//     📭  Query at https://studio.apollographql.com/dev
//   `);
// });

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
      🚀  Server is running
      🔉  Listening...
      📭  Query at ${url}
    `);
}

startApolloServer(typeDefs, resolvers);
