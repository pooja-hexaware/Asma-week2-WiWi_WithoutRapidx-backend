import { IsNotEmpty, MaxLength, MinLength, IsString, IsNumber, } from "class-validator";
export class CreateRestDTO{
    @IsString()
    @IsNotEmpty()
    rname:string;


    @IsNotEmpty()
    @IsNumber()
    rid:number;

    @IsNotEmpty()
    @IsString()
    rcity:string;

    @IsNotEmpty()
    @IsString()
    raddress:string;

    @MaxLength(6)
    @MinLength(5)
    @IsNotEmpty()
    @IsNumber()
    rzip:number;

    @IsNotEmpty()
    @IsString()
    rstate:string;

    @MaxLength(10)
    @MinLength(10)
    @IsNotEmpty()
    @IsString()
    rphone:string;

    @MaxLength(10)
    @MinLength(10)
    @IsNotEmpty()
    @IsString()
    kphone:string;

    

}