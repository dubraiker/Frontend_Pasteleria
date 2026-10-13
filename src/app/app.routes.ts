import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadComponent: () => import('./pages/auth/login/login').then(m => m.LoginComponent) 
  },

  // Rutas Administrador
  { 
    path: 'admin/dashboard', 
    loadComponent: () => import('./pages/admin/dashboard/dashboard').then(m => m.DashboardComponent) 
  },
  { 
    path: 'admin/usuarios', 
    loadComponent: () => import('./pages/admin/usuarios/usuarios').then(m => m.UsuariosComponent) 
  },
  { 
    path: 'admin/catalogo', 
    loadComponent: () => import('./pages/admin/catalogo/catalogo').then(m => m.CatalogoComponent) 
  },

  // Rutas Pastelero
  { 
    path: 'pastelero/produccion', 
    loadComponent: () => import('./pages/pastelero/produccion/produccion').then(m => m.ProduccionComponent) 
  },
  { 
    path: 'pastelero/inventario', 
    loadComponent: () => import('./pages/pastelero/inventario/inventario').then(m => m.InventarioComponent) 
  },
  { 
    path: 'pastelero/recetas', 
    loadComponent: () => import('./pages/pastelero/recetas/recetas').then(m => m.RecetasComponent) 
  },

  // Rutas Cliente
  { 
    path: 'cliente/catalogo', 
    loadComponent: () => import('./pages/cliente/catalogo/catalogo').then(m => m.CatalogoComponent) 
  },
  { 
    path: 'cliente/pedidos', 
    loadComponent: () => import('./pages/cliente/pedidos/pedidos').then(m => m.PedidosComponent) 
  },
  { 
    path: 'cliente/perfil', 
    loadComponent: () => import('./pages/cliente/perfil/perfil').then(m => m.PerfilComponent) 
  },

  { path: '**', redirectTo: 'login' }
];