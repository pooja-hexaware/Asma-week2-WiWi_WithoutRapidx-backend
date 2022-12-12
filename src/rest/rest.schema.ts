import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
export type restDocument = rest & Document ;
@Schema()
export class rest {
    @Prop({required:true})
    rname:string;

    @Prop({required:true,unique:true})
    rid:number;

    @Prop({required:true})
    rImage:string;

    @Prop({required:true})
    rrating:number;

    @Prop({required:true})
    rcity:string;

    @Prop({required:true})
    raddress:string;

    @Prop({required:true})
    rzip:string;

    @Prop({required:true})
    rstate:string;

    @Prop({required:true})
    rphone:string;

    @Prop({required:true})
    kphone:string;

}
export const RestSchema = SchemaFactory.createForClass(rest);