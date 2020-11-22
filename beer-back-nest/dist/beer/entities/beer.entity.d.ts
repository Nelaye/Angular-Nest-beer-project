export declare class BeerEntity {
    id: string;
    name: string;
    country: string;
    brewery: string;
    degree: number;
    fermentation: string;
    bitterness: number;
    thirst: number;
    observation: string;
    constructor(partial: Partial<BeerEntity>);
}
