import { Model } from 'mongoose';
import { Beer } from '../schemas/beer.schema';
import { Observable } from "rxjs";
import { CreateBeerDto } from '../dto/create-beer.dto';
import { UpdateBeerDto } from '../dto/update-beer.dto';
export declare class BeerDao {
    private readonly _beerModel;
    constructor(_beerModel: Model<Beer>);
    find(): Observable<Beer[] | void>;
    findById(id: number): Observable<Beer | void>;
    save(beer: CreateBeerDto): Observable<Beer>;
    findByIdAndUpdate(id: number, beer: UpdateBeerDto): Observable<Beer | void>;
    findByIdAndRemove(id: number): Observable<Beer | void>;
}
