import { Component, OnInit } from '@angular/core';
import { ArbolService } from '../api-service.service';


@Component({
  selector: 'app-arbol-info',
  templateUrl: './arbol-info.component.html',
  styleUrls: ['./arbol-info.component.css']
})
export class ArbolInfoComponent implements OnInit {
   arboles: any[] = [];
   arbolSeleccionado: any;

  constructor(private arbolService: ArbolService) {}

  ngOnInit() {
    this.obtenerArboles();
  }

  obtenerArboles() {
    this.arbolService.obtenerArboles().subscribe(
      (data: any) => {
        this.arboles = data.arboles;
        if (this.arboles.length > 0) {
          this.arbolSeleccionado = this.arboles[0];
          this.mostrarDetallesArbol();
        }
      },
      error => {
        console.log('Error al obtener los árboles:', error);
      }
    );
  }

  verDetallesArbol(event: Event) {
    const element = event.target as HTMLSelectElement;
    const selectedId = element.value;

    if (selectedId) {
      this.arbolSeleccionado = this.arboles.find(arbol => arbol.arbol_id === Number(selectedId));
      this.mostrarDetallesArbol();
    } else {
      this.arbolSeleccionado = null;
    }
  }

  mostrarDetallesArbol() {
    if (this.arbolSeleccionado) {
      this.arbolService.seleccionarArbol(this.arbolSeleccionado);
    }
  }
}