import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'
import { rest, restDocument } from './rest.schema';
import { CreateRestDTO } from './create-rest.dto';
import { FilterRestDTO } from './filter-rest.dto';
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
        if(rzip)
        {
        rests = rests.filter(rest => rest.rzip === rzip)
        }
        if(rcity)
        {
        rests = rests.filter(rest => rest.rcity === rcity)
        }
        if(rstate)
        {
        rests = rests.filter(rest => rest.rstate === rstate)
        }
        return rests;
    }
    async getAllRests(): Promise<rest[]> {
        const rests = await this.RestModel.find().exec();
        return rests;
      }
    
      async getRest(id: string): Promise<rest> {
        const rest = await this.RestModel.findById(id).exec();
        return rest;
      }
    async addRest(createRestDTO: CreateRestDTO) : Promise<rest>{
        const newRest = await this.RestModel.create(createRestDTO);
        return newRest.save();
    }
    async updateRest(id:string, createRestDTO:CreateRestDTO): Promise<rest>{
        const updatedRest = await this.RestModel
        .findByIdAndUpdate(id, createRestDTO,{new:true});
        return updatedRest;
    }
    async deleteRest(id:string):Promise<any>{
        const deletedRest=await this.RestModel.findByIdAndRemove(id);
        return deletedRest;
    }
}
