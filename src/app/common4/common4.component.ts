import { Component,  OnInit, EventEmitter, Input, Output } from '@angular/core';
import {animate, state, style, trigger} from "@angular/animations";
import  {transition} from "@angular/animations";

@Component({
  selector: 'app-common4',
  templateUrl: './common4.component.html',
  styleUrls: ['./common4.component.scss'],
  animations: [
    trigger('changeAni' , [
      state('false', style({
        opacity: 0.5,
        backgroundColor: 'red',
        transition: '0.5s ease all'
      })),
      state('true', style({
        opacity: 0.1,
        backgroundColor: 'blue',
        transition: '0.5s ease all'
      })),
      transition('* <=> *', [
        animate('0.5s')
      ])
  ]),
]
})



export class Common4Component {

  @Input() titleProp: string = 'x';
  @Output() titleOut = new EventEmitter<String>();

  changeAniVar = false;

  titleChange() {
    this.titleOut.emit('NEW TITLE');
  }

  ngOnChanges() {
    this.changeAniVar = !this.changeAniVar;

    console.log('ngOnChanges');
  }

}
