import {Pipe, PipeTransform} from '@angular/core'; 
import { IBeer } from './beer.model';


@Pipe({
    name: 'beerfilter'
})

export class BeerFilter implements PipeTransform{
    transform(value: IBeer[], userSearch: string): any[]{
        console.log(userSearch );
       return userSearch ? 
       value.filter( beer => beer.name.toLowerCase().startsWith(userSearch.toLowerCase()))
            : value;
    }


}

