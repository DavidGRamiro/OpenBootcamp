import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Selector en nuestro HTML
  templateUrl: './app.component.html', //Ruta de nuestro HTML
  styleUrls: ['./app.component.css'], //Estilos de la página
  
})
export class AppComponent {
  title = 'Hola mundo'; //Variables que se renderizan en HTML
  usuario = '@MobyDid';


  //Esta función se ejecuta cuando en el hijo SaludoComponent se pulse el botón
  
  recibirMensajeHijo(evento:string){
    alert(evento);
  }

}
