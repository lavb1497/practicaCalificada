import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { Proyecto1Component } from './proyecto1/proyecto1.component';
import { FormsModule } from '@angular/forms';
import { ModuloRountingModule } from '../modulo-rounting.module';



@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    EstudiosComponent,
    Proyecto1Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModuloRountingModule
  ],
  exports: [
    EstudiosComponent,
    PaginaPrincipalComponent,
    Proyecto1Component
  ]
})
export class PagesModule { }
