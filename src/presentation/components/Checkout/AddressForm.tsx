import React from "react";

const COUNTRIES_PROVINCES = {
  Argentina: [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán",
  ],
  Brasil: [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahía",
    "Ceará",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso del Sur",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Río de Janeiro",
    "Río Grande del Norte",
    "Río Grande del Sur",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
    "Distrito Federal",
  ],
  Uruguay: [
    "Artigas",
    "Canelones",
    "Cerro Largo",
    "Colonia",
    "Durazno",
    "Flores",
    "Florida",
    "Lavalleja",
    "Maldonado",
    "Montevideo",
    "Paysandú",
    "Río Negro",
    "Rivera",
    "Rocha",
    "Salto",
    "San José",
    "Soriano",
    "Tacuarembó",
    "Treinta y Tres",
  ],
  Chile: [
    "Arica y Parinacota",
    "Tarapacá",
    "Antofagasta",
    "Atacama",
    "Coquimbo",
    "Valparaíso",
    "Metropolitana de Santiago",
    "Libertador General Bernardo O'Higgins",
    "Maule",
    "Ñuble",
    "Biobío",
    "La Araucanía",
    "Los Ríos",
    "Los Lagos",
    "Aysén del General Carlos Ibáñez del Campo",
    "Magallanes y de la Antártica Chilena",
  ],
  Paraguay: [
    "Concepción",
    "San Pedro",
    "Cordillera",
    "Guairá",
    "Caaguazú",
    "Caazapá",
    "Itapúa",
    "Misiones",
    "Paraguarí",
    "Alto Paraná",
    "Central",
    "Ñeembucú",
    "Amambay",
    "Canindeyú",
    "Presidente Hayes",
    "Boquerón",
    "Alto Paraguay",
    "Asunción",
  ],
};

interface AddressFormProps {
  direccionCompleta: any;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSave: () => void;
}

export const AddressForm: React.FC<AddressFormProps> = ({
  direccionCompleta,
  onInputChange,
  onSave,
}) => {
  const provinces =
    COUNTRIES_PROVINCES[
      direccionCompleta.pais as keyof typeof COUNTRIES_PROVINCES
    ] || [];

  return (
    <div className="englobador">
      <div className="contenedor-input-datos">
        <label htmlFor="nombre">NOMBRE(S)</label>
        <div className="cont-input">
          <input
            onChange={onInputChange}
            name="nombre"
            value={direccionCompleta.nombre}
            type="text"
            required
          />
        </div>
      </div>

      <div className="contenedor-input-datos">
        <label htmlFor="apellido">APELLIDO(S)</label>
        <div className="cont-input">
          <input
            onChange={onInputChange}
            name="apellido"
            value={direccionCompleta.apellido}
            type="text"
            required
          />
        </div>
      </div>

      <div className="contenedor-input-datos">
        <label htmlFor="empresa">EMPRESA</label>
        <div className="cont-input">
          <input
            onChange={onInputChange}
            name="empresa"
            value={direccionCompleta.empresa}
            type="text"
          />
        </div>
      </div>

      <div className="contenedor-input-datos">
        <label htmlFor="direccion">DIRECCIÓN</label>
        <div className="cont-input">
          <input
            onChange={onInputChange}
            name="direccion"
            value={direccionCompleta.direccion}
            type="text"
            required
          />
        </div>
      </div>

      <div className="contenedor-input-datos">
        <label htmlFor="codigoPostal">CÓDIGO POSTAL</label>
        <div className="cont-input">
          <input
            onChange={onInputChange}
            name="codigoPostal"
            value={direccionCompleta.codigoPostal}
            type="text"
            required
          />
        </div>
      </div>

      <div className="contenedor-input-datos">
        <label htmlFor="ciudad">CIUDAD</label>
        <div className="cont-input">
          <input
            onChange={onInputChange}
            name="ciudad"
            value={direccionCompleta.ciudad}
            type="text"
            required
          />
        </div>
      </div>

      <div className="contenedor-input-datos">
        <label htmlFor="pais">PAÍS</label>
        <div className="cont-input">
          <select
            value={direccionCompleta.pais}
            onChange={onInputChange}
            name="pais"
            required
          >
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Uruguay">Uruguay</option>
          </select>
        </div>
      </div>

      <div className="contenedor-input-datos">
        <label htmlFor="provincia">PROVINCIA</label>
        <div className="cont-input">
          <select
            name="provincia"
            value={direccionCompleta.provincia}
            onChange={onInputChange}
            required
          >
            {provinces.map((province, index) => (
              <option key={index} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="contenedor-input-datos">
        <label htmlFor="telefono">TELÉFONO</label>
        <div className="cont-input">
          <input
            onChange={onInputChange}
            name="telefono"
            value={direccionCompleta.telefono}
            type="text"
            required
          />
        </div>
      </div>

      <div className="contenedor-input-datos">
        <div className="cont-input" style={{ border: "none" }}>
          <div className="handle-enviar">
            <button onClick={onSave} type="button" className="boton-guardar">
              GUARDAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
