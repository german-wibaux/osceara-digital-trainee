import { Component } from '@angular/core';

interface formFiltro{
  fecCreado: Date | string | null;
  cuilTitular: number | string | null;
  ejecutado: string | null;
}

interface BackendIncome {
  id: number;
  activo: boolean;
  cuil: number;
  cuilTitular: number;
  nroAfiliado: number | null;
  nombre: string;
  gerenciador: string;
  nacimiento: Date;
  edad: number;
  provincia: string;
  localidad: string;
}

@Component({
  selector: 'app-alta-afiliados',
  templateUrl: './alta-afiliados.component.html',
  styleUrls: ['./alta-afiliados.component.scss']
})

export class AltaAfiliadosComponent {

  collapses = [false, false, false, false];

  filtroSearch : formFiltro = {
    fecCreado: "",
    cuilTitular: "",
    ejecutado: "",
  };

  toggleCollapse(id: number): void {
    // @ts-ignore
    this.collapses[id] = !this.collapses[id];
  }

  searchAfiliados(filtroIncome: formFiltro){
    console.log("Se ha enviado correctamente");
    console.log(filtroIncome);
  }

  backendIncome: BackendIncome[] = [{
    id: 1,
    activo: true,
    cuil: 11445002332,
    cuilTitular: 11332201232,
    nroAfiliado: 11332201232,
    nombre: "Jill Valentine",
    gerenciador: "B26-OSCEARA Cordoba/Sin",
    nacimiento: new Date('02/21/2002'),
    edad: 20,
    provincia: "Cordoba",
    localidad: "CORDOBA"
  },{
    id: 1,
    activo: false,
    cuil: 11445002332,
    cuilTitular: 11332201232,
    nroAfiliado: 11332201232,
    nombre: "Jill Valentine",
    gerenciador: "B26-OSCEARA Cordoba/Sin",
    nacimiento: new Date('02/21/2002'),
    edad: 20,
    provincia: "Cordoba",
    localidad: "CORDOBA"
  },{
    id: 1,
    activo: true,
    cuil: 11445002332,
    cuilTitular: 11332201232,
    nroAfiliado: 11332201232,
    nombre: "Jill Valentine",
    gerenciador: "B26-OSCEARA Cordoba/Sin",
    nacimiento: new Date('02/21/2002'),
    edad: 20,
    provincia: "Cordoba",
    localidad: "CORDOBA"
  },{
    id: 1,
    activo: false,
    cuil: 11445002332,
    cuilTitular: 11332201232,
    nroAfiliado: 11332201232,
    nombre: "Jill Valentine",
    gerenciador: "B26-OSCEARA Cordoba/Sin",
    nacimiento: new Date('02/21/2002'),
    edad: 20,
    provincia: "Cordoba",
    localidad: "CORDOBA"
  },]

}
