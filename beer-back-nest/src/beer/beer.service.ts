import { ConflictException, Injectable, NotFoundException, UnprocessableEntityException} from "@nestjs/common";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { CreateBeerDto } from './dto/create-beer.dto';
import { UpdateBeerDto } from  './dto/update-beer.dto';
import { BeerEntity } from './entities/beer.entity';
import { BeerDao } from "./dao/beer.dao";

@Injectable()
export class BeerService {

    /**
     * Class constructor
     *
     * @param {BeerDao} _beerDao instance of the DAO
     */
    constructor(private readonly _beerDao: BeerDao) {
    }

    /**
     * Returns all existing beer in the list
     *
     * @returns {Observable<BeerEntity[] | void>}
     */
    findAll(): Observable<BeerEntity[] | void> {
        return this._beerDao.find().pipe(
            map(_ => !!_ ? _.map(__ => new BeerEntity(__)) : undefined),
        );
    }

    /**
     * Returns randomly one beer of the list
     *
     * @returns {Observable<BeerEntity | void>}
     */
    findRandom(): Observable<BeerEntity | void> {
        return this._beerDao.find().pipe(
            map(_ => !!_ ? _[ Math.round(Math.random() * _.length) ] : undefined),
            map(_ => !!_ ? new BeerEntity(_) : undefined),
        );
    }

    /**
     * Returns one beer of the list matching id in parameter
     *
     * @param {string} id of th beer
     * @returns {Observable<BeerEntity>}
     */
    findOne(id: string): Observable<BeerEntity> {
        return this._beerDao.findById(id).pipe(
            catchError(e => throwError(new UnprocessableEntityException(e.message))),
            mergeMap(_ =>
                !!_ ?
                    of(new BeerEntity(_)) : throwError(new NotFoundException(`Beer with id '${id}' not found`)),
            ),
        );
    }

    /**
     * Check if beer already exists and add it in beer list
     *
     * @param beer to create
     * @returns {Observable<BeerEntity>}
     */
    create(beer: CreateBeerDto): Observable<BeerEntity>{
        return this._addBeer(beer)
            .pipe(
                mergeMap(_ => this._beerDao.save(_)),
                catchError(e =>
                    e.code === 11000 ?
                        throwError(
                            new ConflictException(`Beer with name '${beer.name}' already exists`),
                        ) :
                        throwError(new UnprocessableEntityException(e.message)),
                ),
                map(_ => new BeerEntity(_)),
            );
    }

    /**
     * Update a beer in beer list
     *
     * @param {string} id of the beer to update
     * @param beer data to update
     * @returns {Observable<BeerEntity>}
     */
    update(id: string, beer: UpdateBeerDto): Observable<BeerEntity> {
        return this._beerDao.findByIdAndUpdate(id, beer)
            .pipe(
                catchError(e =>
                    e.code === 11000 ?
                        throwError(
                            new ConflictException(`Beer with name '${beer.name}' already exists`),
                        ) :
                        throwError(new UnprocessableEntityException(e.message)),
                ),
                mergeMap(_ =>
                    !!_ ?
                        of(new BeerEntity(_)) :
                        throwError(new NotFoundException(`Beer with id '${id}' not found`)),
                ),
        );
    }

    /**
     * Deletes one beer in beer list
     *
     * @param {string} id of the beer to delete
     * @returns {Observable<void>}
     */
    delete(id: string): Observable<void> {
        return this._beerDao.findByIdAndRemove(id)
            .pipe(
                catchError(e => throwError(new UnprocessableEntityException(e.message))),
                mergeMap(_ =>
                !!_ ?
                    of(undefined) :
                    throwError(new NotFoundException(`Beer with id '${id}' not found`)),
                ),
            );
    }

    /**
     * Add beer with good data in beer list
     *
     * @param beer to add
     * @returns {Observable<CreateBeerDto>}
     * @private
     */
    private _addBeer(beer: CreateBeerDto): Observable<CreateBeerDto> {
        return of(beer)
            .pipe(
                map(_ =>
                    Object.assign(_, {

                    }),
                ),
            );
    }
}