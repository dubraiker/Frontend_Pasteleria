import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { UserRole } from '../../../models/roles.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {
  email: string = '';
  selectedRole: UserRole = 'Administrador';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.errorMessage = '';

    const exito = this.authService.login(this.email, this.selectedRole);

    if (exito) {
      switch (this.selectedRole) {
        case 'Administrador':
          this.router.navigate(['/admin/dashboard']);
          break;
        case 'Pastelero':
          this.router.navigate(['/pastelero/produccion']);
          break;
        case 'Cliente':
          this.router.navigate(['/cliente/catalogo']);
          break;
      }
    } else {
      this.errorMessage = `El correo "${this.email}" no pertenece al rol de ${this.selectedRole} o no está registrado.`;
    }
  }
}