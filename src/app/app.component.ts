import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rush-task-creator';

  data = [
    {
      name: 'Banned Mids',
      site: 'footlocker',
      oneprofper: false,
      dyndelay: false,
      v6proxy: false,
      rotatetask: false,
      count: 10,
    },
    {
      name: 'card2',
      site: 'champssports',
      oneprofper: true,
      dyndelay: true,
      v6proxy: true,
      rotatetask: true,
      count: 20,
    }
  ]

  profiles = [
    "amex",
    "citi"
  ]
}
