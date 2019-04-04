import { Component } from '@angular/core';
import {STAR_WARS_CAST} from './starwars';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  cast = STAR_WARS_CAST;
}
