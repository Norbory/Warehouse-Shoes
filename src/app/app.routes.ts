import { Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';

export const routes: Routes = [
    { path: 'producto/:id', title:"Producto deportivo" ,component: ProductoComponent },
];