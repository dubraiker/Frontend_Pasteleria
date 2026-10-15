import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar';
import { DatatableComponent } from '../../../../shared/components/datatable/datatable';
import { MOCK_INVENTARIO } from '../../../../data/mock-data';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, NavbarComponent, DatatableComponent],
  templateUrl: './inventario.html'
})
export class InventarioComponent {
  inventario = MOCK_INVENTARIO;
  columns = [
    { field: 'id', header: 'Código Insumo' },
    { field: 'ingrediente', header: 'Ingrediente / Materia Prima' },
    { field: 'cantidad', header: 'Stock Actual' },
    { field: 'unidad', header: 'Medida' },
    { field: 'estado', header: 'Nivel de Stock' }
  ];
}