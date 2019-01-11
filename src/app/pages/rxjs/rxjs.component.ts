import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {retry, map,filter} from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit,OnDestroy {
  subscription:Subscription;
  constructor() {

    this.subscription = this.contadorObservable().subscribe(
      numero => { console.log( 'Subs', numero ); },
      error => { console.log( 'Error', error ); },
      ()  => { console.log( 'Completdo'); }
    );



  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
     console.log('Saliendo de rxj')
    this.subscription.unsubscribe();
  }

  contadorObservable():Observable<any>{

    return new Observable(observer => {

      let contador = 0;

      let intervalo = setInterval(() => {

        contador += 1;

        const salida ={
            valor:contador
        };

        observer.next(salida);

        // if (contador === 5) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.error("no esperado");
        // }
      }, 1000);

    }).pipe(

      map(  resp =>{
          // @ts-ignore
        return resp.valor;
      }),
      filter( (valor,index)=> {
        console.log('filet',valor,index);
        if( (valor % 2)===0 ){

          return true;
        }else{
          return false;
        }
      })

    );
  }


}
