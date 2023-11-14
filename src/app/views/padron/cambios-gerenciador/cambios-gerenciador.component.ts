import { Component } from '@angular/core';

interface BackendIncome {
  id: number;
  cuilTitular: number;
  gerenciadorPlanAnterior: string;
  gerenciadorPlanNuevo: string;
  motivo: string;
  creado: Date;
  fecha: Date;
  creadoX: string;
}

@Component({
  selector: 'app-cambios-gerenciador',
  templateUrl: './cambios-gerenciador.component.html',
  styleUrls: ['./cambios-gerenciador.component.scss']
})
export class CambiosGerenciadorComponent {

  backendIncome: BackendIncome[] = [{
    id: 1,
    cuilTitular: 20271501774,
    creado: new Date('12/30/2022'),
    fecha: new Date('12/30/2022'),
    creadoX: "Nagito Komaeda - nhopekomaeda@osceara.com.ar",
    motivo: "CREACION DE AFILIADO",
    gerenciadorPlanAnterior: "--(Plan:B15)",
    gerenciadorPlanNuevo: "B15 - Boreal (sin plan)",
  },
  {
    id: 2,
    cuilTitular: 20271501774,
    creado: new Date('12/30/2022'),
    fecha: new Date('12/30/2022'),
    creadoX: "Hajime Hinata - hinatahajime@osceara.com.ar",
    motivo: "CREACION DE AFILIADO",
    gerenciadorPlanAnterior: "--(Plan:B15)",
    gerenciadorPlanNuevo: "B15 - Boreal (sin plan)",
  },
  {
    id: 3,
    cuilTitular: 20271501774,
    creado: new Date('12/30/2022'),
    fecha: new Date('12/30/2022'),
    creadoX: "Mikan Tsumiki - tsumikinurse@osceara.com.ar",
    motivo: "CREACION DE AFILIADO",
    gerenciadorPlanAnterior: "--(Plan:B15)",
    gerenciadorPlanNuevo: "B15 - Boreal (sin plan)",
  },
  {
    id: 4,
    cuilTitular: 20271501774,
    creado: new Date('12/30/2022'),
    fecha: new Date('12/30/2022'),
    creadoX: "Nagito Komaeda - nhopekomaeda@osceara.com.ar",
    motivo: "CREACION DE AFILIADO",
    gerenciadorPlanAnterior: "--(Plan:B15)",
    gerenciadorPlanNuevo: "B15 - Boreal (sin plan)",
  },]

  exportCSV(){

  }
}
