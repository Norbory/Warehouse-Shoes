import { Component, OnInit } from '@angular/core';
import { CartaComponent } from "../carta/carta.component";
import { TableComponent } from '../table/table.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import * as data from '../../data/products.json';
import { NgFor } from '@angular/common';
import { Product } from '../../types/product';

@Component({
    selector: 'app-saludo',
    standalone: true,
    templateUrl: './saludo.component.html',
    styleUrl: './saludo.component.css',
    imports: [CartaComponent, TableComponent, NgFor, ReactiveFormsModule]
})
export class SaludoComponent implements OnInit{
    products = (data as any).default;

    form: FormGroup = new FormGroup({
        product: new FormControl(''),
        stock: new FormControl(''),
        price: new FormControl(''),
        img: new FormControl(''),
        url: new FormControl(''),
        location: new FormControl('')
      });
    
      ngOnInit() {
        
      }
      
      agregarProducto() {
        console.log(this.form);
      }
} 
