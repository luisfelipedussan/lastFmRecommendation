import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(private router: Router) { }

  ingresar() {
    const username = (document.getElementById("usernameInput") as HTMLInputElement).value;
    this.redirigirARecomendaciones(username);
  }

  redirigirARecomendaciones(username: string) {
    this.router.navigate(['/recomendaciones'], { queryParams: { usuario: username } });
  }

  redirigirACrearUsuario() {
    this.router.navigate(['/CreateUser']);
  }
}

