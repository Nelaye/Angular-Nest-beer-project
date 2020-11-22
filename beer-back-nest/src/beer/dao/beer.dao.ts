import { Injectable } from "@nestjs/common";
import { Model, MongooseDocument } from 'mongoose';
import { Beer } from '../schemas/beer.schema';
import { InjectModel } from '@nestjs/mongoose';
import { from, Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { CreateBeerDto } from '../dto/create-beer.dto';
import { UpdateBeerDto } from '../dto/update-beer.dto';

@Injectable()
export class BeerDao {
    /**
     * Class constructor
     *
     * @param {Model<Beer>} _beerModel instance of the model representing a Beer
     */
    constructor(@InjectModel(Beer.name) private readonly _beerModel: Model<Beer>) {
    }

    /**
     * Call mongoose method, call toJSON on each result and returns Beer[] or undefined
     *
     * @return {Observable<Beer[] | void>}
     */
    find(): Observable<Beer[] | void> {
        return from(this._beerModel.find({}))
            .pipe(
                map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
            );
    }

    /**
     * Returns one beer of the list matching id in parameter
     *
     * @param  {number} id of the beer in the db
     * @return {Observable<Beer | void>}
     * */
    findById(id: number): Observable<Beer | void> {
        return from(this._beerModel.findById(id))
            .pipe(
                map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
            );
    }

    /**
     * Check if beer already exists with index and add it in beer list
     *
     * @param {CreateBeerDto} beer to create
     * @return {Observable<Beer>}
     */
    save(beer: CreateBeerDto): Observable<Beer> {
        return from(new this._beerModel(beer).save())
            .pipe(
                map((doc: MongooseDocument) => doc.toJSON()),
            );
    }

    /**
     * Update a beer in beer list
     *
     * @param {number} id
     * @param {UpdateBeerDto} beer
     * @return {Observable<Beer | void>}
     */
    findByIdAndUpdate(id: number, beer: UpdateBeerDto): Observable<Beer | void> {
        return from(this._beerModel.findByIdAndUpdate(id, beer, {new: true, runValisators: true}))
            .pipe(
                map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
            );
    }

    /**
     * Delete a beer in beer list
     *
     * @param {number} id
     * @return {Observable<Beer | void>}
     */
    findByIdAndRemove(id: number): Observable<Beer | void> {
        return from(this._beerModel.findByIdAndRemove(id))
            .pipe(
                map((doc: MongooseDocument) => !!doc ? doc.toJSON : undefined),
            );
    }
}