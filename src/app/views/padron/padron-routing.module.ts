import { MovimientoAfiliadosComponent } from './movimiento-afiliados/movimiento-afiliados.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CambiosGerenciadorComponent } from './cambios-gerenciador/cambios-gerenciador.component';
import { DocumentacionRespaldatoriaComponent } from './documentacion-respaldatoria/documentacion-respaldatoria.component';
import { AfiliadosEmpadronadosComponent } from './afiliados-empadronados/afiliados-empadronados.component';
import { AltaAfiliadosComponent } from './alta-afiliados/alta-afiliados.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Padron',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'movimientoafiliados',
      },
      {
        path: 'movimientoafiliados',
        component: MovimientoAfiliadosComponent,
        data: {
          title: 'Movimiento de Afiliados',
        },
      },
      {
        path: 'cambiosgerenciador',
        component: CambiosGerenciadorComponent,
        data: {
          title: 'Cambios de Gerenciador',
        },
      },
      {
        path: 'documentacionrespaldatoria',
        component: DocumentacionRespaldatoriaComponent,
        data: {
          title: 'Documentacion Respaldatoria',
        },
      },
      {
        path: 'afiliadosempadronados',
        component: AfiliadosEmpadronadosComponent,
        data: {
          title: 'Afiliados Empadronados',
        },
      },
      {
        path: 'altaafiliados',
        component: AltaAfiliadosComponent,
        data: {
          title: 'Alta de Afiliados',
        },
      }
    ],
  },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PadronRoutingModule { }
