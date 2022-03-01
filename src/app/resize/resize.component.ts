import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: 'app-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.css'],
  animations:[
    trigger('resizeState',[
      state('base',style({
        height: '*'
      })),
      state('expansion',style({
        height: '0px'
      })),
      transition('base <=> expansion',animate('600ms'))
    ])
  ]
})
export class ResizeComponent{
  base = true;
  constructor() { }
  get stateName(){
    return this.base ? 'base' : 'expansion'
  }
  toggle(){
    this.base = !this.base;
  }

}
