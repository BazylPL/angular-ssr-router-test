import {
  trigger, animateChild, group,
  transition, animate, style, query, state
} from '@angular/animations';


export const routeChangeAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], {optional: true}),
      query(':enter', [
        style({opacity: '0'})
      ], {optional: true}),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('2250ms', style({opacity: '0'}))
        ], {optional: true}),
        query(':enter', [
          animate('2250ms', style({opacity: '1'}))
        ], {optional: true})
      ]),
      query(':enter', animateChild(), {optional: true}),
    ])
  ]);


export const blockInitialRenderAnimation =
  trigger(
    'blockInitialRenderAnimation',
    [
      transition(':enter', [])
    ]
  );


