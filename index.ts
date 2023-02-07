import express, {Express, Request, Response} from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app: Express = express();
const port = 3000;

const typeDefs = gql`
 type Query {
    hello: String
 }`;

const resolvers = {
  Query: {
     hello: () => 'Hello world!'
  }
 };

app.get('/', (req: Request, res: Response)=>{
    res.send('Hello, this is Express + TypeScript');
});

app.listen(port, ()=> {
console.log(`[Server]: I am running at https://localhost:${port}`);
});