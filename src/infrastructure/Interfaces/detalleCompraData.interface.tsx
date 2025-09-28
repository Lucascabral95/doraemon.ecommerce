import { ProductoCompra } from "./productoCompra.interface";

export interface DetalleCompraData {
  id: string;
  fecha: string | Date;
  datosPersonales: {
    nombre: string;
    apellido: string;
    email: string;
    telefono?: string;
  };
  direccionEnvio: {
    direccion: string;
    ciudad: string;
    provincia: string;
    pais: string;
    codigoPostal: string;
  };
  carrito: ProductoCompra[];
  cantidadDeArticulos: number;
  totalDeLaCompra: string | number;
  comentarioDeLaOrden?: string;
}
