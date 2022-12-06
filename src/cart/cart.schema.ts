import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, SchemaTypes } from 'mongoose'
export type restDocument = rest & Document ;
@Schema()
export class rest {
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
export const RestSchema = SchemaFactory.createForClass(rest);