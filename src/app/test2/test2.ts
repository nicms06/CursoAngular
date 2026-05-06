import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test2',
  imports: [CommonModule, FormsModule],
  templateUrl: './test2.html',
  styleUrl: './test2.scss',
})
export class Test2 {

  @Input('status') statusTest: string = 'libre';
  @Input() name: string | undefined;
  @Input() lastName: string | undefined;
  @Output() onSendData = new EventEmitter<any>();

  myVar = 'hola';

  constructor(){}

  onShowData(){
    this.onSendData.emit('general data ' + this.name + ' ' + this.lastName);
  }

  test0(event : any){
    console.log('event click', event);
    this.myVar = 'Hola mundo';
  }


}
