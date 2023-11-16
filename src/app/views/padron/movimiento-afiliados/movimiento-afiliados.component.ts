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
interface formFiltro{
  ejecutado: string | null;
  gerenciador: string | null;
  fechEjecutado: Date | string | null;
  fechNormal: Date | string | null;
  tipoMovimiento: string | null
  cuil: number | string | null;
  id: number | string | null;
  fechnormal2:Date | string | null;
  titular: string | null;
}
@Component({
  selector: 'app-movimiento-afiliados',
  templateUrl: './movimiento-afiliados.component.html',
  styleUrls: ['./movimiento-afiliados.component.scss']
})
export class MovimientoAfiliadosComponent {

  filtroSearch : formFiltro = {
    ejecutado: '',
    gerenciador: '',
    fechEjecutado: null,
    fechNormal: null,
    tipoMovimiento: '',
    cuil: 0,
    id: 0,
    fechnormal2: null,
    titular: ''
  };

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

  exportCSV(data: any, filename = 'data') {
    let arrHeader = Object.keys(data[0]); // Usar Object.keys(data[0]) en lugar de this.backendIncome[0]
    let csvData = this.ConvertToCSV(data, arrHeader);
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {
      dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", "sample.csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

  ConvertToCSV(objArray: any, headerList: any) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = '';

    for (let index in headerList) {
      row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';

    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (let index in headerList) {
        let head = headerList[index];
        line += ',' + this.strRep(array[i][head]);
      }
      line = line.slice(1);  // Eliminar la coma inicial
      str += line + '\r\n';
    }
    return str;
  }

  strRep(data: any) {
    if(typeof data == "string") {
      let newData = data.replace(/,/g, " ");
       return newData;
    }
    else if(typeof data == "undefined") {
      return "-";
    }
    else if(typeof data == "number") {
      return  data.toString();
    }
    else {
      return data;
    }
  }

  searchAfiliados(filtroIncome: formFiltro){
    console.log(filtroIncome);
  }

}


