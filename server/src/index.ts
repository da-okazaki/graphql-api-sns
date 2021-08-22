import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schemas/schema';
import { resolvers } from './resolvers/resolver';
// import getDB from './db';
// import User from './db/models/User';

const bootstrap = async () => {
  // データベースのインスタンスを取得
  // const store = await getDB();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // dataSources: () => ({
    //   User: new User({ store }),
    // }),
  });

  // サーバーの起動
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

bootstrap();
