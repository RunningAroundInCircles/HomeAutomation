import { Component, HostListener, ElementRef, Directive, Output, EventEmitter  } from '@angular/core';
import { Animation } from './animation/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[Animation.navTrigger]
})

export class AppComponent {
  
  ///State of side navigation bar
  private expanded = false;
  private expandedState = 'collapsed';


  constructor() {}

  ///Method to toggle side navitagion bar
  private toggleNav()
  {
    this.expandedState = this.expanded ? 'collapsed' : 'expanded';
    this.expanded = !this.expanded;
  }
}
