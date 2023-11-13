import { Component } from '@angular/core';

interface BackendIncome {
  id: number;
  activo: boolean;
  cuil: number;
  cuilTitular: number;
  nroAfiliado: number | null;
  nombre: string;
  gerenciador: string;
  parentesco: string;
  categoria: string | null;
  ultimaAltaReferenciario: Date;
  tipoReferenciario: string;
  situacionRevista: string;
  nacimiento: Date;
  edad: number;
  provincia: string;
  localidad: string;
  fechaUltimaBajaFormal: Date | null;
  vencimientoCertificadoEstudios: Date | null;
  cuilAnterior: number | null;
  vencimientoPMI: Date | null;
}

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.scss']
})

export class TableTestComponent {
  backendIncome: BackendIncome[] = [{
    id: 1,
    activo: true,
    cuil: 11445002332,
    cuilTitular: 11332201232,
    nroAfiliado: null,
    nombre: "Jill Valentine",
    gerenciador: "B26-OSCEARA Cordoba/Sin",
    parentesco: "Hijo < 21 años",
    categoria: null,
    ultimaAltaReferenciario: new Date('01/11/2022'),
    tipoReferenciario: "00-RELACION",
    situacionRevista: "0-Recibe haberes",
    nacimiento: new Date('02/21/2002'),
    edad: 20,
    provincia: "Cordoba",
    localidad: "CORDOBA",
    fechaUltimaBajaFormal: null,
    vencimientoCertificadoEstudios: null,
    cuilAnterior: null,
    vencimientoPMI: null
  },{
    id: 1,
    activo: false,
    cuil: 11445002332,
    cuilTitular: 11332201232,
    nroAfiliado: null,
    nombre: "Jill Valentine",
    gerenciador: "B26-OSCEARA Cordoba/Sin",
    parentesco: "Hijo < 21 años",
    categoria: null,
    ultimaAltaReferenciario: new Date('01/11/2022'),
    tipoReferenciario: "00-RELACION",
    situacionRevista: "0-Recibe haberes",
    nacimiento: new Date('02/21/2002'),
    edad: 20,
    provincia: "Cordoba",
    localidad: "CORDOBA",
    fechaUltimaBajaFormal: null,
    vencimientoCertificadoEstudios: null,
    cuilAnterior: null,
    vencimientoPMI: null
  },{
    id: 1,
    activo: true,
    cuil: 11445002332,
    cuilTitular: 11332201232,
    nroAfiliado: null,
    nombre: "Jill Valentine",
    gerenciador: "B26-OSCEARA Cordoba/Sin",
    parentesco: "Hijo < 21 años",
    categoria: null,
    ultimaAltaReferenciario: new Date('01/11/2022'),
    tipoReferenciario: "00-RELACION",
    situacionRevista: "0-Recibe haberes",
    nacimiento: new Date('02/21/2002'),
    edad: 20,
    provincia: "Cordoba",
    localidad: "CORDOBA",
    fechaUltimaBajaFormal: null,
    vencimientoCertificadoEstudios: null,
    cuilAnterior: null,
    vencimientoPMI: null
  },{
    id: 1,
    activo: false,
    cuil: 11445002332,
    cuilTitular: 11332201232,
    nroAfiliado: null,
    nombre: "Jill Valentine",
    gerenciador: "B26-OSCEARA Cordoba/Sin",
    parentesco: "Hijo < 21 años",
    categoria: null,
    ultimaAltaReferenciario: new Date('01/11/2022'),
    tipoReferenciario: "00-RELACION",
    situacionRevista: "0-Recibe haberes",
    nacimiento: new Date('02/21/2002'),
    edad: 20,
    provincia: "Cordoba",
    localidad: "CORDOBA",
    fechaUltimaBajaFormal: null,
    vencimientoCertificadoEstudios: null,
    cuilAnterior: null,
    vencimientoPMI: null
  },]

  exportCSV(){
    
  }

}
