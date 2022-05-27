import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarFrutaComponent } from './componentes/buscar-fruta/buscar-fruta.component';
import { ListarFrutasComponent } from './componentes/listar-frutas/listar-frutas.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { MostrarFrutaComponent } from './componentes/mostrar-fruta/mostrar-fruta.component';
import { RegistrarFrutaComponent } from './componentes/registrar-fruta/registrar-fruta.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {  path: '', component: MainComponent,
        children:[{
          path: '', component: RegistrarFrutaComponent,
        },{
          path: 'buscar_fruta', component: BuscarFrutaComponent,
        },{
          path: 'mostrar_fruta', component: MostrarFrutaComponent,
        },{
          path: 'modificar_fruta', component: ModificarComponent,
        },{
          path: 'listar_frutas', component: ListarFrutasComponent,
        }
      ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
