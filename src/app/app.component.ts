import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // <app-root>
  templateUrl: './app.component.html', // chama o arquivo html
//  template: '<p> meu template </p>', caso seja algo pequeno tem essa outra forma
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // any[] = []; => []
  // any[];      => undefined
  // any é qualquer coisa / public nome_variavel: tipo_variavel

  public todos: any [] = [];
  public title: String = 'Minhas Tarefas';

  constructor() {
    this.todos.push('meu nome é aron');
    this.todos.push('meu nome é vinicius');
    this.todos.push('meu nome é custodio');
    this.todos.push('meu nome é camossi');
    this.todos.push('em');
    this.todos.push(2001);
    this.todos.push({ message: 'teste message' });
    this.todos.push(new Date());  
  }
}
