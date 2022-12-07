import { Injectable } from '@nestjs/common';
import {Model}  from 'mongoose';
import {InjectModel} from '@nestjs/mongoose'
import {menu,menuDocument} from './menu.schema';
import {CreateMenuDTO} from './menu.dto'


@Injectable()
export class MenuService {
    constructor(@InjectModel('Menu')private readonly menuModel: Model<menuDocument>) {}
    async getAllMenus(): Promise<menu[]> {
        const menus = await this.menuModel.find().exec();
        return menus;
      }
      async getMenu(id: string): Promise<menu> {
        const menu = await this.menuModel.findById(id).exec();
        return menu;
      }
    async addMenu(createMenuDTO: CreateMenuDTO) : Promise<menu>{
        const newmenu = await this.menuModel.create(createMenuDTO);
        return newmenu.save();
    }
    async updateMenu(id:string, createMenuDTO:CreateMenuDTO): Promise<menu>{
        const updatedmenu = await this.menuModel
        .findByIdAndUpdate(id, createMenuDTO,{new:true});
        return updatedmenu;
    }
    async deleteMenu(id:string):Promise<any>{
        const deletedmenu=await this.menuModel.findByIdAndRemove(id);
        return deletedmenu;
    } 
}
