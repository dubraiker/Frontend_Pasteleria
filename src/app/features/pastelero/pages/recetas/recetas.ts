import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar';

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="container mt-4">
      <h2 class="mb-4">📖 Fichas Técnicas y Recetario</h2>
      <div class="row">
        <div class="col-md-6 mb-4" *ngFor="let receta of recetas">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <h4 class="card-title text-danger">{{ receta.nombre }}</h4>
              <p><strong>Tiempo de Horneado:</strong> {{ receta.tiempo }}</p>
              <p><strong>Porciones:</strong> {{ receta.porciones }}</p>
              <h6 class="mt-3">Ingredientes Principales:</h6>
              <ul>
                <li *ngFor="let ing of receta.ingredientes">{{ ing }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class RecetasComponent {
  recetas = [
    {
      nombre: 'Torta Tres Leches Tradicional',
      tiempo: '45 min a 180°C',
      porciones: 20,
      ingredientes: ['5 Huevos', '200g Harina de Trigo', '1 Lata Leche Condensada', '1 Lata Leche Evaporada', '200ml Crema de Leche']
    },
    {
      nombre: 'Cheesecake Frutos Rojos',
      tiempo: '60 min a 160°C (Baño María)',
      porciones: 12,
      ingredientes: ['500g Queso Crema', '150g Galleta María', '80g Mantequilla', '200g Mermelada de Mora/Fresa']
    }
  ];
}