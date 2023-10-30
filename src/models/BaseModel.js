import connectToCluster from '../../config/db.js';
export default class BaseModel {
    collection;
    mongoClient;
    model;

    constructor(model) {
        this.uri = process.env.MONGO_URI;
        this.model = model;
    }

    async createConnection() {
        this.mongoClient = await connectToCluster(uri);
    }

    async createCollection() {
        await this.createConnection();
        this.collection = this.mongoClient.db(this.model);
    }
    
    async closeConnection() {
        await this.mongoClient.close();
    }

    async findById(id) {
        await this.createCollection();
        const data = await this.collection.find({ id }).first();
        await this.closeConnection();
        return data;
    }

    async create(data) {
        await this.createCollection();
        const data = await this.collection.create({...data});
        await this.closeConnection();
    }

}