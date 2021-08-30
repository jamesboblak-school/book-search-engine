const express = require('express');

// import Apollo Server including typeDefs and resolvers
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');



const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;

// create new Apollo server
// const server = new ApolloServer({ typeDefs, resolvers, context: authMiddleware});
// await server.start();
// server.applyMiddleware({ app });

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

// server.applyMiddleware({ app });

let server = null;
async function startServer() {
    server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await server.start();
    server.applyMiddleware({ app });
}



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  // (given)
  // app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));

  // 
  app.listen(PORT, () => {
    console.log(`🌍 API server running on port ${PORT}!`);
    // GraphQL link
    // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
