import { Controller, Post, Put, Get, Delete, Body, Param, Query, NotFoundException } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDTO } from './menu.dto';
@Controller('menu')
export class MenuController {
    constructor(private menuService: MenuService) {}
    

    @Get('/')
    async getAllOrders() {
        return this.menuService.getAllMenus();
    }

   
    @Get('/:id')
    async getOrder(@Param('id')id:string){
        const order = await this.menuService.getMenu(id);
        if(!order) throw new NotFoundException('Restaurant does not exist!');
        return order;
    }

    @Post('/')
    async addOrder(@Body() createMenuDTO: CreateMenuDTO) {
        const order = await this.menuService.addMenu(createMenuDTO);
        return order;
    }

    // @Put('/:id')
    // async updateOrder(@Param('id') id:string, @Body() createMenuDTO:CreateMenuDTO){
    //     const order = await this.menuService.updateOrder(id, createMenuDTO);
    //     if(!order) throw new NotFoundException('Restaurant Does Not Exist!');
    //     return order;
    // }

    // @Delete('/:id')
    // async deleteOrder(@Param('id')id:string){
    //     const order=await this.menuService.deleteOrder(id);
    //     if(!order) throw new NotFoundException('Restaurant Does Not Exist');
    //     return order;
    // }
}
