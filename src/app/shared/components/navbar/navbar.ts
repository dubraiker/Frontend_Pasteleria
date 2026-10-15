import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../features/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent implements OnInit {
  currentRole: string = 'CLIENTE';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Lectura desacoplada del rol desde AuthService
    const role = (this.authService as any).currentUserRole || 
                 (this.authService as any).getUserRole?.() || 
                 (this.authService as any).getRole?.() || 
                 'CLIENTE';

    this.currentRole = String(role).toUpperCase();
  }

  logout(): void {
    if ((this.authService as any).logout) {
      (this.authService as any).logout();
    }
    this.router.navigate(['/auth/login']);
  }
}