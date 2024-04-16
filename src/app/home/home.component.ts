import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0 })),
      ]),
    ]),
    trigger('imageAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('1s ease-out', style({ transform: 'translateY(0)' })),
      ]),
    ]),
  ]
})
export class HomeComponent {}
