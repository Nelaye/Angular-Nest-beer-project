import { Exclude, Expose, Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

@Exclude()
export class BeerEntity {
    @ApiProperty({
        name: 'id',
        description: 'Unique identifier in the database',
        example: '243'
    })
    @Expose()
    @Type(() => String)
    id: string;

    @ApiProperty({
        name: 'name',
        description: 'Name of beer',
        example: 'Barbar'
    })
    @Expose()
    @Type(() => String)
    name: string;

    @ApiProperty({
        name: 'country',
        description: 'Origin country of beer',
        example: 'Belgique'
    })
    @Expose()
    @Type(() => String)
    country: string;

    @ApiProperty({
        name: 'brewery',
        description: 'Brewery of beer',
        example: 'Lefèbvre'
    })
    @Expose()
    @Type(() => String)
    brewery: string;

    @ApiProperty({
        name: 'degree',
        description: 'Degree of beer',
        example: 8
    })
    @Expose()
    @Type(() => Number)
    degree: number;

    @ApiProperty({
        name: 'fermentation',
        description: 'Fermentation of beer',
        example: 'haute'
    })
    @Expose()
    @Type(() => String)
    fermentation: string;

    @ApiProperty({
        name: 'bitterness',
        description: 'Bitterness of beer',
        example: 1
    })
    @Expose()
    @Type(() => Number)
    bitterness: number

    @ApiProperty({
        name: 'thirst',
        description: 'Thirst of beer',
        example: 1.5
    })
    @Expose()
    @Type(() => Number)
    thirst: number;

    @ApiProperty({
        name: 'observation',
        description: 'Observation of beer',
        example: 'Bière au miel'
    })
    @Expose()
    @Type(() => String)
    observation: string;

    /**
     * Class constructor
     *
     * @param partial data to insert in object instance
     */
    constructor(partial: Partial<BeerEntity>) {
        Object.assign(this, partial);
    }
}