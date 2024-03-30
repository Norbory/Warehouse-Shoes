import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers: [CarouselModule]
})
export class ProductoComponent implements OnInit {
  producto!: string;
  location!: string;
  price!: number;
  stock!: number;
  url!: string;
  img!: string;
  selectedButton: number = 999999;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.producto = params['producto'];
      this.location = params['location'];
      this.price = params['price'];
      this.stock = params['stock'];
      this.url = params['url'];
      this.img = params['img'];
    });
  }

  selectButton(index: number) {
    this.selectedButton = index;
  }

}