import connectDb from "../../config/db.js";

export default class BaseModel {
    collection;

    constructor(model) {

         console.log('base model')
        // const db = connectDb();
        //
        // this.collection = db.collection(model);
        // db.collection(model);
    }

}