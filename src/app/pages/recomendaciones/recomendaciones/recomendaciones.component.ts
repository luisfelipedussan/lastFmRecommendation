import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {
  artistas: any[] = [];
  username: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.username = params['usuario']; // Obtener el nombre de usuario de los parámetros de la URL
      this.obtenerRecomendaciones();
    });
  }

  obtenerRecomendaciones(): void {
    // Realizar la petición GET utilizando HttpClient con el nombre de usuario
    this.http.get<any[]>('localhost:8000/gusto/user/', { params: { usuario: this.username } })
      .subscribe(
        response => {
          // Asignar los artistas obtenidos del response a la variable artistas
          this.artistas = response.map(recomendacion => {
            return {
              id: recomendacion.id,
              nombre: recomendacion.artist_name
            };
          });
        },
        error => {
          console.error('Error al obtener las recomendaciones:', error);
        }
      );
  }
}
