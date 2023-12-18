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
  mostrarMensaje: boolean = false; 

  constructor(private arbolService: ArbolService) {}

  agregarComentario(): void {
  console.log('arbolSeleccionado:', this.arbolSeleccionado);
  console.log('comentario:', this.comentario);

  if (!this.comentario.trim()) {
    console.log('Por favor, ingresa un comentario');
    return;
  }

  if (this.arbolSeleccionado) {
    const arbolId = this.arbolSeleccionado.arbol_id;
    this.arbolService.agregarComentario(
      arbolId,
      this.comentario
    ).subscribe(
      (response) => {
        console.log('Comentario agregado:', response);
        this.mostrarMensaje = true;
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
