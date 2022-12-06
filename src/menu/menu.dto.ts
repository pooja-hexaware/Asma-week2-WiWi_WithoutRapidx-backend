import { IsNotEmpty, IsString, IsNumber, IsArray, IsBoolean } from "class-validator";
export class CreateRestDTO{
    @IsString({message:'Must be a Valid String'})
    @IsNotEmpty({message:'Must not be Null'})
    mname:string;


    @IsNotEmpty({message:'Must not be Null'})
    @IsString({message:'Must be a Valid String'})
    mimage:string;

    @IsNotEmpty({message:'Must not be Null'})
    @IsString({message:'Must be a Valid String'})
    mdesc:string;

    @IsNotEmpty({message:'Must not be Null'})
      @IsNumber()
    mprice:number;

    // @Max(6)
    // @Min(5)
    @IsArray()
    toppings:[];

    @IsNotEmpty({message:'Must not be Null'})
      @IsNumber()
    mquant:number;

    // @Max(10)
    // @Min(10)
    @IsNotEmpty({message:'Must not be Null'})
    @IsBoolean()
    combo:boolean;

    

    

}