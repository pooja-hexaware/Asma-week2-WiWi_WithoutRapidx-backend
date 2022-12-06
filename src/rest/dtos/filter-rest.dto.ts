import {IsNotEmpty, MaxLength, MinLength,Matches, IsString, IsNumber, } from "class-validator";
export class FilterRestDTO{
    search:string;
    rzip:number;
    rcity:string;
    rstate:string;
}