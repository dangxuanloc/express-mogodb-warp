import BaseModel from "./BaseModel.js";

export default class userModel extends BaseModel {
    constructor() {
        super('users');
        // console.log('this.collection')
        console.log(this.collection)
        // process.exit(1)
    }

    function

     async findUserByOneField(option) {
        // console.log(this.collection)
        // process.exit(1)
        // return this.collection.findOne(option);
         return 1;
    }

    static async createUser(user) {

        const result = await this.collection.insertOne(user);
        return result.insertedId;
    }

    static async findAndUpdateUser(filter, update) {

        const result = await this.collection.findOneAndUpdate(
            filter,
            update,
            {
                returnOriginal: false,
            }
        )
        return result;
    }

    static async countUserByOption(filter) {

        return await this.collection.countDocuments(
            filter,
        );
    }

    static async getUserByOptionWithPaginate(filter = {}, skipRecords, perPage) {

        return await this.collection.find(filter)
            .skip(skipRecords)
            .limit(perPage)
            .toArray();
    }

}