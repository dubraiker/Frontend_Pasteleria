import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },

 
  {
    path: 'auth/login',
    loadComponent: () => import('./features/auth/pages/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'auth/registro',
    loadComponent: () => import('./features/auth/pages/registro/registro.component').then(m => m.RegistroComponent)
  },

 
  {
    path: 'admin/dashboard',
    loadComponent: () => import('./features/admin/pages/dashboard/dashboard').then(m => m.DashboardComponent)
  },
  {
    path: 'admin/usuarios',
    loadComponent: () => import('./features/admin/pages/usuarios/usuarios').then(m => m.UsuariosComponent)
  },
  {
    path: 'admin/catalogo',
    loadComponent: () => import('./features/admin/pages/catalogo/catalogo').then(m => m.CatalogoComponent)
  },


  {
    path: 'pastelero/produccion',
    loadComponent: () => import('./features/pastelero/pages/produccion/produccion').then(m => m.ProduccionComponent)
  },
  {
    path: 'pastelero/inventario',
    loadComponent: () => import('./features/pastelero/pages/inventario/inventario').then(m => m.InventarioComponent)
  },
  {
    path: 'pastelero/recetas',
    loadComponent: () => import('./features/pastelero/pages/recetas/recetas').then(m => m.RecetasComponent)
  },


  {
    path: 'cliente/catalogo',
    loadComponent: () => import('./features/cliente/pages/catalogo/catalogo').then(m => m.CatalogoComponent)
  },
  {
    path: 'cliente/pedidos',
    loadComponent: () => import('./features/cliente/pages/pedidos/pedidos').then(m => m.PedidosComponent)
  },
  {
    path: 'cliente/perfil',
    loadComponent: () => import('./features/cliente/pages/perfil/perfil').then(m => m.PerfilComponent)
  },

  
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];