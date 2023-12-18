import { Component, Input } from '@angular/core';
import { ArbolService } from '../api-service.service';

@Component({
  selector: 'app-arbol-comentario',
  templateUrl: './arbol-comentario.component.html',
  styleUrls: ['./arbol-comentario.component.css']
})
export class ArbolComentarioComponent {
  @Input() arbolSeleccionado: any;
  comentario: string = '';
  postulanteId: number = 1; 

  constructor(private arbolService: ArbolService) {}

  agregarComentario(): void {

  console.log('arbolSeleccionado:', this.arbolSeleccionado);
  console.log('comentario:', this.comentario);
  console.log('postulanteId:', this.postulanteId);

    if (this.arbolSeleccionado && this.comentario.trim() !== '') {
      const arbolId = this.arbolSeleccionado.arbol_id;
      this.arbolService.agregarComentario(
        arbolId,
        this.comentario,
        this.postulanteId
      ).subscribe(
        (response) => {
          console.log('Comentario agregado:', response);
          this.comentario = '';
        },
        (error) => {
          console.error('Error al agregar comentario:', error);
        }
      );
    } else {
      console.log('Datos insuficientes para agregar comentario');
    }
  }
}
