import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArbolService } from '../api-service.service';
import { Subscription } from 'rxjs';
import * as L from 'leaflet';


@Component({
  selector: 'app-arbol-map',
  templateUrl: './arbol-map.component.html',
  styleUrls: ['./arbol-map.component.css']
})

export class ArbolMapComponent implements OnInit, OnDestroy {
  map: L.Map | undefined;
  marker: L.Marker | undefined;
  arbolSeleccionado: any;
  arbolSeleccionadoSubscription: Subscription;

  constructor(private arbolService: ArbolService) {
    this.arbolSeleccionadoSubscription = this.arbolService.arbolSeleccionado$.subscribe(
      (arbol: any) => {
        this.arbolSeleccionado = arbol;
        this.actualizarMapa();
      }
    );
  }

  ngOnInit() {
    this.inicializarMapa();
  }

  ngOnDestroy() {
    this.arbolSeleccionadoSubscription.unsubscribe();
  }

  inicializarMapa() {
    this.map = L.map('map').setView([0, 0], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  agregarMarcador(arbol: any) {
    if (this.map && arbol) {
      const { latitud, longitud } = arbol;

      if (this.marker && this.map.hasLayer(this.marker)) {
        this.map.removeLayer(this.marker);
      }

      this.marker = L.marker([latitud, longitud]).addTo(this.map)
        .bindPopup('Ubicación del árbol ' + [latitud, longitud]).openPopup();

      this.map.setView([latitud, longitud], 13);
    }
  }

  actualizarMapa() {
    if (this.arbolSeleccionado) {
      this.agregarMarcador(this.arbolSeleccionado);
    }
  }
}