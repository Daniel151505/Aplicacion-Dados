import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion-Dados';
  dadoIzquierda = '../assets/images/dice1.png'
  dadoDerecha = '../assets/images/dice2.png'
  numero1: number;
  nnumero2: number;
}
