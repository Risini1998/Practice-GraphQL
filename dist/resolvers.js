"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const db_1 = require("./db");
const Query = {
    users: () => {
        return db_1.users.list();
    },
};
const Mutation = {
    createUser: (root, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
        let userObj = db_1.users;
        let idCount = userObj.list().length;
        const newUser = {
            id: `${idCount++}`,
            firstName: args.firstName,
            lastName: args.lastName,
        };
        userObj.create(newUser);
        return newUser;
    }),
    updateUser: (root, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
        let userList = db_1.users;
        userList.update({
            id: args.id,
            firstName: args.firstName,
            lastName: args.lastName,
        });
        return userList.list();
    }),
    deleteUser: (root, args, context, _info) => __awaiter(void 0, void 0, void 0, function* () {
        let userList = db_1.users;
        userList.delete(args.id);
        return userList.list();
    })
};
exports.resolvers = { Query, Mutation };
