import { COOKIES_DATA } from "../../../../infrastructure/constants";

const { cookies } = COOKIES_DATA;

export const TablaCookies: React.FC = () => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col" style={{ color: "#4B5563", fontSize: "16px" }}>
          Nombre
        </th>
        <th scope="col" style={{ color: "#4B5563", fontSize: "16px" }}>
          Proveedor
        </th>
        <th scope="col" style={{ color: "#4B5563", fontSize: "16px" }}>
          Propósito
        </th>
        <th scope="col" style={{ color: "#4B5563", fontSize: "16px" }}>
          Caducidad
        </th>
        <th scope="col" style={{ color: "#4B5563", fontSize: "16px" }}>
          Tipo
        </th>
      </tr>
    </thead>
    <tbody>
      {cookies.map((cookie, index) => (
        <tr key={index}>
          <th style={{ fontWeight: 400 }} scope="row">
            {cookie.nombre}
          </th>
          <td className={cookie.esGoogle ? "td-google" : ""}>
            {cookie.esGoogle ? (
              <a href={cookie.proveedorLink}>{cookie.proveedor}</a>
            ) : (
              cookie.proveedor
            )}
          </td>
          <td>{cookie.proposito}</td>
          <td>{cookie.caducidad}</td>
          <td>{cookie.tipo}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
