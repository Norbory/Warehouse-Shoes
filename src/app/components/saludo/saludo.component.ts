import { Component } from '@angular/core';
import { CartaComponent } from "../carta/carta.component";
import { TableComponent } from '../table/table.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as data from '../../data/products.json';
import { NgFor } from '@angular/common';
import { Product } from '../../types/product';

@Component({
  selector: 'app-saludo',
  standalone: true,
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css',
  imports: [CartaComponent, TableComponent, NgFor, ReactiveFormsModule, RouterModule],
})
export class SaludoComponent {
  products = (data as any).default;

  form = new FormGroup({
    products: new FormControl(''),
    location: new FormControl(''),
    stock: new FormControl(0),
    price: new FormControl(''),
    img: new FormControl(''),
    url: new FormControl(''),
  });

  agregarCarta() {
    const product: Product = {
      product: this.form.value.products ?? 'Producto',
      location: this.form.value.location ?? 'Ubicación',
      stock: this.form.value.stock ?? 0,
      price: this.form.value.price ?? 'Precio',
      img: this.form.value.img ?? 'Imagen',
      url: this.form.value.url ?? 'URL',
    };
    this.products.push(product);
    this.form.reset();
  }

} 
