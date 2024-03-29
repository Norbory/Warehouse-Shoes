import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto!: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params['producto']);
      console.log(params['location']);
      console.log(params['price']); 
      console.log(params['stock']);
      console.log(params['url']);
      console.log(params['img']);
    });
    console.log(this.route.snapshot.paramMap.get('id'));
  }
}