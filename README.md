<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React Logo" width="180"/>
</p>

# E-commerce Doraemon Frontend

## Descripción general

**E-commerce Doraemon Frontend** es una aplicación web moderna desarrollada con [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) y [Vite](https://vitejs.dev/), diseñada para ofrecer una experiencia de compra completa, segura y responsiva de productos oficiales de Doraemon. Este frontend implementa arquitectura modular basada en Clean Architecture, gestión de estado global con Zustand, autenticación con Firebase, una UI construida con Bootstrap y SCSS, siguiendo los más altos estándares de la industria.

---

## ⚙️ Características Principales

- **Autenticación y Autorización:** Inicio de sesión y registro con Firebase Authentication, gestión de sesiones seguras con persistencia en localStorage.
- **Gestión de Productos:** Visualización de catálogo completo, filtrado por categorías, búsqueda avanzada, detalles de productos con imágenes múltiples y control de stock.
- **Carrito de Compras:** Funcionalidad completa de carrito con persistencia en localStorage, sincronización automática y gestión optimizada con Zustand.
- **Proceso de Checkout:** Flujo completo de pago con validación de formularios, direcciones de envío.
- **Sistema de Órdenes:** Creación, seguimiento y gestión de pedidos con historial completo de compras realizadas.
- **Panel de Usuario:** Área personalizada para gestión de perfil, datos personales, direcciones, cupones y wishlist.
- **Wishlist:** Sistema de favoritos con persistencia para guardar productos deseados.
- **Experiencia de Usuario Premium:** UI responsiva, accesible y moderna, animaciones suaves con React Slick y componentes reutilizables.
- **Gestión de Errores y Feedback:** Manejo global de errores con SweetAlert2, notificaciones contextuales con React Toastify y validación de formularios con React Hook Form.
- **Optimización de Performance:** Code splitting con lazy loading, optimización de imágenes y caching inteligente.
- **Seguridad:** Protección de rutas privadas con middleware, validación de datos y sanitización de inputs.
- **Arquitectura Limpia:** Separación clara entre capas de presentación, infraestructura y lógica de negocio.
- **Custom Hooks:** Hooks personalizados para lógica reutilizable (useLogin, useCart, useProductDetail, etc.).
- **Páginas Institucionales:** Secciones completas de envíos, devoluciones, preguntas frecuentes, políticas de privacidad, cookies y términos legales.

---

# 🧪 Guía de Pruebas de Integración con Stripe

Esta guía proporciona la información necesaria para realizar pruebas exhaustivas del sistema de pagos integrado con **Stripe** en el entorno de desarrollo.

---

## 💳 Tarjetas de Prueba

### ✅ Pagos Exitosos

Para simular transacciones aprobadas correctamente, utiliza los siguientes datos:

| Campo                  | Valor                                |
| ---------------------- | ------------------------------------ |
| **Número de Tarjeta**  | `4242 4242 4242 4242`                |
| **Red de Pago**        | Visa                                 |
| **Fecha de Caducidad** | Cualquier fecha futura (ej: `12/30`) |
| **Código CVC**         | Cualquier 3 dígitos (ej: `123`)      |
| **Nombre del Titular** | Cualquier nombre                     |
| **Código Postal**      | Cualquier código válido              |

---

### ❌ Simulación de Errores y Rechazos

Para probar diferentes escenarios de error, utiliza las siguientes tarjetas de prueba:

| Escenario              | Número de Tarjeta     | Código de Error    | Código de Rechazo        |
| ---------------------- | --------------------- | ------------------ | ------------------------ |
| Rechazo genérico       | `4000 0000 0000 0002` | `card_declined`    | `generic_decline`        |
| Fondos insuficientes   | `4000 0000 0000 9995` | `card_declined`    | `insufficient_funds`     |
| Tarjeta robada         | `4000 0000 0000 9979` | `card_declined`    | `stolen_card`            |
| Tarjeta caducada       | `4000 0000 0000 0069` | `expired_card`     | —                        |
| CVC incorrecto         | `4000 0000 0000 0127` | `card_declined`    | `incorrect_cvc`          |
| Error de procesamiento | `4000 0000 0000 0119` | `processing_error` | —                        |
| Número incorrecto      | `4242 4242 4242 4241` | `incorrect_number` | —                        |
| Límite de velocidad    | `4000 0000 0000 6975` | `card_declined`    | `card_velocity_exceeded` |

📖 **Referencia:** Para más detalles sobre códigos de error, consulta la [documentación oficial de Stripe](https://stripe.com/docs/testing).

---

## 🔄 Flujo de Prueba Completo

### Pasos para Realizar una Prueba

1. **Agregar Productos al Carrito**

   - Navega por el catálogo de productos
   - Selecciona productos y agrégalos al carrito

2. **Iniciar Proceso de Checkout**

   - Accede al carrito de compras
   - Haz clic en **"Proceder al Checkout"**

3. **Completar Información de Envío**

   - Ingresa nombre completo
   - Proporciona dirección de envío válida
   - Confirma los datos antes de continuar

4. **Seleccionar Método de Pago**

   - Selecciona **"Pago con Tarjeta"**
   - Ingresa los datos de la tarjeta de prueba

5. **Confirmar Transacción**

   - Revisa el resumen de la orden
   - Confirma el pago

6. **Verificar Resultado**
   - Observa la redirección automática
   - Revisa los detalles de la orden creada

---

## ✅ Resultados Esperados

### Transacción Exitosa

- ✓ **Estado del Pago:** Aprobado
- ✓ **Orden Creada:** ID único asignado
- ✓ **Stock Actualizado:** Reducción automática del inventario
- ✓ **Estado de la Orden:** Pagado
- ✓ **Carrito Vaciado:** Limpieza automática después del pago
- ✓ **Redirección:** A la página de detalles de la orden
- ✓ **Notificación:** Mensaje de confirmación al usuario

### Transacción Rechazada

- ✗ **Mensaje de Error:** Descripción clara del problema
- ✗ **Estado del Pago:** Rechazado o Error
- ✗ **Orden:** No se crea en el sistema
- ✗ **Stock:** Sin cambios
- ✗ **Usuario:** Permanece en la página de pago con opción de reintentar

---

## 🚀 Tecnologías Utilizadas

- **Framework:** [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite 4](https://vitejs.dev/)
- **Gestión de Estado:** [Zustand](https://github.com/pmndrs/zustand)
- **Estilos:** [Bootstrap 5](https://getbootstrap.com/), [SASS/SCSS](https://sass-lang.com/), [React Bootstrap](https://react-bootstrap.github.io/)
- **Formularios:** [React Hook Form](https://react-hook-form.com/)
- **UI Components:** [React Icons](https://react-icons.github.io/react-icons/), [React Fast Marquee](https://www.react-fast-marquee.com/), [React Loading Skeleton](https://github.com/dvtng/react-loading-skeleton)
- **Notificaciones:** [SweetAlert2](https://sweetalert2.github.io/), [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Autenticación:** [Firebase Authentication](https://firebase.google.com/docs/auth), [Firestore](https://firebase.google.com/docs/firestore)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Routing:** [React Router DOM v6](https://reactrouter.com/)
- **Linting & Formatting:** [ESLint](https://eslint.org/), [TypeScript ESLint](https://typescript-eslint.io/)
- **Despliegue:** [Vercel](https://vercel.com/)

---

## Tabla de contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Arquitectura](#arquitectura)
- [Rutas de la Aplicación](#rutas-de-la-aplicación)
- [Gestión de Estado](#gestión-de-estado)
- [Hooks Personalizados](#hooks-personalizados)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## Instalación

1. **Cloná el repositorio:**

```bash
git clone https://github.com/Lucascabral95/doraemon.ecommerce.git
cd ecommerce-doraemon
```

2. **Instalá las dependencias:**

```bash
npm install
```

3. **Configurá las variables de entorno:**

Creá un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
VITE_FIREBASE_MEASUREMENT_ID=tu_measurement_id

# Stripe Configuration
VITE_STRIPE_PUBLIC_KEY=tu_stripe_public_key
```

4. **Compilá el proyecto:**

```bash
npm run build
```

---

## Uso

### Modo Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:5173`

### Modo Producción

```bash
npm run build
npm run preview
```

### Linting y Type Checking

```bash
# Ejecutar linter
npm run lint

# Verificar tipos de TypeScript
npm run type-check
```

---

## Estructura del proyecto

```bash
ecommerce-doraemon/
├── public/                          # Assets estáticos
│   └── img/                         # Imágenes públicas
├── src/
│   ├── Components/                  # Componentes legacy y utilidades
│   │   ├── zustand.jsx              # Store global de Zustand
│   │   └── ProteccionComprador/     # Componente de protección al comprador
│   │
│   ├── Routes/                      # Configuración de rutas
│   │   └── AppRoutes.tsx            # Definición de todas las rutas de la app
│   │
│   ├── infrastructure/              # Capa de infraestructura (Clean Architecture)
│   │   ├── config/                  # Configuraciones
│   │   │   └── firebase.config.tsx  # Configuración de Firebase
│   │   ├── constants/               # Constantes de la aplicación
│   │   │   ├── categories.constants.tsx
│   │   │   ├── login.constants.tsx
│   │   │   ├── menu.constants.tsx
│   │   │   ├── navigation.constants.tsx
│   │   │   └── ...                  # Más constantes
│   │   ├── data/                    # Gestión de datos
│   │   │   └── productData.tsx      # Manager de datos de productos
│   │   ├── Interfaces/              # Interfaces TypeScript
│   │   │   ├── articulo.interface.tsx
│   │   │   ├── menu.interfaces.tsx
│   │   │   ├── oferta.interface.tsx
│   │   │   └── ...
│   │   ├── services/                # Servicios de negocio
│   │   │   ├── firebaseAuth.service.tsx
│   │   │   ├── product.service.tsx
│   │   │   ├── productDetail.service.tsx
│   │   │   ├── registration.service.tsx
│   │   │   ├── search.service.tsx
│   │   │   └── validation.service.tsx
│   │   ├── types/                   # Tipos TypeScript
│   │   │   ├── auth.types.tsx
│   │   │   ├── cart.types.tsx
│   │   │   ├── product.types.tsx
│   │   │   └── ...
│   │   └── utils/                   # Utilidades
│   │       ├── loginStorage.utils.tsx
│   │       └── ...
│   │
│   ├── presentation/                # Capa de presentación
│   │   ├── Layouts/                 # Layouts de la aplicación
│   │   │   └── AppLayout.tsx        # Layout principal con Header y Footer
│   │   │
│   │   ├── components/              # Componentes de UI
│   │   │   ├── auth/                # Componentes de autenticación
│   │   │   │   └── Login/
│   │   │   ├── cart/                # Componentes del carrito
│   │   │   ├── category/            # Componentes de categorías
│   │   │   ├── Categorias/          # Navegación de categorías
│   │   │   ├── Checkout/            # Componentes de checkout
│   │   │   ├── DatosClientes/       # Datos del cliente
│   │   │   ├── Direccion/           # Gestión de direcciones
│   │   │   ├── filters/             # Filtros de productos
│   │   │   ├── form/                # Componentes de formularios
│   │   │   ├── layout/              # Componentes de layout
│   │   │   │   ├── HeaderDesktop/
│   │   │   │   └── FooterDesktop/
│   │   │   ├── Menu/                # Menú de navegación
│   │   │   ├── Opiniones/           # Opiniones de clientes
│   │   │   ├── product/             # Componentes de productos
│   │   │   ├── search/              # Búsqueda de productos
│   │   │   ├── UI/                  # Componentes UI genéricos
│   │   │   │   └── PageLoader/
│   │   │   ├── utils/               # Utilidades de componentes
│   │   │   └── WishList/            # Lista de deseos
│   │   │
│   │   ├── hooks/                   # Custom Hooks
│   │   │   ├── useCart.tsx          # Hook para gestión del carrito
│   │   │   ├── useCartSync.tsx      # Hook para sincronización del carrito
│   │   │   ├── useCheckoutFin.tsx   # Hook para finalización de checkout
│   │   │   ├── useComprasRealizadas.tsx
│   │   │   ├── useDatosPersonales.tsx
│   │   │   ├── useDetalleCompras.tsx
│   │   │   ├── useDireccion.tsx
│   │   │   ├── useHeaderNavigation.tsx
│   │   │   ├── useImageGallery.tsx
│   │   │   ├── useLogin.tsx         # Hook para autenticación
│   │   │   ├── useLogout.tsx
│   │   │   ├── useNewsletter.tsx
│   │   │   ├── usePagination.tsx
│   │   │   ├── useProductDetail.tsx # Hook para detalle de producto
│   │   │   ├── useScrollToTop.tsx
│   │   │   └── ...
│   │   │
│   │   ├── middleware/              # Middlewares
│   │   │   └── auth/
│   │   │       └── rutasProtegidas.middleware.tsx
│   │   │
│   │   └── pages/                   # Páginas de la aplicación
│   │       ├── Abono/               # Página de abono
│   │       ├── Checkout/            # Páginas de checkout
│   │       │   ├── Checkout.tsx
│   │       │   └── CheckoutFin.tsx
│   │       ├── ComprasRealizadas/   # Historial de compras
│   │       ├── CondicionesDeUso/    # Términos y condiciones
│   │       ├── Cupones/             # Gestión de cupones
│   │       ├── DatosPersonales/     # Datos personales del usuario
│   │       ├── DerechosReservados/  # Derechos reservados
│   │       ├── DetalleCompras/      # Detalle de compra
│   │       ├── Devoluciones/        # Política de devoluciones
│   │       ├── Direccion/           # Gestión de direcciones
│   │       ├── Envios/              # Información de envíos
│   │       ├── ItemDetailContainer/ # Detalle de producto
│   │       ├── ItemListContainer/   # Listado de productos por categoría
│   │       ├── MaInPage/            # Página principal
│   │       ├── NotaLegalData/       # Nota legal
│   │       ├── Pedidos/             # Gestión de pedidos
│   │       ├── PoliticaDeCookies/   # Política de cookies
│   │       ├── PoliticaDePrivacidad/ # Política de privacidad
│   │       ├── Preguntas/           # Preguntas frecuentes
│   │       ├── ProductosBuscados/   # Resultados de búsqueda
│   │       ├── QuienesSomos/        # Quiénes somos
│   │       ├── Register/            # Registro de usuarios
│   │       └── WishList/            # Lista de deseos
│   │
│   ├── Json/                        # Datos JSON estáticos
│   ├── Public/                      # Assets públicos
│   ├── assets/                      # Assets de la aplicación
│   ├── index.css                    # Estilos globales
│   └── main.tsx                     # Punto de entrada de la aplicación
│
├── .eslintrc.cjs                    # Configuración de ESLint
├── .gitignore                       # Archivos ignorados por Git
├── index.html                       # HTML principal
├── package.json                     # Dependencias y scripts
├── tsconfig.json                    # Configuración de TypeScript
├── tsconfig.node.json               # Configuración de TypeScript para Node
├── vercel.json                      # Configuración de Vercel
├── vite.config.ts                   # Configuración de Vite
└── README.md                        # Documentación

```

---

## Arquitectura

El proyecto sigue los principios de **Clean Architecture**, separando claramente las responsabilidades en capas:

### 1. Capa de Infraestructura (`infrastructure/`)

Contiene toda la lógica de bajo nivel, configuraciones externas y servicios:

- **`config/`**: Configuración de servicios externos (Firebase)
- **`constants/`**: Constantes y configuraciones estáticas
- **`data/`**: Gestión y acceso a datos
- **`Interfaces/` y `types/`**: Definiciones de tipos TypeScript
- **`services/`**: Servicios de negocio (autenticación, productos, validaciones)
- **`utils/`**: Utilidades y helpers

### 2. Capa de Presentación (`presentation/`)

Contiene toda la UI y lógica de presentación:

- **`Layouts/`**: Layouts reutilizables
- **`components/`**: Componentes de UI organizados por dominio
- **`hooks/`**: Custom hooks para lógica reutilizable
- **`middleware/`**: Middlewares de routing (protección de rutas)
- **`pages/`**: Páginas completas de la aplicación

### 3. Capa de Routing (`Routes/`)

Configuración centralizada de todas las rutas de la aplicación con lazy loading para optimización.

### 4. Gestión de Estado (`Components/zustand.jsx`)

Store global centralizado con Zustand que maneja:

- Carrito de compras
- Autenticación
- Datos de sesión
- Wishlist
- Direcciones
- Compras realizadas

---

## Rutas de la Aplicación

### Rutas Públicas

| Ruta                             | Componente             | Descripción                               |
| -------------------------------- | ---------------------- | ----------------------------------------- |
| `/`                              | `MainPage`             | Página principal con productos destacados |
| `/categoria/:categoria`          | `ItemListContainer`    | Listado de productos por categoría        |
| `/detalle/:producto`             | `ItemDetailContainer`  | Detalle completo de un producto           |
| `/producto/:producto`            | `ProductosBuscados`    | Resultados de búsqueda                    |
| `/login`                         | `Login`                | Inicio de sesión                          |
| `/register`                      | `Register`             | Registro de usuarios                      |
| `/footer/envios`                 | `Envios`               | Información de envíos                     |
| `/footer/cambios-devoluciones`   | `Devoluciones`         | Política de devoluciones                  |
| `/footer/preguntas-frecuentes`   | `Preguntas`            | Preguntas frecuentes                      |
| `/footer/quienes-somos`          | `QuienesSomos`         | Información de la empresa                 |
| `/footer/condiciones-de-uso`     | `CondicionesDeUso`     | Términos y condiciones                    |
| `/footer/politica-de-privacidad` | `PoliticaDePrivacidad` | Política de privacidad                    |
| `/footer/politica-de-cookies`    | `PoliticaDeCookies`    | Política de cookies                       |
| `/footer/nota-legal`             | `NotaLegal`            | Nota legal                                |
| `/derechos`                      | `DerechosReservados`   | Derechos reservados                       |

### Rutas Protegidas (Requieren Autenticación)

| Ruta                  | Componente          | Descripción                      |
| --------------------- | ------------------- | -------------------------------- |
| `/checkout`           | `Checkout`          | Proceso de pago                  |
| `/checkout/fin`       | `CheckoutFin`       | Confirmación de compra           |
| `/direccion`          | `Direccion`         | Gestión de direcciones           |
| `/cupones`            | `Cupones`           | Cupones de descuento             |
| `/abono`              | `Abono`             | Métodos de pago                  |
| `/pedidos`            | `Pedidos`           | Gestión de pedidos               |
| `/wishlist`           | `Wishlist`          | Lista de deseos                  |
| `/datos/personales`   | `DatosPersonales`   | Datos personales del usuario     |
| `/comprasRealizadas`  | `ComprasRealizadas` | Historial de compras             |
| `/detalle/compra/:id` | `DetalleCompras`    | Detalle de una compra específica |

### Middleware de Protección de Rutas

El middleware `MiddlewareRutasProtegidas` verifica el estado de autenticación desde Zustand y redirige a la página principal si el usuario no está autenticado.

```typescript
// src/presentation/middleware/auth/rutasProtegidas.middleware.tsx
function MiddlewareRutasProtegidas() {
  const { acceso } = storeZustand();
  return acceso ? <Outlet /> : <Navigate to="/" />;
}
```

---

## Gestión de Estado

### Zustand Store (`Components/zustand.jsx`)

El store global de Zustand maneja todo el estado de la aplicación:

#### Estados Principales

```javascript
{
  // Carrito de compras
  cart: [],                      // Productos en el carrito
  cantidadArticulosCarrito: [],  // Cantidad de artículos
  cantidadArticulossss: 0,       // Contador total

  // Autenticación
  acceso: false,                 // Estado de autenticación
  datosDeSesion: {},             // Datos de sesión
  usuarioEnSesion: "",           // Email del usuario
  EmailDeInicioDeSesion: [],     // Email de inicio de sesión

  // Usuario
  datosPersonaless: {},          // Datos personales del usuario
  miDireccionCompleta: [],       // Direcciones guardadas

  // Wishlist
  wishList: [],                  // Productos favoritos

  // Compras
  compras: [],                   // Historial de compras

  // UI
  activeModal: false             // Estado de modales
}
```

#### Acciones Principales

- **`setCart(newCart)`**: Actualiza el carrito
- **`setAcceso(newState)`**: Actualiza estado de autenticación
- **`setDatosPersonales(data)`**: Guarda datos de sesión
- **`setMiDireccionCompleta(direction)`**: Guarda direcciones
- **`setWishList(data)`**: Actualiza wishlist
- **`setCompras(data)`**: Actualiza historial de compras
- **`reset()`**: Resetea todo el estado

#### Persistencia

El store sincroniza automáticamente con `Firestore`:

- `carritoDoraemon`: Carrito de compras
- `LogueoDeSesion`: Estado de autenticación
- `datosMios`: Datos de sesión
- `miDireccionCompleta`: Direcciones
- `WishList`: Lista de deseos
- `DatosPersonalesDelUsuario`: Datos personales
- `EmailDeInicioDeSesion`: Email de sesión

---

## Hooks Personalizados

### Hooks de Autenticación

#### `useLogin`

Hook para gestión completa del inicio de sesión con Firebase:

```typescript
const {
  formState, // Estado del formulario
  isAuthenticated, // Estado de autenticación
  isServiceReady, // Firebase listo
  handleEmailChange, // Handler de email
  handlePasswordChange, // Handler de contraseña
  handleLogin, // Función de login
  hasFormErrors, // Errores del formulario
} = useLogin({ zustandStore });
```

**Características:**

- Validación de formularios en tiempo real
- Integración con Firebase Authentication
- Manejo de errores con SweetAlert2
- Persistencia segura en Firestore
- Listener de cambios de estado de autenticación por medio de Firestore Authentication

#### `useLogout`

Hook para cerrar sesión de forma segura.

### Hooks de Carrito

#### `useCart`

Hook para gestión completa del carrito de compras:

```typescript
const {
  cart, // Array de productos
  cartTotals, // { total, itemCount }
  increaseQuantity, // Incrementar cantidad
  decreaseQuantity, // Decrementar cantidad
  removeFromCart, // Eliminar producto
} = useCart();
```

**Características:**

- Sincronización automática con Firestore
- Cálculo de totales en tiempo real
- Actualización de contador global en Zustand

#### `useCartSync`

Hook para sincronización del carrito entre pestañas/dispositivos.

### Hooks de Productos

#### `useProductDetail`

Hook para obtener detalles completos de un producto:

```typescript
const {
  product, // Producto con detalles
  relatedProducts, // Productos relacionados
  isLoading, // Estado de carga
  error, // Error si existe
  notFound, // Producto no encontrado
  seoData, // Datos SEO
  availability, // Disponibilidad
  hasAdditionalInfo, // Tiene info adicional
  hasMultipleImages, // Tiene múltiples imágenes
} = useProductDetail({ productName });
```

**Características:**

- Búsqueda de producto por nombre
- Generación de breadcrumbs
- Productos relacionados por subcategoría
- Datos SEO automáticos
- Validación de disponibilidad

### Hooks de Usuario

#### `useDatosPersonales`

Hook para gestión de datos personales del usuario.

#### `useDireccion`

Hook para gestión de direcciones de envío.

#### `useComprasRealizadas`

Hook para obtener historial de compras.

#### `useDetalleCompras`

Hook para obtener detalle de una compra específica.

### Hooks de Checkout

#### `useCheckoutFin`

Hook para finalización del proceso de checkout.

### Hooks de UI

#### `useScrollToTop`

Hook para scroll automático al cambiar de ruta.

#### `useHeaderNavigation`

Hook para navegación del header.

#### `useImageGallery`

Hook para galería de imágenes de productos.

#### `usePagination`

Hook para paginación de listados.

#### `useNewsletter`

Hook para suscripción a newsletter.

#### `useCurrentYear`

Hook para obtener el año actual (footer).

---

## Servicios

### FirebaseAuthService

Servicio de autenticación con Firebase:

```typescript
class FirebaseAuthService {
  async signIn(credentials: LoginFormData): Promise<FirebaseAuthUser>;
  onAuthStateChanged(callback): () => void;
  getCurrentUser(): FirebaseAuthUser | null;
  isReady(): boolean;
}
```

### ProductService

Servicio para gestión de productos:

- Búsqueda de productos
- Filtrado por categorías
- Gestión de stock

### ProductDetailService

Servicio para detalles de productos:

- Búsqueda por nombre
- Productos relacionados
- Generación de breadcrumbs
- Datos SEO

### ValidationService

Servicio para validaciones de formularios.

### RegistrationService

Servicio para registro de usuarios.

### SearchService

Servicio para búsqueda de productos.

---

## Contribuciones

¡Las contribuciones son bienvenidas! Seguí estos pasos:

1. Hacé un fork del repositorio.
2. Creá una rama para tu feature o fix (`git checkout -b feature/nueva-funcionalidad`).
3. Realizá tus cambios y escribí pruebas si es necesario.
4. Hacé commit y push a tu rama (`git commit -m "feat: agrega nueva funcionalidad"`).
5. Abrí un Pull Request describiendo tus cambios.

### Convenciones de Commits

Este proyecto sigue [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Cambios en documentación
- `style:` Cambios de formato (no afectan la lógica)
- `refactor:` Refactorización de código
- `test:` Añadir o modificar tests
- `chore:` Tareas de mantenimiento

---

## Licencia

Este proyecto está bajo la licencia **MIT**.

---

## 📬 Contacto

- **Autor:** Lucas Cabral
- **Email:** lucassimple@hotmail.com
- **LinkedIn:** [https://www.linkedin.com/in/lucas-gastón-cabral/](https://www.linkedin.com/in/lucas-gastón-cabral/)
- **Portfolio:** [https://portfolio-web-dev-git-main-lucascabral95s-projects.vercel.app/](https://portfolio-web-dev-git-main-lucascabral95s-projects.vercel.app/)
- **Github:** [https://github.com/Lucascabral95](https://github.com/Lucascabral95/)

---

<p align="center">
  Desarrollado con ❤️ por Lucas Cabral
</p>
