import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // <app-root>
  templateUrl: './app.component.html', // chama o arquivo html
//  template: '<p> meu template </p>', caso seja algo pequeno tem essa outra forma
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
}
