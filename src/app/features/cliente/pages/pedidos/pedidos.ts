import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar';
import { DatatableComponent } from '../../../../shared/components/datatable/datatable';
import { MOCK_PEDIDOS } from '../../../../data/mock-data';

@Component({
  selector: 'app-mis-pedidos',
  standalone: true,
  imports: [CommonModule, NavbarComponent, DatatableComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="container mt-4">
      <h2 class="mb-4">🛒 Historial de Mis Pedidos</h2>
      <app-datatable [columns]="columns" [data]="misPedidos"></app-datatable>
    </div>
  `
})
export class PedidosComponent {
  misPedidos = MOCK_PEDIDOS;
  columns = [
    { field: 'id', header: 'N° Pedido' },
    { field: 'producto', header: 'Producto Comprado' },
    { field: 'fecha', header: 'Fecha de Compra' },
    { field: 'total', header: 'Monto Total ($)' },
    { field: 'estado', header: 'Estado del Envío' }
  ];
}