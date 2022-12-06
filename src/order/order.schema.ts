import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, SchemaTypes} from 'mongoose'
export type orderDocument = order & Document ;
@Schema()
export class order {
    @Prop({required:true, unique:true})
    tid:string;

    @Prop({default:Date.now()})
    odate:Date;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'cart' })
    cartid:string;

    @Prop({required:true})
    cname:string;

    @Prop({required:true})
    caddress:string;

    @Prop({required:true})
    czip:string;

    @Prop({required:true})
    cstreet:string;

    @Prop({required:true})
    cphone:string;

  

}
export const OrderSchema = SchemaFactory.createForClass(order);