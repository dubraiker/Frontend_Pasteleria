import { Injectable } from '@angular/core';
import { UserRole } from '../../models/roles.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  setRole(role: UserRole): void {
    localStorage.setItem('userRole', role);
  }

  getRole(): UserRole | null {
    return (localStorage.getItem('userRole') as UserRole) || null;
  }

  logout(): void {
    localStorage.removeItem('userRole');
  }
}