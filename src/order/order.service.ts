import { Injectable } from '@nestjs/common';
import {Model}  from 'mongoose';
import {InjectModel} from '@nestjs/mongoose'
import {order,orderDocument} from './order.schema';
import {CreateOrderDTO} from './order.dto'
import { OrderModule } from './order.module';

@Injectable()
export class OrderService {
    constructor(@InjectModel('Order')private readonly orderModel: Model<orderDocument>) {}
    async getAllOrders(): Promise<order[]> {
        const orders = await this.orderModel.find().exec();
        return orders;
      }
      async getOrder(id: string): Promise<order> {
        const order = await this.orderModel.findById(id).exec();
        return order;
      }
    async addOrder(createOrderDTO: CreateOrderDTO) : Promise<order>{
        const newOrder = await this.orderModel.create(createOrderDTO);
        return newOrder.save();
    }
    async updateOrder(id:string, createOrderDTO:CreateOrderDTO): Promise<order>{
        const updatedOrder = await this.orderModel
        .findByIdAndUpdate(id, createOrderDTO,{new:true});
        return updatedOrder;
    }
    async deleteOrder(id:string):Promise<any>{
        const deletedOrder=await this.orderModel.findByIdAndRemove(id);
        return deletedOrder;
    } 
}
