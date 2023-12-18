import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbolInfoComponent } from './arbol-info/arbol-info.component';
import { ArbolMapComponent } from './arbol-map/arbol-map.component';
import { ArbolComentarioComponent } from './arbol-comentario/arbol-comentario.component';

const routes: Routes = [
{ path: 'arbol-info', component: ArbolInfoComponent },
{ path: 'arbol-map', component: ArbolMapComponent },
{ path: 'arbol-comentario', component: ArbolComentarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
