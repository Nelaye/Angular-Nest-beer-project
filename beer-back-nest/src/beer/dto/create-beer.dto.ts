import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';

export class CreateBeerDto {
    @ApiProperty({ name: 'name', description: 'Name of beer', example: 'Barbar' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({name: 'country', description: 'Origin country of beer', example: 'Belgique'})
    @IsString()
    @IsOptional()
    country: string;

    @ApiProperty({name: 'brewery', description: 'Brewery of beer', example: 'Lefèbvre'})
    @IsString()
    @IsOptional()
    brewery: string;

    @ApiProperty({ name: 'degree', description: 'Degree of beer', example: 8 })
    @IsNumber()
    @IsNotEmpty()
    degree: number;

    @ApiProperty({ name: 'fermentation', description: 'Fermentation of beer', example: 'haute' })
    @IsString()
    @IsOptional()
    fermentation: string;

    @ApiProperty({ name: 'bitterness', description: 'Bitterness of beer', example: 1 })
    @IsNumber()
    @IsOptional()
    bitterness: number;

    @ApiProperty({ name: 'thirst', description: 'Thirst of beer', example: 1.5 })
    @IsNumber()
    @IsOptional()
    thirst: number;

    @ApiProperty({ name: 'observation', description: 'Observation of beer', example: 'Bière au miel'})
    @IsString()
    @IsOptional()
    observation?: string;
}
