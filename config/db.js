import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;

// Connection URL
const client = new MongoClient(MONGO_URI);

const connectDb = async () => {
    try {
        console.log('hihi')
        await client.connect();
        console.log('Connected successfully to server');
        return client.db(DB_NAME);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};
export default connectDb;
