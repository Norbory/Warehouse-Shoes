import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from "./components/saludo/saludo.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet, 
      SaludoComponent, 
      NavbarComponent, 
      FooterComponent
    ]
})
export class AppComponent {
  title = 'first_project';
}
