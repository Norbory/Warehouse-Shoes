import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css'
})



export class CartaComponent {
  @Input() id: number | undefined = 0;
  @Input() producto: string | undefined;
  @Input() location: string | undefined;
  @Input() stock: number | undefined;
  @Input() price: string | undefined;
  @Input() img: string | undefined;
  @Input() url: string | undefined;
}
