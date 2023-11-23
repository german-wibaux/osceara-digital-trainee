import { Component } from '@angular/core';

interface BackendIncome {
  id: number;
  creado: Date;
  afiliadoCUIL: number;
  afiliadoText: string;
  gerenciador: string;
  descripcion: string;
  usuario: string;
}

@Component({
  selector: 'app-documentacion-respaldatoria',
  templateUrl: './documentacion-respaldatoria.component.html',
  styleUrls: ['./documentacion-respaldatoria.component.scss']
})
export class DocumentacionRespaldatoriaComponent {

  backendIncome: BackendIncome[] = [{
    id: 1,
    creado: new Date('12/30/2022'),
    afiliadoCUIL: 20271501774,
    afiliadoText: "BELLA ADOLFINA",
    gerenciador: "B15 - Boreal",
    descripcion: "DOCUMENTACION BAJA HIJA",
    usuario: "German",
  },
  {
    id: 2,
    creado: new Date('12/30/2022'),
    afiliadoCUIL: 20271501774,
    afiliadoText: "BELLA ADOLFINA",
    gerenciador: "B15 - Boreal",
    descripcion: "REINGRESO A OSCEARA (SSS)",
    usuario: "German",
  },
  {
    id: 3,
    creado: new Date('12/30/2022'),
    afiliadoCUIL: 20271501774,
    afiliadoText: "BELLA ADOLFINA",
    gerenciador: "B15 - Boreal",
    descripcion: "NOTA DE BAJA CONCUBINA",
    usuario: "German",
  },
  {
    id: 4,
    creado: new Date('12/30/2022'),
    afiliadoCUIL: 20271501774,
    afiliadoText: "BELLA ADOLFINA",
    gerenciador: "B15 - Boreal",
    descripcion: "ANULACION DE OPCION SSS",
    usuario: "German",
  },]

  exportCSV(){

  }
}
