import { Controller, Post, Put, Get, Delete, Body, Param, Query, NotFoundException } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDTO } from './menu.dto';
@Controller('menu')
export class MenuController {
    constructor(private menuService: MenuService) {}
    

    @Get('/')
    async getAllMenus() {
        return this.menuService.getAllMenus();
    }

   
    @Get('/:id')
    async getMenu(@Param('id')id:string){
        const Menu = await this.menuService.getMenu(id);
        if(!Menu) throw new NotFoundException('Menu does not exist!');
        return Menu;
    }

    @Post('/')
    async addMenu(@Body() createMenuDTO: CreateMenuDTO) {
        const Menu = await this.menuService.addMenu(createMenuDTO);
        return Menu;
    }

    @Put('/:id')
    async updateMenu(@Param('id') id:string, @Body() createMenuDTO:CreateMenuDTO){
        const Menu = await this.menuService.updateMenu(id, createMenuDTO);
        if(!Menu) throw new NotFoundException('Menu Does Not Exist!');
        return Menu;
    }

    @Delete('/:id')
    async deleteMenu(@Param('id')id:string){
        const Menu=await this.menuService.deleteMenu(id);
        if(!Menu) throw new NotFoundException('Restaurant Does Not Exist');
        return Menu;
    }
}
