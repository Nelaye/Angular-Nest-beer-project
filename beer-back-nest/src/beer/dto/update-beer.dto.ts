import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class UpdateBeerDto {
    @ApiProperty({ name: 'name', description: 'Name of beer', example: 'Barbar' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({name: 'country', description: 'Origin country of beer', example: 'Belgique'})
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    country?: string;

    @ApiProperty({name: 'brewery', description: 'Brewery of beer', example: 'Lefèbvre'})
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    brewery?: string;

    @ApiProperty({ name: 'degree', description: 'Degree of beer', example: 8 })
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    degree?: number;

    @ApiProperty({ name: 'fermentation', description: 'Fermentation of beer', example: 'haute' })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    fermentation?: string;

    @ApiProperty({ name: 'bitterness', description: 'Bitterness of beer', example: 1 })
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    bitterness?: number;

    @ApiProperty({ name: 'thirst', description: 'Thirst of beer', example: 1.5 })
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    thirst?: number;

    @ApiProperty({ name: 'observation', description: 'Observation of beer', example: 'Bière au miel'})
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    observation?: string;
}