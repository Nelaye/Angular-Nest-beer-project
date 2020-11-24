import {BeerEntity} from "../../beer/entities/beer.entity";
import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsInstance, IsNotEmpty, IsString, ValidateNested} from "class-validator";
import {CreateBeerDto} from "../../beer/dto/create-beer.dto";
import {Type} from "class-transformer";

export class CreateUserDto {
    @ApiProperty({
        name: "firstname",
        description: "Firstname of the user",
        example: "Maxime"
    })
    @IsString()
    @IsNotEmpty()
    firstname: string;

    @ApiProperty({
        name: "lastname",
        description: "Lastname of the user",
        example: "Barbier"
    })
    @IsString()
    @IsNotEmpty()
    lastname: string;

    @ApiProperty({
        name: "email",
        description: "Email of the user",
        example: "maxime.barbier@gmail.com"
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        name: "beers",
        description: "Beers possessed by the user"
    })
    @IsInstance(CreateBeerDto)
    @ValidateNested()
    @Type(() => CreateBeerDto)
    beers: BeerEntity[];
}