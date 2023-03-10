import { animation, style, animate, trigger, transition, useAnimation, query, animateChild, group, sequence , stagger} from '@angular/animations';

export const transitionAnimation = animation([
  style({
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}'
  }),
  animate('{{ time }}')
]);


export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          stagger(500, [
            animate('300ms ease-out', style({ left: '100%' })),
          ])
        ], { optional: true }),
        query(':enter', [
          stagger(500, [
            animate('300ms ease-out', style({ left: '0%' }))
          ]),
        ], { optional: true }),
      ]),
    ]),
  ]);
