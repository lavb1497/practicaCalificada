import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent {
  button!:string;
  mostrarFormulario = false;

  cambioButton() {
    if (this.button){
      this.mostrarFormulario = true;
    } else {
      this.mostrarFormulario = false;
    }
  }
}
