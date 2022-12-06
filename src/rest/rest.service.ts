import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'
import { rest, restDocument } from './rest.schema';
import { CreateRestDTO } from './dtos/create-rest.dto';
import { FilterRestDTO } from './dtos/filter-rest.dto';
import { resourceLimits } from 'worker_threads';
@Injectable()
export class RestService {
    constructor(@InjectModel('rest') private readonly RestModel:Model<restDocument>) {}
    async getFilteredRest(filterRestDTO:FilterRestDTO):Promise<rest[]>{
        const{rcity,rzip,rstate,search}=filterRestDTO;
        let rests= await this.getAllRests();
        if(search)
        {
            rests=rests.filter(rest => 
                rest.rzip.includes(search) || 
                rest.rcity.includes(search) ||
                rest.rstate.includes(search) 
            );
        }
        if(search)
        return null;
    }
}
