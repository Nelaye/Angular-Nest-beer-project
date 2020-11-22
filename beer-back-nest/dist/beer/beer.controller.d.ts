import { BeerService } from "./beer.service";
import { Observable } from 'rxjs';
import { CreateBeerDto } from "./dto/create-beer.dto";
import { UpdateBeerDto } from "./dto/update-beer.dto";
import { HandlerParams } from "./validators/handler-params";
import { BeerEntity } from "./entities/beer.entity";
export declare class BeerController {
    private readonly _beerService;
    constructor(_beerService: BeerService);
    findAll(): Observable<BeerEntity[] | void>;
    findRandom(): Observable<BeerEntity | void>;
    findOne(params: HandlerParams): Observable<BeerEntity>;
    create(createBeerDto: CreateBeerDto): Observable<BeerEntity>;
    update(parames: HandlerParams, updateBeerDto: UpdateBeerDto): Observable<BeerEntity>;
    delete(params: HandlerParams): Observable<void>;
}
