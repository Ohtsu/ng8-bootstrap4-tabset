import { Component } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbTabsetConfig]
})
export class AppComponent {
  title = 'ng8-bootstrap4-tabset';
  constructor(config: NgbTabsetConfig) {
    // customize default values of tabsets used by this component tree
    config.orientation = 'horizontal';
    config.justify = 'center';
    config.type = 'tabs';
  }
}
