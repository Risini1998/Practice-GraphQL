import { PrismaClient } from '@prisma/client';

let dbDataSource: any = null;

export const getDatabaseConnection = () => {
    try {
        if (!dbDataSource) {
            dbDataSource = new PrismaClient();
        }
        return dbDataSource;
    } catch (error) {
        throw new Error('Error connecting to database');
    }
};
