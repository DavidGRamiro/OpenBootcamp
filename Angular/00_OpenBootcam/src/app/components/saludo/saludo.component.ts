import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],

})
export class SaludoComponent implements OnInit , OnDestroy, OnChanges {

  //Emitimos informacion de padre a hijo
  @Input() nombre : String = "Compañero";

  //Emitimos informacion de hijo a padre
  //Podemos emitir al componente padre cualquier contenido para que este lo manipule.
  @Output() mensajeEmitter : EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() : void {
    //Instrucciones previas a la renderización del componente
    console.log("ngOinit del componente Saludo")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("El componente Saludo ha cambiado")
  }
  
  constructor() { }
  ngOnDestroy(): void {
    console.log("El componente Saludo se va a eliminar");
  }


  //Evento para gestionar un evento de tipo click en el DOM y enviar texto al componente padre
  enviarMensajePadre() : void{
    this.mensajeEmitter.emit(`Hola ${this.nombre}, BIENVENIDO`);
  }

  //Orden del ciclo de vida de los componentes.
  //1º NgOnchanges
  //2º NgOnInit
  //3º NgAfterContentInit
  //4º NgAfterContentChecked
  //5º NgAfterViewInit
  //6º NgAfterViewChecked
  //7º NgAfterContentChecked
  //8º NgAfterViewChecked
  //9º NgOnDestroy
  
}
