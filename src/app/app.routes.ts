import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { CardProductosComponent } from './card-productos/card-productos.component';
import { ContenidoComponent } from './contenido/contenido.component';

export const routes: Routes = [
    {path: '', component: ContenidoComponent},
    {path: 'Registro', component: RegistroComponent},
    {path: 'Compras', component: CardProductosComponent}
];
