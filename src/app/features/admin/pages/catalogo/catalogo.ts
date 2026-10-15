import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar';
import { DatatableComponent } from '../../../../shared/components/datatable/datatable';
import { MOCK_CATALOGO } from '../../../../data/mock-data';

@Component({
  selector: 'app-admin-catalogo',
  standalone: true,
  imports: [CommonModule, NavbarComponent, DatatableComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="container mt-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2>📦 Gestión Global del Catálogo</h2>
        <button class="btn btn-danger">+ Nuevo Producto</button>
      </div>
      <app-datatable [columns]="columns" [data]="catalogo"></app-datatable>
    </div>
  `
})
export class CatalogoComponent {
  catalogo = MOCK_CATALOGO;
  columns = [
    { field: 'id', header: 'Código' },
    { field: 'nombre', header: 'Nombre del Producto' },
    { field: 'categoria', header: 'Categoría' },
    { field: 'precio', header: 'Precio ($)' },
    { field: 'stock', header: 'Stock Disponible' }
  ];
}