"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const notarealdb_1 = require("notarealdb");
const store = new notarealdb_1.DataStore('./data');
exports.users = store.collection('users');
