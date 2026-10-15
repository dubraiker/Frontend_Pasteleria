export type UserRole = 'Administrador' | 'Pastelero' | 'Cliente';

export interface UserSession {
  email: string;
  role: UserRole;
  nombre: string;
}