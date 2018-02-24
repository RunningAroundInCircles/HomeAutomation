import { trigger, state, style, transition, animate } from '@angular/animations';

export const Animation = 
{
    navTrigger: trigger('navTrigger',
    [
        state('expanded', style({marginLeft: '0px'})),
        state('collapsed', style({marginLeft: '-145px'})),
        transition('collapsed => expanded', animate('200ms ease-in')),
        transition('expanded => collapsed', animate('200ms ease-out'))
    ]),

    pustLeftTrigger: trigger('pustLeftTrigger',
    [
        state('expanded', style({marginLeft: '200px'})),
        state('collapsed', style({marginLeft: '50px'})),
        transition('collapsed => expanded', animate('300ms ease-in')),
        transition('expanded => collapsed', animate('300ms ease-out'))
    ]),

    fadeInCloseBotton: trigger('fadeInCloseBotton',
    [
        state('expanded', style({opacity: '1'})),
        state('collapsed', style({opacity: '0'})),
        transition('collapsed => expanded', animate('.6s', style({opacity: 1})))
    ])
}