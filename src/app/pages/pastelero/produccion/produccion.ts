import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar';
import { DatatableComponent } from '../../../components/datatable/datatable';
import { MOCK_PEDIDOS } from '../../../data/mock-data';

@Component({
  selector: 'app-produccion',
  standalone: true,
  imports: [CommonModule, NavbarComponent, DatatableComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="container mt-4">
      <h2 class="mb-4">👩‍🍳 Cola de Pedidos en Producción</h2>
      <app-datatable [columns]="columns" [data]="pedidos"></app-datatable>
    </div>
  `
})
export class ProduccionComponent {
  pedidos = MOCK_PEDIDOS;
  columns = [
    { field: 'id', header: 'Orden #' },
    { field: 'producto', header: 'Pastel / Postre Solicitado' },
    { field: 'cliente', header: 'Cliente' },
    { field: 'estado', header: 'Estado del Horneo' },
    { field: 'fecha', header: 'Fecha Entrega' }
  ];
}