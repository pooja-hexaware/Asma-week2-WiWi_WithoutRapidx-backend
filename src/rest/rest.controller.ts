import { Controller, Post, Put, Get, Delete, Body, Param, Query, NotFoundException } from '@nestjs/common';
import { RestService } from './rest.service';
import { CreateRestDTO } from './dtos/create-rest.dto';
import { FilterRestDTO } from './dtos/filter-rest.dto';
@Controller('rest')
export class RestController {
    constructor(private restService: RestService) {}

    @Get('/')
    async getRests(@Query() filterRestDTO:FilterRestDTO){
        if(Object.keys(filterRestDTO).length){
            const filteredRests= await this.restService.getFilteredRest(filterRestDTO);
            return filteredRests;
        } else {
            const allRests = await this.restService.getAllRests();
            return allRests;
        }
    }
    
    @Get('/:id')
    async getRest(@Param('id')id:string){
        const rest = await this.restService.getRest(id);
        if(!rest) throw new NotFoundException('Restaurant does not exist!');
        return rest;
    }

    @Post('/')
    async addRest(@Body() createRestDTO: CreateRestDTO) {
        const rest = await this.restService.addRest(createRestDTO);
        return rest;
    }

    @Put('/:id')
    async updateRest(@Param('id') id:string, @Body() createRestDTO:CreateRestDTO){
        const rest = await this.restService.updateRest(id, createRestDTO);
        if(!rest) throw new NotFoundException('Restaurant Does Not Exist!');
        return rest;
    }

    @Delete('/:id')
    async deleteRest(@Param('id')id:string){
        const rest=await this.restService.deleteRest(id);
        if(!rest) throw new NotFoundException('Restaurant Does Not Exist');
        return rest;
    }
}
