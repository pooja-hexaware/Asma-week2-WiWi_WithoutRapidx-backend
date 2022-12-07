import { Injectable } from '@nestjs/common';
import {Model}  from 'mongoose';
import {InjectModel} from '@nestjs/mongoose'
import {Cart, cartDocument} from './cart.schema';
import {CreateCartDTO} from './cart.dto'

@Injectable()
export class CartService {
    constructor(@InjectModel('Cart')private readonly CartModel: Model<cartDocument>) {}
    async getAllCarts(): Promise<Cart[]> {
        const Carts = await this.CartModel.find().exec();
        return Carts;
      }
      async getCart(id: string): Promise<Cart> {
        const Cart = await this.CartModel.findById(id).exec();
        return Cart;
      }
    async addCart(createCartDTO: CreateCartDTO) : Promise<Cart>{
        const newCart = await this.CartModel.create(createCartDTO);
        return newCart.save();
    }
    async updateCart(id:string, createCartDTO:CreateCartDTO): Promise<Cart>{
        const updatedCart = await this.CartModel
        .findByIdAndUpdate(id, createCartDTO,{new:true});
        return updatedCart;
    }
    async deleteCart(id:string):Promise<any>{
        const deletedCart=await this.CartModel.findByIdAndRemove(id);
        return deletedCart;
    } 
}
