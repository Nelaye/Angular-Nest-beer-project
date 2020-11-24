import {Exclude, Expose, Type} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";
import {BeerEntity} from "../../beer/entities/beer.entity";

@Exclude()
export class UserEntity {

    @ApiProperty({
        name: "id",
        description: "Unique identifier in the database",
        example: "5fbbc1e428fddfcf2938b004"
    })
    @Expose()
    @Type(() => String)
    id: string;

    @ApiProperty({
        name: "firstname",
        description: "Firstname of the user",
        example: "Maxime"
    })
    @Expose()
    @Type(() => String)
    firstname: string;

    @ApiProperty({
        name: "lastname",
        description: "Lastname of the user",
        example: "Barbier"
    })
    @Expose()
    @Type(() => String)
    lastname: string;

    @ApiProperty({
        name: "email",
        description: "Email of the user",
        example: "maxime.barbier@gmail.com"
    })
    @Expose()
    @Type(() => String)
    email: string;

    @ApiProperty({
        name: "beers",
        description: "Beers possessed by the user",
    })
    @Expose()
    @Type(() => BeerEntity)
    beers: BeerEntity[];

    /**
     * Class constructor
     *
     * @param partial data to insert in object instance
     */
    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, partial);
    }
}