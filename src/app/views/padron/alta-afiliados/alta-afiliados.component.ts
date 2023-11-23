import { Component } from '@angular/core';

interface formFiltro{
  calle                                  : string | null;
	numero_puerta                          : string | null;
	piso                                   : string | null;
	departamento                           : string | null;
	localidad                              : string | null;
	codigo_postal                          : number | string | null;

	coding_obra_social                     : string | null;
	cuit_empleador                         : number | string | null;
	cuil_titular                           : number | string | null;
	cuil                                   : number | string | null;
	numero_documento                       : number | string | null;
	apellido_y_nombre                      : string | null;
	fecha_nacimiento                       : Date   | string | null;
	telefono                               : number | string | null;

	fecha_alta_en_obra_social              : Date   | string | null;
	fecha_cierre_de_presentacion           : Date   | string | null;
	verificacion_cuil                      : string | null;
	cuil_informado_por_la_os               : number | string | null;
	cuit_segun_sijp                        : number | string | null;
	obra_social_segun_sijp                 : string | null;
	ultimo_periodo_informado_ensijp        : string | null;
	obra_social_opcion_vigente             : string | null;
	periodo_desde_opcion                   : string | null;

	fecha_vigencia_certificado_estudio     : Date   | string | null;
	fecha_vigencia_certificado_discapacidad: Date   | string | null;
	activo                                 : string | null;
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
    calle                                  : "",
    numero_puerta                          : "",
    piso                                   : "",
    departamento                           : "",
    localidad                              : "",
    codigo_postal                          : "",

    coding_obra_social                     : "",
    cuit_empleador                         : "",
    cuil_titular                           : "",
    cuil                                   : "",
    numero_documento                       : "",
    apellido_y_nombre                      : "",
    fecha_nacimiento                       : "",
    telefono                               : "",

    fecha_alta_en_obra_social              : "",
    fecha_cierre_de_presentacion           : "",
    verificacion_cuil                      : "",
    cuil_informado_por_la_os               : "",
    cuit_segun_sijp                        : "",
    obra_social_segun_sijp                 : "",
    ultimo_periodo_informado_ensijp        : "",
    obra_social_opcion_vigente             : "",
    periodo_desde_opcion                   : "",

    fecha_vigencia_certificado_estudio     : "",
    fecha_vigencia_certificado_discapacidad: "",
    activo                                 : "",
  };

  toggleCollapse(id: number): void {
    // @ts-ignore
    this.collapses[id] = !this.collapses[id];
  }

  searchAfiliados(filtroIncome: formFiltro | any){
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
