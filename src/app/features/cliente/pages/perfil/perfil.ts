import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar';


@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card p-4 shadow-sm border-0">
            <div class="text-center mb-3">
              <span class="fs-1">👤</span>
              <h3>Mi Perfil de Cliente</h3>
            </div>
            <div class="mb-3">
              <label class="form-label font-weight-bold">Nombre Completo:</label>
              <input type="text" class="form-control" value="Camilo Andrés" readonly />
            </div>
            <div class="mb-3">
              <label class="form-label">Correo Electrónico:</label>
              <input type="email" class="form-control" value="camilo@estudiante.edu.co" readonly />
            </div>
            <div class="p-3 bg-light rounded text-center border">
              <h5 class="text-danger m-0">🏆 Puntos acumulados: 1,450 pts</h5>
              <small class="text-muted">¡Canjéalos por postres gratis en tu próxima compra!</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PerfilComponent {}