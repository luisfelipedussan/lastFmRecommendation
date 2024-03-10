import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./sharePage/navbar/navbar.component";
import { FooterComponent } from "./sharePage/footer/footer.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [NavbarComponent, RouterOutlet, FooterComponent]
})
export class AppComponent {
  title = 'lastFm';
  
}
