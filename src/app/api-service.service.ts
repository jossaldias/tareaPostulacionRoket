import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

//Servicio que hace la conexión entre el Back y el Front para los métodos GET y POST
//Tuve problemas para hacer funcionar la caja de comentario y hacer el INSERT en la DB
//La función que utilice obtenia los atributos que solicitaba pero creo que debe ser un problema 
//en la configuracion de la direccion del Backend


//Aca explicaré un poco como funcionan los componentes: a traves del ArbolService se obtiene la data que esta en el Backend, mostrando a traves del selector el arbol_id que estamos solicitando, el cual se comprate a los otros modulos para obtener las coordenadas que se utilizaran en el mapa  a traves de leaflet, la fotografía  y la caja de comentarios donde se obtienen los datos del árbol seleccionado.


//Acerca de la usabilidad, cuando se carga la aplicación toma el primer id y muestra su fotgrafia y mapa, ya que al dejar el selecor vacio y luego escoger uno existen problemas de visualizacion y difrencias en los diferentes elementos o contenedores.

@Injectable({
  providedIn: 'root'
})
export class ArbolService {
  private apiUrl = 'http://localhost:3000';
  private arbolSeleccionadoSubject = new Subject<any>();
  arbolSeleccionado$ = this.arbolSeleccionadoSubject.asObservable();

  constructor(private http: HttpClient) {}

  obtenerArboles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/arboles`).pipe(
      catchError(this.handleError)
    );
  }

  seleccionarArbol(arbol: any): void {
    this.arbolSeleccionadoSubject.next(arbol);
  }

agregarComentario(arbolId: number, comentario: string, postulanteId: number): Observable<any> {
  const body = {
    arbol_id: arbolId,
    comentario: comentario,
    postulante_id: postulanteId
  };
  return this.http.post<any>(`${this.apiUrl}/comentarios`, body).pipe(
    catchError(this.handleError)
  );
}


 private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Error desconocido';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error código ${error.status}: ${error.error.message || error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  

}
