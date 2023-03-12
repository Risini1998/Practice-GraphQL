import express, {Express, Request, Response} from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import {resolvers} from './resolvers';
import { typeDefs } from './schema';
  
const app: Express = express();
const port = 3000;

let apolloServer = null;

async function startServer() {
  apolloServer = new ApolloServer({typeDefs, resolvers, introspection: true});
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/api' });
  console.log("Apollo Server is running...");
}

startServer();

app.get('/', (req: Request, res: Response)=>{
  res.send('Hello, this is Express + TypeScript');
});

app.listen(port, ()=> {
  console.log(`Server is running at https://localhost:${port}`);
});
