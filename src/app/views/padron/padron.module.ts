import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// views
import { MovimientoAfiliadosComponent } from './movimiento-afiliados/movimiento-afiliados.component';

// Components Routing
import { PadronRoutingModule } from './padron-routing.module';


@NgModule({
  declarations: [
    MovimientoAfiliadosComponent
  ],
  imports: [
    PadronRoutingModule,
    CommonModule,
  ]
})
export class PadronModule { }
