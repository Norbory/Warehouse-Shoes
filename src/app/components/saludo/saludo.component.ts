import { Component, OnInit } from '@angular/core';
import { CartaComponent } from "../carta/carta.component";
import { TableComponent } from '../table/table.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as data from '../../data/products.json';
import { NgFor, NgIf } from '@angular/common';
import { Product } from '../../types/product';
// import { ZapatillaService } from '../../services/zapatilla.service';

@Component({
  selector: 'app-saludo',
  standalone: true,
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css',
  imports: [CartaComponent, TableComponent, NgFor, NgIf, ReactiveFormsModule, RouterModule],
})
export class SaludoComponent implements OnInit{
  // Configuracion para agregar Database
  // 
  // private _zapatillaService: ZapatillaService
  constructor() { }
  
  ngOnInit() {
    // Llamada a la funcion para obtener zapatillas
    // this.obtenerZapatillas();
  }

  listZapatillas: Product[] = [];
  submitted! : boolean;
  eliminated! : boolean;
  edited! : boolean;
  productos = (data as any).default;

  form = new FormGroup({
    id: new FormControl(9000),
    products: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    stock: new FormControl(0, Validators.required),
    price: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
  });

  // Funcion para obtener cartas con integracion de API .NET 8  y base de datos SQL
  // obtenerZapatillas() {
  //   this._zapatillaService.getAllZapatillas().subscribe(
  //     response => {
  //       this.listZapatillas = response;
  //     },
  //     error => {
  //       error.error.message = 'Error al obtener zapatillas';
  //       console.log(error.error.message);
  //     }
  //   );
  // }

  // Funcion para agregar carta con integracion de API .NET 8  y base de datos SQL
  // agregarCarta() {
  //   const product: Product = {
  //     id: this.form.value.id ?? 0,
  //     product: this.form.value.products ?? 'Producto',
  //     location: this.form.value.location ?? 'Ubicación',
  //     stock: this.form.value.stock ?? 0,
  //     price: this.form.value.price ?? 'Precio',
  //     img: this.form.value.img ?? 'Imagen',
  //     url: this.form.value.url ?? 'URL',
  //   };
  //   this._zapatillaService.createZapatilla(product).subscribe(
  //     response => {
  //       setTimeout(() => {
  //         this.submitted = false;
  //       }, 3000);
  //       this.submitted = true;
  //       this.form.reset();
  //       this.obtenerZapatillas();
  //     },
  //     error => {
  //       error.error.message = 'Error al crear zapatilla';
  //       console.log(error.error.message);
  //     }
  //   );
  // }

  // Funcion para obtener zapatilla con integracion de API .NET 8  y base de datos SQL
  // obtenerZapatilla(index: number) {
  //   this._zapatillaService.getZapatillaById(index).subscribe(
  //     response => {
  //       this.form.setValue({
  //         id: response.id,
  //         products: response.product,
  //         location: response.location,
  //         stock: response.stock,
  //         price: response.price,
  //         img: response.img,
  //         url: response.url,
  //       });
  //     },
  //     error => {
  //       error.error.message = 'Error al obtener zapatilla';
  //       console.log(error.error.message);
  //     }
  //   );
  // }

  // Funcion para editar zapatilla con integracion de API .NET 8  y base de datos SQL
  // editarCarta(index: number) {
  //   this.obtenerZapatilla(index);
  //   const product: Product = {
  //     id: index,
  //     product: this.form.value.products ?? 'Producto',
  //     location: this.form.value.location ?? 'Ubicación',
  //     stock: this.form.value.stock ?? 0,
  //     price: this.form.value.price ?? 'Precio',
  //     img: this.form.value.img ?? 'Imagen',
  //     url: this.form.value.url ?? 'URL',
  //   };
  //   this._zapatillaService.updateZapatilla(product).subscribe(
  //     response => {
  //       setTimeout(() => {
  //         this.edited = false;
  //       }, 3000);
  //       this.edited = true;
  //       this.form.reset();
  //       this.obtenerZapatillas();
  //     },
  //     error => {
  //       error.error.message = 'Error al editar zapatilla';
  //       console.log(error.error.message);
  //     }
  //   );
  // }
  
  // Funcion para eliminar carta con integracion de API .NET 8  y base de datos SQL
  // eliminarCarta(index: number) {
  //   this._zapatillaService.deleteZapatilla(index).subscribe(
  //     response => {
  //       setTimeout(() => {
  //         this.eliminated = false;
  //       }, 3000);
  //       this.eliminated = true;
  //       this.obtenerZapatillas();
  //     },
  //     error => {
  //       error.error.message = 'Error al eliminar zapatilla';
  //       console.log(error.error.message);
  //     }
  //   );
  // }

  // Controla si se envia el formulario o se edita una carta
  // enviarFormulario() {
  //   const index = this.form.value.id ?? 0;
  //   if (index === 9000) {
  //     this.agregarCarta();
  //   } else {
  //     this.editarCarta(index);
  //   }
  // }

  agregarCarta() {
    const product: Product = {
      id: this.form.value.id ?? 0,
      product: this.form.value.products ?? 'Producto',
      location: this.form.value.location ?? 'Ubicación',
      stock: this.form.value.stock ?? 0,
      price: this.form.value.price ?? 'Precio',
      img: this.form.value.img ?? 'Imagen',
      url: this.form.value.url ?? 'URL',
    };
    this.productos.push(product);
    setTimeout(() => {
      this.submitted = false;
    }, 3000);
    this.submitted = true;
    this.form.reset();
  }

  eliminarCarta(index: number) {
    this.productos.splice(index, 1);
    setTimeout(() => {
      this.eliminated = false;
    }, 3000);
    this.eliminated = true;
  }
}