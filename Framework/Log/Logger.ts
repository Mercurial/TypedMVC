import * as moment from 'moment';

export class Logger
{
    public static Log(message: string, obj?: any)
    {
        if(!obj)
            obj = "";

        let currentDate = moment().format('L, LTS');

        console.log(`[${currentDate}] : ${message}`, obj);
    }
}