import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, SchemaTypes } from 'mongoose'
export type cartDocument = Cart & Document ;
@Schema()
export class Cart {
    @Prop({ type: SchemaTypes.ObjectId, ref: 'menu' })
    mId:string;

    @Prop()
    citems:[];

    @Prop()
    ctotal:number;

    @Prop()
    discvalue:number;

    @Prop()
    ccode:string;

    @Prop()
    cvalue:number;

}
export const CartSchema = SchemaFactory.createForClass(Cart);