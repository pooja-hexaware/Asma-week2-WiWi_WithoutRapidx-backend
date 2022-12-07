import { IsNotEmpty, IsString, IsNumber, IsArray} from "class-validator";
export class CreateCartDTO{
    @IsString({message:'Must be a Valid String'})
    @IsNotEmpty({message:'Must not be Null'})
    mId:string;

    // @Max(6)
    // @Min(5)
    @IsArray()
    citems:[];


    @IsNotEmpty({message:'Must not be Null'})
    @IsNumber()
    ctotal:number;

    @IsNotEmpty({message:'Must not be Null'})
    @IsNumber()
    discvalue:number;

    @IsNotEmpty({message:'Must not be Null'})
    @IsString({message:'Must be a Valid String'})
    ccode:string;


    @IsNotEmpty({message:'Must not be Null'})
      @IsNumber()
    cvalue:number;   

}