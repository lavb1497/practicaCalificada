import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiosComponent } from './pages/estudios/estudios.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { Proyecto1Component } from './pages/proyecto1/proyecto1.component';

const routes: Routes = [
  {path: '',
    children:[
      {path: 'pagina-principal', component:PaginaPrincipalComponent},
      {path: 'estudios', component:EstudiosComponent},
      {path: 'proyecto1', component:Proyecto1Component},
      {path: '**', redirectTo:'pagina-principal'},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModuloRountingModule { }
