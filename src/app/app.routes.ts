import { Routes } from '@angular/router';
import { CartaComponent } from './components/carta/carta.component';

export const routes: Routes = [
    { path: 'product/:id', component: CartaComponent },
];
