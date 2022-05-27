import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { BuscarFrutaComponent } from './componentes/buscar-fruta/buscar-fruta.component';
import { ListarFrutasComponent } from './componentes/listar-frutas/listar-frutas.component';
import { MostrarFrutaComponent } from './componentes/mostrar-fruta/mostrar-fruta.component';
import { RegistrarFrutaComponent } from './componentes/registrar-fruta/registrar-fruta.component';
import { FrutasService } from './frutas/frutas.service';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModificarComponent,
    BuscarFrutaComponent,
    ListarFrutasComponent,
    MostrarFrutaComponent,
    RegistrarFrutaComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule


   
  ],
  providers: [
    FrutasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
