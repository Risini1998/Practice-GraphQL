import { users } from "./db";

const Query = {
  users: () => { 
    return users.list() },
};

const Mutation = {
  createUser: async (root: any, args: { firstName: String; lastName: String; }, context: any, info: any) => {
    let userObj = users;
    let idCount = userObj.list().length;
    const newUser = {
      id: `${idCount++}`,
      firstName: args.firstName,
      lastName: args.lastName,
    };
    userObj.create(newUser);
    return newUser;
  },
  updateUser: async (root: any, args: User, context: any, info: any) => {
    let userList = users;
    userList.update({
      id: args.id,
      firstName: args.firstName,
      lastName: args.lastName,
    });
    return userList.list();
  },
  deleteUser: async (root: any, args: { id: any; }, context: any, _info: any) => {
    let userList = users;
    userList.delete(args.id);
    return userList.list()
  }
};

export const resolvers = { Query, Mutation };
