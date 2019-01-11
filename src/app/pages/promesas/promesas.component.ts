import { Component, OnInit } from '@angular/core';
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {



    this.contarPromesa().then(
      mensaje  => console.log('Termino',mensaje)
    )
      .catch( error => console.error('Error en la promesa',error));

  }

  ngOnInit() {
  }
  contarPromesa(): Promise<boolean>{

    return new Promise( ( resolver, reject )=>{
      let contador = 0;

      let intervalo = setInterval( () => {
        contador +=1;
        console.log(contador);
        if(contador === 5){
          resolver(true);
          // reject('Simple error');
          clearInterval(intervalo);
        }

      },1000 );

    });

  }
}
