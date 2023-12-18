import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
