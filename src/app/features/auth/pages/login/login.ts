import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {
  email: string = 'admin@pasteleria.com';
  selectedRole: string = 'Administrador';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.errorMessage = '';

    // Normalización de roles para sincronizar con el Navbar
    let roleKey = 'ADMIN';
    let redirectUrl = '/admin/dashboard';

    if (this.selectedRole === 'Pastelero' || this.selectedRole === 'PASTELERO') {
      roleKey = 'PASTELERO';
      redirectUrl = '/pastelero/produccion';
    } else if (this.selectedRole === 'Cliente' || this.selectedRole === 'CLIENTE') {
      roleKey = 'CLIENTE';
      redirectUrl = '/cliente/catalogo';
    }

    // Guardar estado en el AuthService (soporta ejecución directa o mock)
    if ((this.authService as any).login) {
      (this.authService as any).login(this.email, roleKey);
    }
    (this.authService as any).currentUserRole = roleKey;

    // Navegar al módulo de la característica
    this.router.navigate([redirectUrl]);
  }
}