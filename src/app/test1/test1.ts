import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test1',
  imports: [],
  templateUrl: './test1.html',
  styleUrl: './test1.scss',
  standalone: true
})
export class Test1 {

  @Input('status') statusTest: string = 'working';

  @Output() sendData = new EventEmitter<any>();

  constructor() {}

  onClickTest(){
    console.log('EVENT CLICK: ');

    this.sendData.emit({
      name: 'Nicolás',
      status: 'Ocupado'
    });

    console.log('EVENT CLICK DESPUES: ');

  }
}
