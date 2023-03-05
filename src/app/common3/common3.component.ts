import { Component } from '@angular/core';
import {  style, animate, trigger, transition,  query, stagger} from '@angular/animations';

@Component({
  selector: 'app-common3',
  templateUrl: './common3.component.html',
  styleUrls: ['./common3.component.scss'],
  animations:[
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter' , [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ],
})
export class Common3Component {

  items: number[] = [];

  showItems() {
    this.items = [ 0 , 1 , 2 , 3 , 4 ];
  }

  hideItems() {
    this.items = [];
  }

  addItem() {
    this.items.push(this.items.length);
  }

  toggle() {
    this.items.length ? this.hideItems() : this.showItems();
  }

}
