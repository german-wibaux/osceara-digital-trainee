import { MovimientoAfiliadosComponent } from './movimiento-afiliados/movimiento-afiliados.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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
