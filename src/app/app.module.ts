import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArbolInfoComponent } from './arbol-info/arbol-info.component';
import { ArbolMapComponent } from './arbol-map/arbol-map.component';
import { ArbolComentarioComponent } from './arbol-comentario/arbol-comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    ArbolInfoComponent,
    ArbolMapComponent,
    ArbolComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
