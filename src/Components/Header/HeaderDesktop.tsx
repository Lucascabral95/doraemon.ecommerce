// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// import storeZustand from "../zustand.jsx";
// import "./HeaderDesktop.scss";

// export default function HeaderDesktop() {
//   const [activeSidebar, setActiveSidebar] = useState(false);
//   const [activeCategoria, setActiveCategoria] = useState({
//     juguetes: false,
//     peliculas: false,
//     escolar: false,
//     moda: false,
//     hogar: false,
//     regalos: false,
//   });
//   const [activeSearch, setActiveSearch] = useState(false);
//   const [articuloBuscado, setArticuloBuscado] = useState("");
//   const { cart, cantidadArticulossss, setCantidadArticulossss } =
//     storeZustand();

//   const handleCategoria = (categoria) => {
//     setActiveCategoria({
//       ...activeCategoria,
//       [categoria]: !activeCategoria[categoria],
//     });
//   };

//   const getConditionalStyle = (category) => ({
//     transform: activeCategoria[category] ? "rotate(180deg)" : "rotate(0deg)",
//     transition: "transform 0.5s ease-in-out",
//   });

//   const busqueda = (event) => {
//     setArticuloBuscado(event.target.value);
//   };

//   const redirectToProduct = () => {
//     if (articuloBuscado) {
//       window.location.href = `/producto/${articuloBuscado}`;
//     }
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       window.location.href = `/producto/${articuloBuscado}`;
//     }
//   };

//   useEffect(() => {
//     const nuevaCantidad = cart?.reduce((acc, item) => acc + item?.cantidad, 0);
//     setCantidadArticulossss(nuevaCantidad);
//   }, [cart]);

//   return (
//     <div className="header-desktop">
//       <nav>
//         <div className="contenedor-logo">
//           <Link to="/" className="a-logo">
//             <img
//               className="img-logo"
//               src="https://doraemon.lukinternacional.com/img/doraemon-logo-1612528256.jpg"
//               alt="Logo de Doraemon"
//             />
//           </Link>
//         </div>

//         <div className="contenedor-categorias">
//           <div className="categoria">
//             <Link to={"/categoria/Juguete"} className="categoria-texto">
//               JUGUETES
//             </Link>
//             <div className="contenedor-articulos" style={{ display: "none" }}>
//               <div className="articulos">
//                 <Link to={"/categoria/Peluche"} className="con-texto">
//                   <div className="texto">PELUCHES</div>
//                 </Link>
//                 <Link to={"/categoria/Juego"} className="con-texto">
//                   <div className="texto">JUEGOS</div>
//                 </Link>
//                 <Link to={"/categoria/Figura"} className="con-texto">
//                   <div className="texto">FIGURAS</div>
//                 </Link>
//                 <Link to={"/categoria/AireLibre"} className="con-texto">
//                   <div className="texto">AIRE LIBRE</div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="categoria">
//             <Link to={"/categoria/Pelicula"} className="categoria-texto">
//               PELÍCULAS
//             </Link>
//             <div className="contenedor-articulos" style={{ display: "none" }}>
//               <div className="articulos">
//                 <Link to={"/categoria/DVD"} className="con-texto">
//                   <div className="texto">DVD</div>
//                 </Link>
//                 <Link to={"/categoria/BLURAY"} className="con-texto">
//                   <div className="texto">BLU RAY</div>
//                 </Link>
//                 <Link to={"/categoria/PACK"} className="con-texto">
//                   <div className="texto">PACKS</div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="categoria">
//             <Link to={"/categoria/Escolar"} className="categoria-texto">
//               ESCOLAR Y PAPALERÍA
//             </Link>
//             <div className="contenedor-articulos" style={{ display: "none" }}>
//               <div className="articulos">
//                 <Link to={"/categoria/MaterialEscolar"} className="con-texto">
//                   <div className="texto">MATERIAL ESCOLAR</div>
//                 </Link>
//                 <Link to={"/categoria/Mochila"} className="con-texto">
//                   <div className="texto">MOCHILAS Y BOLSAS</div>
//                 </Link>
//                 <Link to={"/categoria/Libro"} className="con-texto">
//                   <div className="texto">LIBROS DE ACTIVIDADES</div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="categoria">
//             <Link to={"/categoria/Moda"} className="categoria-texto">
//               MODA
//             </Link>
//             <div className="contenedor-articulos" style={{ display: "none" }}>
//               <div className="articulos">
//                 <Link to={"/categoria/Ropa"} className="con-texto">
//                   <div className="texto">ROPA</div>
//                 </Link>
//                 <Link to={"/categoria/Accesorios"} className="con-texto">
//                   <div className="texto">ACCESORIOS Y COMPLEMENTOS</div>
//                 </Link>
//                 <Link to={"/categoria/Disfraz"} className="con-texto">
//                   <div className="texto">DISFRACES</div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="categoria">
//             <Link to={"/categoria/Hogar"} className="categoria-texto">
//               HOGAR
//             </Link>
//             <div className="contenedor-articulos" style={{ display: "none" }}>
//               <div className="articulos">
//                 <Link to={"/categoria/RopaCama"} className="con-texto">
//                   <div className="texto">ROPA DE CAMA</div>
//                 </Link>
//                 <Link to={"/categoria/Taza"} className="con-texto">
//                   <div className="texto">TAZAS Y VAJILLA</div>
//                 </Link>
//                 <Link to={"/categoria/Baño"} className="con-texto">
//                   <div className="texto">BAÑO</div>
//                 </Link>
//                 <Link to={"/categoria/Otros"} className="con-texto">
//                   <div className="texto">OTROS</div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="categoria">
//             <Link to={"/categoria/LotesExclusivos"} className="categoria-texto">
//               LOTES EXCLUSIVOS
//             </Link>
//           </div>
//           <div className="categoria">
//             <Link to={"/categoria/Regalo"} className="categoria-texto">
//               REGALOS
//             </Link>
//             <div className="contenedor-articulos" style={{ display: "none" }}>
//               <div className="articulos">
//                 <Link to={"/categoria/DE 1 A 3 AÑOS"} className="con-texto">
//                   <div className="texto">DE 1 A 3 AÑOS</div>
//                 </Link>
//                 <Link to={"/categoria/DE 3 A 5 AÑOS"} className="con-texto">
//                   <div className="texto">DE 3 A 5 AÑOS</div>
//                 </Link>
//                 <Link to={"/categoria/DE 5 A 8 AÑOS"} className="con-texto">
//                   <div className="texto">DE 5 A 8 AÑOS</div>
//                 </Link>
//                 <Link to={"/categoria/DE 8 A 11 AÑOS"} className="con-texto">
//                   <div className="texto">DE 8 A 11 AÑOS</div>
//                 </Link>
//                 <Link to={"/categoria/ADULTOS"} className="con-texto">
//                   <div className="texto">ADULTOS</div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="contenedor-busqueda">
//           <div className="idioma">
//             <a href="#">
//               <div className="contenedor-idiomas">
//                 <svg
//                   className="icon"
//                   class="lang__icon fill-current text-primary-300"
//                   stroke="none"
//                   width="8.844"
//                   fill="#009FE3"
//                   height="5.358"
//                 >
//                   <path d="M4.422 5.357L.193 1.124a.659.659 0 11.931-.931l3.3 3.293 3.3-3.293a.659.659 0 01.931.931z"></path>
//                 </svg>
//                 <div className="con-idioma-texto">
//                   <p className="idioma-texto"> ES </p>
//                 </div>
//               </div>
//             </a>
//           </div>
//           <div className="busqueda">
//             <input
//               id="texto-busqueda"
//               type="text"
//               required
//               placeholder="Buscar producto"
//               value={articuloBuscado}
//               onChange={busqueda}
//               onKeyPress={handleKeyPress}
//             />

//             <div className="con-lupa" onClick={redirectToProduct}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="fill-current w-6 h-6 md:w-5 md:h-5 text-primary-300"
//                 width="20"
//                 height="20"
//                 fill="#009FE3"
//                 viewBox="0 0 22.4 22.4"
//                 overflow="visible"
//               >
//                 <path
//                   className="lupa"
//                   d="M22.4 21l-4.8-4.8c1.4-1.7 2.2-3.9 2.2-6.3 0-5.5-4.4-9.9-9.9-9.9S0 4.4 0 9.9s4.4 9.9 9.9 9.9c2.4 0 4.5-.8 6.3-2.2l4.8 4.8 1.4-1.4zM9.9 17.8C5.5 17.8 2 14.3 2 9.9S5.5 2 9.9 2s7.9 3.5 7.9 7.9-3.5 7.9-7.9 7.9z"
//                 ></path>
//               </svg>
//             </div>
//           </div>
//           <div className="carrito-login">
//             <div className="caja">
//               <svg
//                 id="lupita"
//                 onClick={() => setActiveSearch(true)}
//                 style={{ display: "none" }}
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="fill-current w-6 h-6 md:w-5 md:h-5 text-primary-300"
//                 width="22.7"
//                 height="22.8"
//                 fill="#009FE3"
//                 viewBox="0 0 22.4 22.4"
//                 overflow="visible"
//               >
//                 <path
//                   className="lupp"
//                   d="M22.4 21l-4.8-4.8c1.4-1.7 2.2-3.9 2.2-6.3 0-5.5-4.4-9.9-9.9-9.9S0 4.4 0 9.9s4.4 9.9 9.9 9.9c2.4 0 4.5-.8 6.3-2.2l4.8 4.8 1.4-1.4zM9.9 17.8C5.5 17.8 2 14.3 2 9.9S5.5 2 9.9 2s7.9 3.5 7.9 7.9-3.5 7.9-7.9 7.9z"
//                 ></path>
//               </svg>
//             </div>
//             <div className="caja">
//               <Link to={"/login"}>
//                 <svg
//                   className="carrito-login-icon"
//                   xmlns="http>//www.w3.org/2000/svg"
//                   width="22.7"
//                   height="22.8"
//                   overflow="visible"
//                   fill="#009FE3"
//                 >
//                   <path d="M22.7 22.8H0v-3.6C0 14.9 7.5 13 11.3 13c3.8 0 11.3 1.9 11.4 6.2v3.6zM2 20.8h18.7v-1.6c-.1-2.4-5.7-4.2-9.4-4.2S2 16.8 2 19.2v1.6zm9.3-8.4h-.1c-3.4 0-6.2-2.8-6.1-6.2C5.1 2.8 7.9 0 11.3 0c3.5 0 6.2 2.8 6.2 6.2 0 3.5-2.8 6.2-6.2 6.2zM11.4 2C9 2 7.1 3.9 7.1 6.2c0 2.3 1.8 4.2 4.1 4.2h.1c2.3 0 4.1-1.8 4.2-4.1 0-2.4-1.8-4.3-4.1-4.3z"></path>
//                 </svg>
//               </Link>
//             </div>
//             <div className="caja">
//               <Link to={"/checkout"}>
//                 <svg
//                   className="carrito-login-icon"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="fill-current text-primary-300 w-6 h-6"
//                   width="22.1"
//                   height="23.6"
//                   overflow="visible"
//                   fill="#009FE3"
//                 >
//                   <path d="M6.5 22.6c-1.8 0-3.2-1.4-3.2-3.2 0-1.8 1.4-3.2 3.2-3.2 1.8 0 3.2 1.4 3.2 3.2 0 1.8-1.4 3.2-3.2 3.2zm0-4.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2z"></path>
//                   <path d="M18.8 22.6c-1.8 0-3.2-1.4-3.2-3.2 0-1.8 1.4-3.2 3.2-3.2 1.8 0 3.2 1.4 3.2 3.2 0 1.8-1.4 3.2-3.2 3.2zm0-4.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2z"></path>
//                   <path d="M20.4 15.4H4.2L2 1H0v-2h3.8l.5 3.6h17.8l-1.7 12.8zM6 13.4h12.7l1.2-8.8H4.6L6 13.4z"></path>
//                 </svg>

//                 {cantidadArticulossss > 0 && (
//                   <div className="carrito-cantidad-articulos">
//                     <span> {cantidadArticulossss} </span>
//                   </div>
//                 )}
//               </Link>
//             </div>
//             <div className="caja" onClick={() => setActiveSidebar(true)}>
//               <svg
//                 id="hamburguesa"
//                 style={{ display: "none", cursor: "pointer" }}
//                 width="32"
//                 height="32"
//                 color="#009FE3"
//                 className="text-primary-300 w-8 h-8"
//                 viewBox="0 0 32 32"
//                 stroke="currentcolor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"></path>
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div
//           className="sidebar"
//           style={{ display: activeSidebar ? "block" : "none" }}
//         >
//           <div className="all">
//             <div className="abrir-cerrar">
//               <div className="contenedor-texto">
//                 <p className="texto">ES PT</p>
//               </div>
//               <div
//                 className="contenedor-icon-x"
//                 onClick={() => setActiveSidebar(false)}
//               >
//                 <svg
//                   className="icon"
//                   width="24"
//                   height="24"
//                   color="#FFFFFF"
//                   class="text-primary-300 w-8 h-8"
//                   viewBox="0 0 32 32"
//                   stroke="currentcolor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 >
//                   <path d="M2 30 L30 2 M30 30 L2 2"></path>
//                 </svg>
//               </div>
//             </div>

//             <div className="categoria">
//               <div className="categoria-nombre">
//                 <div
//                   className="contenedor-texto-icon"
//                   onClick={() => handleCategoria("juguetes")}
//                 >
//                   <div className="con-texto">
//                     <p className="texto">JUGUETES</p>
//                   </div>
//                   <div
//                     className="con-icon"
//                     style={getConditionalStyle("juguetes")}
//                   >
//                     <svg
//                       class="menuDown icon fill-current text-white w-4 h-4"
//                       stroke="none"
//                       viewBox="0 0 24 24"
//                       fill="#FFFFFF"
//                       width="18"
//                       height="18"
//                     >
//                       <path d="M12 16.7L1.2 5.9c-.3-.3-.7-.3-1 0s-.3.7 0 1l11.3 11.3c.3.3.7.3 1 0L23.8 6.8c.1-.1.2-.3.2-.5s-.1-.3-.2-.4c-.3-.3-.7-.3-1 0L12 16.7z"></path>
//                     </svg>
//                   </div>
//                 </div>
//                 <div
//                   className="contenedor-articulos"
//                   style={{
//                     display: activeCategoria.juguetes ? "block" : "none",
//                   }}
//                 >
//                   <div className="articulos">
//                     <Link
//                       to={"/categoria/Peluche"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto">PELUCHES</p>
//                     </Link>
//                     <Link
//                       to={"/categoria/Juego"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto">JUEGOS</p>
//                     </Link>
//                     <Link
//                       to={"/categoria/Figura"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto">FIGURAS</p>
//                     </Link>
//                     <Link
//                       to={"/categoria/AireLibre"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto" style={{ marginBottom: "0px" }}>
//                         AIRE LIBRE
//                       </p>
//                     </Link>
//                   </div>
//                 </div>
//                 <div
//                   className="contenedor-texto-icon"
//                   onClick={() => handleCategoria("peliculas")}
//                 >
//                   <div className="con-texto">
//                     <p className="texto">PELÍCULA</p>
//                   </div>
//                   <div
//                     className="con-icon"
//                     style={getConditionalStyle("peliculas")}
//                   >
//                     <svg
//                       class="menuDown icon fill-current text-white w-4 h-4"
//                       stroke="none"
//                       viewBox="0 0 24 24"
//                       fill="#FFFFFF"
//                       width="18"
//                       height="18"
//                     >
//                       <path d="M12 16.7L1.2 5.9c-.3-.3-.7-.3-1 0s-.3.7 0 1l11.3 11.3c.3.3.7.3 1 0L23.8 6.8c.1-.1.2-.3.2-.5s-.1-.3-.2-.4c-.3-.3-.7-.3-1 0L12 16.7z"></path>
//                     </svg>
//                   </div>
//                 </div>
//                 <div
//                   className="contenedor-articulos"
//                   style={{
//                     display: activeCategoria.peliculas ? "block" : "none",
//                   }}
//                 >
//                   <div className="articulos">
//                     <Link
//                       to={"/categoria/DVD"}
//                       onClick={() => setActiveSidebar(false)}
//                     ></Link>
//                     <p className="texto">DVD</p>
//                     <Link
//                       to={"/categoria/BLURAY"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto">BLUE RAY</p>
//                     </Link>
//                     <Link
//                       to={"/categoria/PACK"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto" style={{ marginBottom: "0px" }}>
//                         PACK
//                       </p>
//                     </Link>
//                   </div>
//                 </div>
//                 <div
//                   className="contenedor-texto-icon"
//                   onClick={() => handleCategoria("escolar")}
//                 >
//                   <div className="con-texto">
//                     <p className="texto">ESCOLAR Y PAPELERÍA</p>
//                   </div>
//                   <div
//                     className="con-icon"
//                     style={getConditionalStyle("escolar")}
//                   >
//                     <svg
//                       class="menuDown icon fill-current text-white w-4 h-4"
//                       stroke="none"
//                       viewBox="0 0 24 24"
//                       fill="#FFFFFF"
//                       width="18"
//                       height="18"
//                     >
//                       <path d="M12 16.7L1.2 5.9c-.3-.3-.7-.3-1 0s-.3.7 0 1l11.3 11.3c.3.3.7.3 1 0L23.8 6.8c.1-.1.2-.3.2-.5s-.1-.3-.2-.4c-.3-.3-.7-.3-1 0L12 16.7z"></path>
//                     </svg>
//                   </div>
//                 </div>
//                 <div
//                   className="contenedor-articulos"
//                   style={{
//                     display: activeCategoria.escolar ? "block" : "none",
//                   }}
//                 >
//                   <div className="articulos">
//                     <Link
//                       to={"/categoria/MaterialEscolar"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto">MATERIAL ESCOLAR</p>
//                     </Link>
//                     <Link
//                       to={"/categoria/Mochila"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto">MOCHILAS Y BOLSAS</p>
//                     </Link>
//                     <Link
//                       to={"/categoria/Libro"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto" style={{ marginBottom: "0px" }}>
//                         LIBROS DE ACTIVIDADES
//                       </p>
//                     </Link>
//                   </div>
//                 </div>
//                 <div
//                   className="contenedor-texto-icon"
//                   onClick={() => handleCategoria("moda")}
//                 >
//                   <div className="con-texto">
//                     <p className="texto">MODA</p>
//                   </div>
//                   <div className="con-icon" style={getConditionalStyle("moda")}>
//                     <svg
//                       class="menuDown icon fill-current text-white w-4 h-4"
//                       stroke="none"
//                       viewBox="0 0 24 24"
//                       fill="#FFFFFF"
//                       width="18"
//                       height="18"
//                     >
//                       <path d="M12 16.7L1.2 5.9c-.3-.3-.7-.3-1 0s-.3.7 0 1l11.3 11.3c.3.3.7.3 1 0L23.8 6.8c.1-.1.2-.3.2-.5s-.1-.3-.2-.4c-.3-.3-.7-.3-1 0L12 16.7z"></path>
//                     </svg>
//                   </div>
//                 </div>
//                 <div
//                   className="contenedor-articulos"
//                   style={{ display: activeCategoria.moda ? "block" : "none" }}
//                 >
//                   <div className="articulos">
//                     <Link
//                       to={"/categoria/Ropa"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto">ROPA</p>
//                     </Link>
//                     <Link
//                       to={"/categoria/Accesorios"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto">ACCESORIOS Y COMPLEMENTOS</p>
//                     </Link>
//                     <Link
//                       to={"/categoria/Disfraz"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto" style={{ marginBottom: "0px" }}>
//                         DISFRACES
//                       </p>
//                     </Link>
//                   </div>
//                 </div>
//                 <div
//                   className="contenedor-texto-icon"
//                   onClick={() => handleCategoria("hogar")}
//                 >
//                   <div className="con-texto">
//                     <p className="texto">HOGAR</p>
//                   </div>
//                   <div
//                     className="con-icon"
//                     style={getConditionalStyle("hogar")}
//                   >
//                     <svg
//                       class="menuDown icon fill-current text-white w-4 h-4"
//                       stroke="none"
//                       viewBox="0 0 24 24"
//                       fill="#FFFFFF"
//                       width="18"
//                       height="18"
//                     >
//                       <path d="M12 16.7L1.2 5.9c-.3-.3-.7-.3-1 0s-.3.7 0 1l11.3 11.3c.3.3.7.3 1 0L23.8 6.8c.1-.1.2-.3.2-.5s-.1-.3-.2-.4c-.3-.3-.7-.3-1 0L12 16.7z"></path>
//                     </svg>
//                   </div>
//                 </div>
//                 <div
//                   className="contenedor-articulos"
//                   style={{ display: activeCategoria.hogar ? "block" : "none" }}
//                 >
//                   <div className="articulos">
//                     <Link
//                       to={"/categoria/RopaCama"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto">ROPA DE CAMA</p>
//                     </Link>
//                     <Link
//                       to={"/categoria/Taza"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto">TAZAS Y VAJILLA</p>
//                     </Link>
//                     <Link
//                       to={"/categoria/Baño"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto">BAÑO</p>
//                     </Link>
//                     <Link
//                       to={"/categoria/Otros"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto" style={{ marginBottom: "0px" }}>
//                         OTROS
//                       </p>
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="contenedor-texto-icon">
//                   <div className="con-texto">
//                     <Link
//                       to={"/categoria/LotesExclusivos"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto">LOTES EXCLUSIVOS</p>
//                     </Link>
//                   </div>
//                 </div>
//                 <div
//                   className="contenedor-texto-icon"
//                   onClick={() => handleCategoria("regalos")}
//                 >
//                   <div className="con-texto">
//                     <p className="texto">REGALOS</p>
//                   </div>
//                   <div
//                     className="con-icon"
//                     style={getConditionalStyle("regalos")}
//                   >
//                     <svg
//                       class="menuDown icon fill-current text-white w-4 h-4"
//                       stroke="none"
//                       viewBox="0 0 24 24"
//                       fill="#FFFFFF"
//                       width="18"
//                       height="18"
//                     >
//                       <path d="M12 16.7L1.2 5.9c-.3-.3-.7-.3-1 0s-.3.7 0 1l11.3 11.3c.3.3.7.3 1 0L23.8 6.8c.1-.1.2-.3.2-.5s-.1-.3-.2-.4c-.3-.3-.7-.3-1 0L12 16.7z"></path>
//                     </svg>
//                   </div>
//                 </div>
//                 <div
//                   className="contenedor-articulos"
//                   style={{
//                     display: activeCategoria.regalos ? "block" : "none",
//                   }}
//                 >
//                   <div className="articulos">
//                     <Link
//                       to={"/categoria/DE 1 A 3 AÑOS"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto">DE 1 A 3 AÑOS</p>
//                     </Link>
//                     <Link
//                       to={"/categoria/DE 3 A 5 AÑOS"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto">DE 3 A 5 AÑOS</p>
//                     </Link>
//                     <Link
//                       to={"/categoria/DE 5 A 8 AÑOS"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto">DE 5 A 8 AÑOS</p>
//                     </Link>
//                     <Link
//                       to={"/categoria/DE 8 A 11 AÑOS"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto">DE 8 A 11 AÑOS</p>
//                     </Link>
//                     <Link
//                       to={"/categoria/ADULTOS"}
//                       onClick={() => setActiveSidebar(false)}
//                     >
//                       <p className="texto" style={{ marginBottom: "0px" }}>
//                         ADULTOS
//                       </p>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div
//         className="fondo-buscador"
//         style={{ display: activeSearch ? "block" : "none" }}
//       >
//         <div className="busqueda">
//           <input
//             id="texto-busqueda"
//             type="text"
//             required
//             placeholder="Buscar producto"
//             value={articuloBuscado}
//             onChange={busqueda}
//             onKeyPress={handleKeyPress}
//           />
//           <div className="con-lupa">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               class="fill-current w-6 h-6 md:w-5 md:h-5 text-primary-300"
//               width="24"
//               height="24"
//               fill="#009FE3"
//               viewBox="0 0 22.4 22.4"
//               overflow="visible"
//             >
//               <path
//                 className="lupa"
//                 d="M22.4 21l-4.8-4.8c1.4-1.7 2.2-3.9 2.2-6.3 0-5.5-4.4-9.9-9.9-9.9S0 4.4 0 9.9s4.4 9.9 9.9 9.9c2.4 0 4.5-.8 6.3-2.2l4.8 4.8 1.4-1.4zM9.9 17.8C5.5 17.8 2 14.3 2 9.9S5.5 2 9.9 2s7.9 3.5 7.9 7.9-3.5 7.9-7.9 7.9z"
//               ></path>
//             </svg>
//           </div>
//         </div>
//         <div className="icon-x" onClick={() => setActiveSearch(false)}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="#FFFFFF"
//             class="md:hidden fill-current text-white ml-auto mb-2 mr-3"
//             id="searchClose"
//             width="22.2"
//             height="22.2"
//             viewBox="0 0 22.2 22.2"
//             overflow="visible"
//           >
//             <defs></defs>
//             <path d="M22.2 1.4L20.8 0l-9.7 9.7L1.4 0 0 1.4l9.7 9.7L0 20.8l1.4 1.4 9.7-9.7 9.7 9.7 1.4-1.4-9.7-9.7z"></path>
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { Link } from "react-router-dom";

// import storeZustand from "../zustand";
// import { useHeaderNavigation } from "../../presentation/hooks/useHeaderNavigation";
// import { useSearch } from "../../presentation/hooks/useSearch";
// import { useCartSync } from "../../presentation/hooks/useCartSync";
// import { Category } from "../../infrastructure/types";
// import {
//   APP_CONFIG,
//   HEADER_ICONS,
//   MAIN_CATEGORIES,
// } from "../../infrastructure/constants";
// import SvgIcon from "../../presentation/components/UI/SvgIcon/SvgIcon";
// import "./HeaderDesktop.scss";

// const HeaderDesktop: React.FC = () => {
//   const { cart, cantidadArticulossss, setCantidadArticulossss } =
//     storeZustand();

//   const {
//     activeSidebar,
//     activeCategoria,
//     handleCategoria,
//     getConditionalStyle,
//     closeSidebar,
//     openSidebar,
//   } = useHeaderNavigation();

//   const {
//     activeSearch,
//     articuloBuscado,
//     handleSearch,
//     executeSearch,
//     handleKeyPress,
//     openSearch,
//     closeSearch,
//   } = useSearch();

//   useCartSync({ cart, setCantidadArticulossss });

//   const renderCategory = (category: Category): JSX.Element => (
//     <div key={category.id} className="categoria">
//       <Link to={category.route} className="categoria-texto">
//         {category.name}
//       </Link>
//       {category.subcategories && (
//         <div className="contenedor-articulos" style={{ display: "none" }}>
//           <div className="articulos">
//             {category.subcategories.map((subcategory) => (
//               <Link
//                 key={subcategory.id}
//                 to={subcategory.route}
//                 className="con-texto"
//               >
//                 <div className="texto">{subcategory.name}</div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   const renderSidebarCategory = (category: Category): JSX.Element => (
//     <div key={`sidebar-${category.id}`}>
//       <div
//         className="contenedor-texto-icon"
//         onClick={() => handleCategoria(category.id)}
//       >
//         <div className="con-texto">
//           <p className="texto">{category.name}</p>
//         </div>
//         {category.subcategories && (
//           <div className="con-icon" style={getConditionalStyle(category.id)}>
//             <SvgIcon {...HEADER_ICONS.dropdown} />
//           </div>
//         )}
//       </div>
//       {category.subcategories && (
//         <div
//           className="contenedor-articulos"
//           style={{ display: activeCategoria[category.id] ? "block" : "none" }}
//         >
//           <div className="articulos">
//             {category.subcategories.map((subcategory, index) => (
//               <Link
//                 key={subcategory.id}
//                 to={subcategory.route}
//                 onClick={closeSidebar}
//               >
//                 <p
//                   className="texto"
//                   style={{
//                     marginBottom:
//                       index === category.subcategories!.length - 1
//                         ? "0px"
//                         : undefined,
//                   }}
//                 >
//                   {subcategory.name}
//                 </p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="header-desktop">
//       <nav>
//         <div className="contenedor-logo">
//           <Link to="/" className="a-logo">
//             <img
//               className="img-logo"
//               src={APP_CONFIG.logoUrl}
//               alt={APP_CONFIG.logoAlt}
//             />
//           </Link>
//         </div>

//         <div className="contenedor-categorias">
//           {MAIN_CATEGORIES.map(renderCategory)}
//         </div>

//         <div className="contenedor-busqueda">
//           <div className="idioma">
//             <a href="#">
//               <div className="contenedor-idiomas">
//                 <SvgIcon {...HEADER_ICONS.language} className="icon" />
//                 <div className="con-idioma-texto">
//                   <p className="idioma-texto">{APP_CONFIG.languages[0]}</p>
//                 </div>
//               </div>
//             </a>
//           </div>

//           <div className="busqueda">
//             <input
//               id="texto-busqueda"
//               type="text"
//               required
//               placeholder={APP_CONFIG.searchPlaceholder}
//               value={articuloBuscado}
//               onChange={handleSearch}
//               onKeyPress={handleKeyPress}
//             />
//             <div className="con-lupa" onClick={executeSearch}>
//               <SvgIcon {...HEADER_ICONS.search} />
//             </div>
//           </div>

//           <div className="carrito-login">
//             <div className="caja">
//               <SvgIcon
//                 {...HEADER_ICONS.search}
//                 id="lupita"
//                 onClick={openSearch}
//                 style={{ display: "none" }}
//               />
//             </div>

//             <div className="caja">
//               <Link to="/login">
//                 <SvgIcon
//                   {...HEADER_ICONS.user}
//                   className="carrito-login-icon"
//                 />
//               </Link>
//             </div>

//             <div className="caja">
//               <Link to="/checkout">
//                 <SvgIcon
//                   {...HEADER_ICONS.cart}
//                   className="carrito-login-icon"
//                 />
//                 {cantidadArticulossss > 0 && (
//                   <div className="carrito-cantidad-articulos">
//                     <span>{cantidadArticulossss}</span>
//                   </div>
//                 )}
//               </Link>
//             </div>

//             <div className="caja" onClick={openSidebar}>
//               <SvgIcon
//                 {...HEADER_ICONS.hamburger}
//                 id="hamburguesa"
//                 style={{ display: "none", cursor: "pointer" }}
//               />
//             </div>
//           </div>
//         </div>

//         <div
//           className="sidebar"
//           style={{ display: activeSidebar ? "block" : "none" }}
//         >
//           <div className="all">
//             <div className="abrir-cerrar">
//               <div className="contenedor-texto">
//                 <p className="texto">{APP_CONFIG.languages.join("  ")}</p>
//               </div>
//               <div className="contenedor-icon-x" onClick={closeSidebar}>
//                 <SvgIcon {...HEADER_ICONS.close} className="icon" />
//               </div>
//             </div>

//             <div className="categoria">
//               <div className="categoria-nombre">
//                 {MAIN_CATEGORIES.map(renderSidebarCategory)}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div
//         className="fondo-buscador"
//         style={{ display: activeSearch ? "block" : "none" }}
//       >
//         <div className="busqueda">
//           <input
//             id="texto-busqueda"
//             type="text"
//             required
//             placeholder={APP_CONFIG.searchPlaceholder}
//             value={articuloBuscado}
//             onChange={handleSearch}
//             onKeyPress={handleKeyPress}
//           />
//           <div className="con-lupa" onClick={executeSearch}>
//             <SvgIcon {...HEADER_ICONS.search} />
//           </div>
//         </div>
//         <div className="icon-x" onClick={closeSearch}>
//           <SvgIcon {...HEADER_ICONS.close} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderDesktop;
