import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule
} from '@coreui/angular';

// views
import { MovimientoAfiliadosComponent } from './movimiento-afiliados/movimiento-afiliados.component';

// Components Routing
import { PadronRoutingModule } from './padron-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { CambiosGerenciadorComponent } from './cambios-gerenciador/cambios-gerenciador.component';
import { DocumentacionRespaldatoriaComponent } from './documentacion-respaldatoria/documentacion-respaldatoria.component';

@NgModule({
  declarations: [
    MovimientoAfiliadosComponent,
    CambiosGerenciadorComponent,
    DocumentacionRespaldatoriaComponent
  ],
  imports: [
    PadronRoutingModule,
    CommonModule,
    CommonModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
  ]
})
export class PadronModule { }
