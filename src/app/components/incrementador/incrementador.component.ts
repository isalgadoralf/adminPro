import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgres') txtProgres: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgres.nativeElement.focus();
  }

  onChange(value: number) {
    // let elemtHTML:any = document.getElementsByName('progreso')[0];
    // console.log(this.txtProgres)
    if (value >= 100) {
      this.progreso = 100;
    } else if (value <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = value;
    }
    // elemtHTML.value = this.progreso;
    this.txtProgres.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

}
