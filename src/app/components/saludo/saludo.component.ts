import { Component } from '@angular/core';
import { CartaComponent } from "../carta/carta.component";
import { TableComponent } from '../table/table.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as data from '../../data/products.json';
import { NgFor, NgIf } from '@angular/common';
import { Product } from '../../types/product';

@Component({
  selector: 'app-saludo',
  standalone: true,
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css',
  imports: [CartaComponent, TableComponent, NgFor, NgIf, ReactiveFormsModule, RouterModule],
})
export class SaludoComponent {
  submitted! : boolean;
  eliminated! : boolean;
  products = (data as any).default;

  form = new FormGroup({
    products: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    stock: new FormControl(0, Validators.required),
    price: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
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
    setTimeout(() => {
      this.submitted = false;
    }, 3000);
    this.submitted = true;
    this.form.reset();
  }

  eliminarCarta(index: number) {
    this.products.splice(index, 1);
    setTimeout(() => {
      this.eliminated = false;
    }, 3000);
    this.eliminated = true;
  }

} 
