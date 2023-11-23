import { Component } from '@angular/core';

interface formFiltro{
  fecCreado: Date | string | null;
  cuilTitular: number | string | null;
  ejecutado: string | null;
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

}
