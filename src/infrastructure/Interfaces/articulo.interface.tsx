export interface Articulo {
  texto: string;
  imagen: string;
  precio: number;
  descripcion: string;
  detalles: string;
  informacion: string;
  codigo: string;
  stock: number;
  id: number;
  categoria: string;
  subcategoria: string;
  subcategoria4: string;
  edades: string;
  edades2?: string;
  edadesCio?: string;
  edadesoo?: string;
  otrasImagenes: {
    imagen1: string;
    imagen2: string;
    imagen3: string;
  }[];
}
