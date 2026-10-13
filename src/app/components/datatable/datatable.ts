import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './datatable.html',
  styleUrl: './datatable.css'
})
export class DatatableComponent {
  @Input() columns: { field: string; header: string }[] = [];
  @Input() data: any[] = [];
  searchTerm: string = '';

  get filteredData() {
    if (!this.searchTerm) return this.data;
    return this.data.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }
}