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
}