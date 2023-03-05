import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ChildrenOutletContexts} from "@angular/router";
import { transitionAnimation, slideInAnimation } from './animations';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation,
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [

    slideInAnimation,

    trigger('openClose', [
      state('open', style({
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        opacity: 0.5,
        backgroundColor: 'blue',
        color: 'white'
      })),
      transition('open <=> closed', [
        animate('0.35s')
      ]),
    ]),

    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.3s', style({ opacity: 0 }))
      ])
    ]),

    trigger('openCloseImported', [
      transition('open <=> closed', [
        useAnimation(transitionAnimation, {
          params: {
            opacity: 1,
            backgroundColor: 'white',
            time: '0.3s'
          }
        })
      ])
    ])

  ],
})
export class AppComponent {

  constructor(
    private route: ActivatedRoute,
    private contexts: ChildrenOutletContexts,

  ) { }
  title = 'aniTests';
  showComponent3 = false;
  titleUpdate = (_reset:any) => {
    this.title = this.title + ' add this';
    this.showComponent3 = !this.showComponent3;

    if(_reset){
      this.title = _reset;
    }
  }

  getRouteAnimationData() {
    const primContext = this.contexts.getContext('primary');
    const aniName = primContext?.route?.snapshot?.data?.['animation']
    return aniName;
  }

  // ngOnInit() {
  OnInit() {
    this.route.url.subscribe((url) => {

      console.log(url);

      this.title = this.title + ' add this ROUTE ';
      this.showComponent3 = false;
    });
  }

}
