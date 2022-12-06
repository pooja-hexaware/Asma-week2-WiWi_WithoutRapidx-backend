import {IsNotEmpty, IsString } from "class-validator";
export class FilterRestDTO{
    search:string;
    rzip:string;
    rcity:string;
    rstate:string;
}