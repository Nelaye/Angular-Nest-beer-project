import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsInstance, IsNotEmpty, IsOptional, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {BeerEntity} from "../../beer/entities/beer.entity";
import {UpdateBeerDto} from "../../beer/dto/update-beer.dto";

export class UpdateUserDto {
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
    @IsOptional()
    email?: string;

    @ApiProperty({
        name: "beers",
        description: "Beers possessed by the user"
    })
    @IsInstance(UpdateBeerDto)
    @ValidateNested()
    @Type(() => UpdateBeerDto)
    beers: BeerEntity[];
}