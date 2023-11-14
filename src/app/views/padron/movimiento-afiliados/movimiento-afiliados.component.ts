import { Component } from '@angular/core';
interface BackendIncome {
  id: number;
  tipo: string;
  cuil: number;
  cuilTitular: number;
  parentesco: string;
  nombre: string;
  tipoMovimiento: string;
  ejecutadoTipo: string;
  ejecutadoDate: Date;
  fechaNormal: Date;
  cargado: Date;
  gerenciador: string;
  gerenciadorPlan: string | null;
  Reinformable: Date | null;
}

@Component({
  selector: 'app-movimiento-afiliados',
  templateUrl: './movimiento-afiliados.component.html',
  styleUrls: ['./movimiento-afiliados.component.scss']
})
export class MovimientoAfiliadosComponent {

  backendIncome: BackendIncome[] = [{
    id: 1,
    tipo: "BAJA",
    cuil: 20427062520,
    cuilTitular: 20271501774,
    parentesco: "Hijo < 21 años",
    nombre: "Junko Enoshima",
    tipoMovimiento: "MAYORIA DE EDAD (21 Años CUMPLICOS/NO DISCA)",
    ejecutadoTipo: "Ejecutado",
    ejecutadoDate: new Date('12/30/2022'),
    fechaNormal: new Date('12/30/2022'),
    cargado: new Date('12/30/2022 09:09'),
    gerenciador: "B35 - Nobis Salud",
    gerenciadorPlan: null,
    Reinformable: null,
  },
  {
    id: 2,
    tipo: "ALTA",
    cuil: 20427062520,
    cuilTitular: 20271501774,
    parentesco: "Hijo < 21 años",
    nombre: "Junko Enoshima",
    tipoMovimiento: "MAYORIA DE EDAD (21 Años CUMPLICOS/NO DISCA)",
    ejecutadoTipo: "Ejecutado",
    ejecutadoDate: new Date('12/30/2022'),
    fechaNormal: new Date('12/30/2022'),
    cargado: new Date('12/30/2022 09:09'),
    gerenciador: "B35 - Nobis Salud",
    gerenciadorPlan: "B32",
    Reinformable: new Date('09/12/2021 00:00'),
  },
  {
    id: 3,
    tipo: "BAJA",
    cuil: 20427062520,
    cuilTitular: 20271501774,
    parentesco: "Hijo < 21 años",
    nombre: "Junko Enoshima",
    tipoMovimiento: "MAYORIA DE EDAD (21 Años CUMPLICOS/NO DISCA)",
    ejecutadoTipo: "Ejecutado",
    ejecutadoDate: new Date('12/30/2022'),
    fechaNormal: new Date('12/30/2022'),
    cargado: new Date('12/30/2022 09:09'),
    gerenciador: "B35 - Nobis Salud",
    gerenciadorPlan: null,
    Reinformable: new Date('09/12/2021 00:00'),
  },
  {
    id: 4,
    tipo: "BAJA",
    cuil: 20427062520,
    cuilTitular: 20271501774,
    parentesco: "Hijo < 21 años",
    nombre: "Junko Enoshima",
    tipoMovimiento: "MAYORIA DE EDAD (21 Años CUMPLICOS/NO DISCA)",
    ejecutadoTipo: "Ejecutado",
    ejecutadoDate: new Date('12/30/2022'),
    fechaNormal: new Date('12/30/2022'),
    cargado: new Date('12/30/2022 09:09'),
    gerenciador: "B35 - Nobis Salud",
    gerenciadorPlan: "B32",
    Reinformable: null,
  },]

  exportCSV(){

  }

}
