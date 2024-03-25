import { Component } from '@angular/core';
import { CartaComponent } from "../carta/carta.component";
import { TableComponent } from '../table/table.component';
import * as data from '../../data/products.json';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-saludo',
    standalone: true,
    templateUrl: './saludo.component.html',
    styleUrl: './saludo.component.css',
    imports: [CartaComponent, TableComponent, NgFor]
})
export class SaludoComponent {
    products = (data as any).default;
}
