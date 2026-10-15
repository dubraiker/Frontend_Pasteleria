import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar';
import { MOCK_CATALOGO } from '../../../../data/mock-data';

@Component({
  selector: 'app-cliente-catalogo',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './catalogo.html'
})
export class CatalogoComponent {
  productos = MOCK_CATALOGO;
}