import { books, users } from '../constants/sample-data';
import { v4 as uuidv4 } from 'uuid';

export const resolvers = {
  Query: {
    books: () => books,
    users: () => users,
  },

  Mutation: {
    createUser: (_, payload) => {
      const data = { id: uuidv4(), ...payload };
      users.push(data);
      return data;
    },
  },
};
