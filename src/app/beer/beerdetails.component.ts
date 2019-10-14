import { Component, OnInit } from '@angular/core';
import { IBeer } from './beer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerService } from './beer.service';

@Component({
    templateUrl: './beerdetails.component.html',
    styleUrls: ['./beerdetails.component.css']
})

export class BeerDetailsComponent implements OnInit{

    id: number;
    details: IBeer[];

    constructor(private route: ActivatedRoute,
                private beerService: BeerService,
                private router: Router) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.beerService.getBeerDetails(this.id)
            .subscribe((data) => this.details = data);
    }

    onBack():void {
        this.router.navigate(["beers"]);

    }
}