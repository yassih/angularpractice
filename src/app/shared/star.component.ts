import { Component , OnChanges, Input, Output, EventEmitter} from "../../../node_modules/@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html' ,
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{

    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = 
    new EventEmitter<string>();

    ngOnChanges(): void{
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`This is ${this.rating}`);
        //console.log(`This ${this.rating} was click`);
    }
}