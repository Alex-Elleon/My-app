import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { ContenidoComponent } from "./contenido/contenido.component";
import { CardProductosComponent } from './card-productos/card-productos.component';
import { RegistroComponent } from "./registro/registro.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EncabezadoComponent, ContenidoComponent, CardProductosComponent, RegistroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Que Sabor';
}
