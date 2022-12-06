import { IsNotEmpty, IsString, IsNumber, } from "class-validator";
export class CreateRestDTO{
    @IsString()
    @IsNotEmpty()
    rname:string;


    @IsNotEmpty()
    @IsNumber()
    rid:string;

    @IsNotEmpty()
    @IsString()
    rcity:string;

    @IsNotEmpty()
    @IsString()
    raddress:string;

    // @Max(6)
    // @Min(5)
    @IsNotEmpty()
    @IsString()
    rzip:string;

    @IsNotEmpty()
    @IsString()
    rstate:string;

    // @Max(10)
    // @Min(10)
    @IsNotEmpty()
    @IsString()
    rphone:string;

    // @Max(10)
    // @Min(10)
    @IsNotEmpty()
    @IsString()
    kphone:string;

    

}