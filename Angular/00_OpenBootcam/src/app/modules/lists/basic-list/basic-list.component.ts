import { Component , OnInit } from '@angular/core';

//Tipo basico para ejemplo
export type Producto = {
  nombre : string;
  precio : number;
  descripcion: string;
}


@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.css']
})
export class BasicListComponent implements OnInit {

  cargandoElementos : boolean = true;
  opcion: number = 0;

  listaElementos : Producto[] = [
    {nombre: 'Leche', precio: 8, descripcion: 'Leche entera'},
    {nombre: 'Pan', precio: 10, descripcion: 'Pan de molde'},
    {nombre: 'Queso', precio: 20, descripcion: 'Queso manchego'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
  
  cambiarCargando(){
    this.cargandoElementos = !this.cargandoElementos;
  }

  escogerOpcion(opcionEscogida:number){
    this.opcion = opcionEscogida; //El valor cambia. Implica un cambio en los elementos renderizados
  }
}
