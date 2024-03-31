import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  producto!: string;
  location!: string;
  price!: number;
  stock!: number;
  url!: string;
  img!: string;
  selectedButton: number = 999999;
  imagen = [
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/187ba41f-6b11-4d91-89f9-cd19501c1d12/giannis-freak-5-basketball-shoes-jZzrx4.png',
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aae646f0-6278-49e2-9ed8-ee095a40b3f7/giannis-freak-5-basketball-shoes-jZzrx4.png',
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/112fb0a7-e17a-422c-be52-4fd1e858c64f/giannis-freak-5-basketball-shoes-jZzrx4.png',
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0643e0b6-ac71-4fb9-ae35-5795dc551235/giannis-freak-5-basketball-shoes-jZzrx4.png'
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.producto = params['producto'];
      this.location = params['location'];
      this.price = params['price'];
      this.stock = params['stock'];
      this.url = params['url'];
      this.img = params['img'];
      this.imagen.push(this.img);
    });
  }

  selectButton(index: number) {
    this.selectedButton = index;
  }

  changeImageRight() {
    this.imagen.unshift(this.imagen.pop() as string);
  }

  changeImageLeft() {
    this.imagen.push(this.imagen.shift() as string);
  }

}