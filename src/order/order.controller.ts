import { Controller, Post, Put, Get, Delete, Body, Param, Query, NotFoundException } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDTO } from './order.dto';
@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}
    

    @Get('/')
    async getAllOrders() {
        return this.orderService.getAllOrders();
    }

   
    @Get('/:id')
    async getOrder(@Param('id')id:string){
        const order = await this.orderService.getOrder(id);
        if(!order) throw new NotFoundException('Restaurant does not exist!');
        return order;
    }

    @Post('/')
    async addOrder(@Body() createorderDTO: CreateOrderDTO) {
        const order = await this.orderService.addOrder(createorderDTO);
        return order;
    }

    // @Put('/:id')
    // async updateOrder(@Param('id') id:string, @Body() createorderDTO:CreateOrderDTO){
    //     const order = await this.orderService.updateOrder(id, createorderDTO);
    //     if(!order) throw new NotFoundException('Restaurant Does Not Exist!');
    //     return order;
    // }

    // @Delete('/:id')
    // async deleteOrder(@Param('id')id:string){
    //     const order=await this.orderService.deleteOrder(id);
    //     if(!order) throw new NotFoundException('Restaurant Does Not Exist');
    //     return order;
    // }
}
