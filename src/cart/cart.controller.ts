
import { Controller, Post, Put, Get, Delete, Body, Param, Query, NotFoundException } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDTO } from './cart.dto';
@Controller('cart')
export class CartController {
    constructor(private CartService: CartService) {}
    
    @Get('/')
    async getAllCarts() {
        return this.CartService.getAllCarts();
    }

   
    @Get('/:id')
    async getCart(@Param('id')id:string){
        const Cart = await this.CartService.getCart(id);
        if(!Cart) throw new NotFoundException('Cart does not exist');
        return Cart;
    }

    @Post('/')
    async addCart(@Body() createCartDTO: CreateCartDTO) {
        const Cart = await this.CartService.addCart(createCartDTO);
        return Cart;
    }

    @Put('/:id')
    async updateCart(@Param('id') id:string, @Body() createCartDTO:CreateCartDTO){
        const Cart = await this.CartService.updateCart(id, createCartDTO);
        if(!Cart) throw new NotFoundException('Cart Does Not Exist!');
        return Cart;
    }

    @Delete('/:id')
    async deleteCart(@Param('id')id:string){
        const Cart=await this.CartService.deleteCart(id);
        if(!Cart) throw new NotFoundException('Cart Does Not Exist');
        return Cart;
    }
}
