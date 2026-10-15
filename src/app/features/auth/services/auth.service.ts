import { Injectable } from '@angular/core';
import { UserRole } from '../../models/roles.model';
import { MOCK_USUARIOS } from '../../data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  login(email: string, role: UserRole): boolean {
    const usuarioEncontrado = MOCK_USUARIOS.find(
      u => u.correo.toLowerCase() === email.toLowerCase() && u.rol === role
    );

    if (usuarioEncontrado) {
      localStorage.setItem('userRole', usuarioEncontrado.rol);
      localStorage.setItem('userName', usuarioEncontrado.nombre);
      return true;
    }

    return false;
  }

  getRole(): UserRole | null {
    return (localStorage.getItem('userRole') as UserRole) || null;
  }

  logout(): void {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
  }
}