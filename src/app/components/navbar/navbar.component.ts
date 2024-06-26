import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  styleUrl: './navbar.component.css',
  template: `<nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-500 mb-3">
  <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a class="text-xl font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-white " href="/">
        FINDWEAR
      </a>
      <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" (click)="toggleNavbar()">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </div>
</nav>`
})

export class NavbarComponent {
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}