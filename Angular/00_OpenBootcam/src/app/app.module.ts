import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';

//Modulo personalizado que exporta componentes de tipo Lista
import { ListsModule } from './modules/lists/lists.module';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Importamos nuestro modulo personalizado.
    ListsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
