import { Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { SaludoComponent } from './components/saludo/saludo.component';

export const routes: Routes = [
    { path: '', component: SaludoComponent},
    { path: 'producto/:id', title:"Producto deportivo" ,component: ProductoComponent },
];  