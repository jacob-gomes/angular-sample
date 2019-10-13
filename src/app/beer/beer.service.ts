import { Injectable } from '@angular/core';
import { IBeer } from './beer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class BeerService {


    private beerUrl = 'https://api.punkapi.com/v2/beers';
    constructor(private http: HttpClient) {}

    getBeers(): Observable<IBeer[]> {
        console.log("In getBeers");
        return  this.http.get<IBeer[]>(this.beerUrl);
    }
    getBeerDetails(id: number): Observable<IBeer[]>  {
        return  this.http.get<IBeer[]>('${this.beerUrl}/${id}');
    }
}