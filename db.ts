import { DataStore } from 'notarealdb';

const store = new DataStore('./data');

export const users = store.collection('users');