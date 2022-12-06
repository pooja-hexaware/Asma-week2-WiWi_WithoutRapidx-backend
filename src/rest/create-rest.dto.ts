import { IsNotEmpty, IsString, IsNumber, } from "class-validator";
export class CreateRestDTO{
    @IsString({message:'Must be a Valid String'})
    @IsNotEmpty({message:'Must not be Null'})
    rname:string;


    @IsNotEmpty({message:'Must not be Null'})
      @IsNumber()
    rid:string;

    @IsNotEmpty({message:'Must not be Null'})
    @IsString({message:'Must be a Valid String'})
    rcity:string;

    @IsNotEmpty({message:'Must not be Null'})
    @IsString({message:'Must be a Valid String'})
    raddress:string;

    // @Max(6)
    // @Min(5)
    @IsNotEmpty({message:'Must not be Null'})
    @IsString({message:'Must be a Valid String'})
    rzip:string;

    @IsNotEmpty({message:'Must not be Null'})
    @IsString({message:'Must be a Valid String'})
    rstate:string;

    // @Max(10)
    // @Min(10)
    @IsNotEmpty({message:'Must not be Null'})
    @IsString({message:'Must be a Valid String'})
    rphone:string;

    // @Max(10)
    // @Min(10)
    @IsNotEmpty({message:'Must not be Null'})
    @IsString({message:'Must be a Valid String'})
    kphone:string;

    

}