import { Component, OnInit } from '@angular/core';
import { IBeer } from './beer.model';
import { BeerService } from "./beer.service";

@Component({
    selector: 'app-beer ',
    templateUrl: './beer.component.html'
})
export class BeerComponent implements OnInit{
    title: string = 'Beer Search Page';
    showTable = false; // Can be showTable: boolean = false;
    beerSearch: string;    
    beerlist: IBeer[]; 
    beerCount: number;

    constructor(public beerService: BeerService) {
      }

    toggleImage(): void {
        this.showTable = !this.showTable;
    }

    updateBeerCount(beers: any[]) : any[]{
        if(!(beers === undefined))
            this.beerCount = beers.length;
        return beers;
    } 

    ngOnInit() {        
        this.beerService.getBeers()
          .subscribe((data) => this.beerlist = data);
          console.log( this.beerlist);
          //this.beerCount = this.beerlist.length;
      }

      dataRecive(message: string) {
       
        this.title = 'Beer Page>>> ' + message;
      }

}