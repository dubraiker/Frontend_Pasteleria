export const MOCK_PEDIDOS = [
  { id: 'PED-101', cliente: 'Camilo Andrés', producto: 'Torta Tres Leches (20 porciones)', estado: 'En Producción', fecha: '2026-10-12', total: 85000 },
  { id: 'PED-102', cliente: 'Mariana Gómez', producto: 'Cheesecake de Frutos Rojos', estado: 'Listo para Entrega', fecha: '2026-10-12', total: 65000 },
  { id: 'PED-103', cliente: 'Carlos Pérez', producto: 'Caja Cupcakes Temáticos x12', estado: 'Entregado', fecha: '2026-10-11', total: 48000 }
];

export const MOCK_INVENTARIO = [
  { id: 'INS-01', ingrediente: 'Harina de Trigo Pastelería', cantidad: 150, unidad: 'Kg', estado: 'Suficiente' },
  { id: 'INS-02', ingrediente: 'Mantequilla Sin Sal 82%', cantidad: 12, unidad: 'Kg', estado: 'Bajo Stock' },
  { id: 'INS-03', ingrediente: 'Cobertura Chocolate 70%', cantidad: 45, unidad: 'Kg', estado: 'Suficiente' }
];

export const MOCK_CATALOGO = [
  { id: 'PROD-01', nombre: 'Torta Red Velvet', categoria: 'Tortas Frías', precio: 75000, stock: 8 },
  { id: 'PROD-02', nombre: 'Mousse de Maracuyá', categoria: 'Postres Individuales', precio: 12000, stock: 25 },
  { id: 'PROD-03', nombre: 'Tartaleta de Fresa', categoria: 'Pastelería Francesa', precio: 15000, stock: 14 }
];

export const MOCK_USUARIOS = [
  { id: 'USR-01', nombre: 'Julio Andrés', rol: 'Administrador', correo: 'admin@pasteleria.com', estado: 'Activo' },
  { id: 'USR-02', nombre: 'Marta Sánchez', rol: 'Pastelero', correo: 'marta@pasteleria.com', estado: 'Activo' },
  { id: 'USR-03', nombre: 'Laura Orozco', rol: 'Cliente', correo: 'laura@gmail.com', estado: 'Activo' }
];