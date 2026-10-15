import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar';
import { DatatableComponent } from '../../../components/datatable/datatable';
import { MOCK_PEDIDOS } from '../../../data/mock-data';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent, DatatableComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="container mt-4">
      <h2 class="mb-4">📊 Dashboard General de Ventas</h2>
      <div class="row mb-4">
        <div class="col-md-4">
          <div class="card p-3 bg-white border-start border-4 border-danger shadow-sm">
            <h5>Total Ventas Mes</h5>
            <h3 class="text-danger">$ 4'850.000</h3>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card p-3 bg-white border-start border-4 border-warning shadow-sm">
            <h5>Pedidos en Proceso</h5>
            <h3 class="text-warning">12 Pedidos</h3>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card p-3 bg-white border-start border-4 border-success shadow-sm">
            <h5>Entregas Exitosas</h5>
            <h3 class="text-success">98%</h3>
          </div>
        </div>
      </div>
      <app-datatable [columns]="columns" [data]="pedidos"></app-datatable>
    </div>
  `
})
export class DashboardComponent {
  pedidos = MOCK_PEDIDOS;
  columns = [
    { field: 'id', header: 'Código Pedido' },
    { field: 'cliente', header: 'Cliente' },
    { field: 'producto', header: 'Producto' },
    { field: 'estado', header: 'Estado' },
    { field: 'fecha', header: 'Fecha' },
    { field: 'total', header: 'Total ($)' }
  ];
}