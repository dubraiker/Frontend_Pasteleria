import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar';
import { DatatableComponent } from '../../../../shared/components/datatable/datatable';
import { MOCK_USUARIOS } from '../../../../data/mock-data';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, NavbarComponent, DatatableComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="container mt-4">
      <h2 class="mb-4">👥 Gestión de Usuarios y Personal</h2>
      <app-datatable [columns]="columns" [data]="usuarios"></app-datatable>
    </div>
  `
})
export class UsuariosComponent {
  usuarios = MOCK_USUARIOS;
  columns = [
    { field: 'id', header: 'ID' },
    { field: 'nombre', header: 'Nombre Completo' },
    { field: 'rol', header: 'Rol Asignado' },
    { field: 'correo', header: 'Correo Electrónico' },
    { field: 'estado', header: 'Estado' }
  ];
}