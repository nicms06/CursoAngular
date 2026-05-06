import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.scss',
})
export class Contador {
  @Input() etiqueta: string = '';
  @Output() pulsado = new EventEmitter<any>();

  @Input() etiqueta2: string = '';
  @Output() borrado = new EventEmitter<any>();

  constructor() {}

  notificarPadre(){
    this.pulsado.emit();
  }

  notificarBorrado(){
    this.borrado.emit();
  }
}

