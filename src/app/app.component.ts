import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { ContenidoComponent } from "./contenido/contenido.component";
import { PieComponent } from "./pie/pie.component";
import { CarrucelComponent } from "./carrucel/carrucel.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EncabezadoComponent, ContenidoComponent, PieComponent, CarrucelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My-app';
}
