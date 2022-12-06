import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
export type menuDocument = menu & Document ;
@Schema()
export class menu {
    @Prop({required:true})
    mname:string;

    @Prop({required:true})
    mimage:number;

    @Prop({required:true})
    mdesc:string;

    @Prop({required:true})
    mprice:string;

    @Prop()
    toppings:[
        {toppingsname:[type:string, required:true]},
        {toppingsprice:[type:number,required:true]}
    ];

    @Prop({required:true})
    mquant:number;

    @Prop({required:true, default:false})
    combo:boolean;

}
export const MenuSchema = SchemaFactory.createForClass(menu);