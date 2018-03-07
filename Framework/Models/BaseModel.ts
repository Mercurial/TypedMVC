import * as mongoose from 'mongoose';

class BaseModel<T>
{
    Model: mongoose.Model<T & mongoose.Document>;

    constructor(collectionName: string, schema: mongoose.Schema)
    {
        this.Model =  mongoose.model(collectionName, schema);
    }


    public async Find(query: any, limit: number, offset: number)
    {
        let result  = await this.Model.find(query).skip(offset).limit(limit);
        return result;
    }

    public async FindWithCount(query: any, limit: number, offset: number)
    {
        let result  = await this.Model.find(query).skip(offset).limit(limit);
        let count = await this.Model.count(query);
        return [result, count];
    }

    public async Count(query: any)
    {
        let result  = await this.Model.count(query);
        return result;
    }


}

export {BaseModel}