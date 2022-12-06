import { IsNotEmpty, IsString, IsNumber, IsDate } from "class-validator";
//import { MinLength, MaxLength } from 'class-validator';
export class CreateRestDTO{
    @IsString({message:'Must be a Valid String'})
    @IsNotEmpty({message:'Must not be Null'})
    tid:string;


    @IsNotEmpty({message:'Must not be Null'})
    @IsDate()
    odate:string;

    @IsNotEmpty({message:'Must not be Null'})
    @IsString({message:'Must be a Valid String'})
    cartid:string;

    @IsNotEmpty({message:'Must not be Null'})
    @IsString({message:'Must be a Valid String'})
    cname:string;

    @IsNotEmpty({message:'Must not be Null'})
    @IsString({message:'Must be a Valid String'})
    caddress:string;

    @IsNotEmpty({message:'Must not be Null'})
    @IsString({message:'Must be a Valid String'})
    // @MaxLength(6,{
    //     message: 'Postal Code must be max 6 digits', })
    // @MinLength(5,{
    //     message: 'Postal Code must be min 5 digits',})
    czip:string;

    @IsNotEmpty({message:'Must not be Null'})
    @IsString({message:'Must be a Valid String'})
    cstreet:string;

    @IsNotEmpty({message:'Must not be Null'})
    @IsString({message:'Must be a Valid String'})
    cphone:string;

    

    

}