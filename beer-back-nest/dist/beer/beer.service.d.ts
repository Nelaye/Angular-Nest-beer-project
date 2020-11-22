import { Observable } from "rxjs";
import { CreateBeerDto } from './dto/create-beer.dto';
import { UpdateBeerDto } from './dto/update-beer.dto';
import { BeerEntity } from './entities/beer.entity';
import { BeerDao } from "./dao/beer.dao";
export declare class BeerService {
    private readonly _beerDao;
    constructor(_beerDao: BeerDao);
    findAll(): Observable<BeerEntity[] | void>;
    findRandom(): Observable<BeerEntity | void>;
    findOne(id: number): Observable<BeerEntity>;
    create(beer: CreateBeerDto): Observable<BeerEntity>;
    update(id: number, beer: UpdateBeerDto): Observable<BeerEntity>;
    delete(id: number): Observable<void>;
    private _addBeer;
}
