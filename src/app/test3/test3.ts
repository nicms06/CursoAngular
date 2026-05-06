import { Component, DoCheck, OnChanges, OnInit, SimpleChanges, Input, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-test3',
  imports: [CommonModule, FormsModule],
  templateUrl: './test3.html',
  styleUrl: './test3.scss',
})
export class Test3 implements OnInit, OnChanges, DoCheck, OnDestroy{

  @Input() name : any;

  constructor(){
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngOnDestroy() {
    console.log("On destroy");
  }

}
