import {Pipe, PipeTransform} from '@angular/core'; 


@Pipe({
    name: 'myfilter'
})

export class MyFilter implements PipeTransform{
    transform(value: any[], userSearch: string): any[]{
        console.log(userSearch );
       return userSearch ? 
       value.filter( product => product.productName.toLowerCase().startsWith(userSearch.toLowerCase()))
            : value;
    }


}

