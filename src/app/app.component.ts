import {Component} from '@angular/core';
import {routeChangeAnimation} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeChangeAnimation]
})
export class AppComponent {
  title = 'ssr-router-test';
}
