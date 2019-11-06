import { Component, OnChanges, Input,
        Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    starWidth: number;
    totalWidth = 100;
    maxRating = 7;
    @Input() rating ;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges() {
        console.log("ngOnChanges");
        this.calculateStarWidth();
    }

    calculateStarWidth(){ 
        if(this.rating === undefined){
            this.rating = 0;
        }       
        if(this.rating > this.maxRating){
            this.rating =  2*this.maxRating - this.rating;
        }
        this.starWidth = this.rating * this.totalWidth / this.maxRating; 
    }
    onStar(event): void {
        this.rating = this.maxRating * (event.clientX - 1192)/this.totalWidth;  
        this.calculateStarWidth();
        this.ratingClicked.emit(`The rating clciked is ${this.rating}`);
    }
}




/*
86/6*1.3
*/
