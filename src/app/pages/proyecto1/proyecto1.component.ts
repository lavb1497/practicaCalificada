import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto1',
  templateUrl: './proyecto1.component.html',
  styleUrls: ['./proyecto1.component.css']
})
export class Proyecto1Component {
  numero1!:number;
  numero2!:number;
  operacion!:string;
  resultado0:string = "(No eligió operación)";
}