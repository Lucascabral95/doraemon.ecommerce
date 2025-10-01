// import React from "react";

// import { useDireccion } from "../../hooks/useDireccion";
// import { AddressForm } from "../../components/Direccion/Form/AddressForm";
// import CardDirection from "../../components/Direccion/Card/CardDirection";
// import "./Direccion.scss";

// const Direccion: React.FC = () => {
//   const {
//     direccionCompleta,
//     miDireccionCompleta,
//     handleInputChange,
//     handleSubmit,
//   } = useDireccion();

//   if (miDireccionCompleta && miDireccionCompleta.length !== 0) {
//     return <CardDirection />;
//   }

//   return (
//     <AddressForm
//       direccionCompleta={direccionCompleta}
//       onInputChange={handleInputChange}
//       onSubmit={handleSubmit}
//     />
//   );
// };

// export default Direccion;
import React from "react";
import { useDireccion } from "../../hooks/useDireccion";
import { AddressForm } from "../../components/Direccion/Form/AddressForm";
import CardDirection from "../../components/Direccion/Card/CardDirection";
import "./Direccion.scss";
import ButtonBackDirection from "../../components/UI/Buttons/ButtonBackDirection";

const Direccion: React.FC = () => {
  const {
    direccionCompleta,
    miDireccionCompleta,
    mostrandoFormulario,
    setMostrandoFormulario,
    handleInputChange,
    handleSubmit,
  } = useDireccion();

  const tieneDirecciones =
    Array.isArray(miDireccionCompleta) && miDireccionCompleta.length > 0;

  if (!tieneDirecciones || mostrandoFormulario) {
    return (
      <div>
        {tieneDirecciones && (
          <ButtonBackDirection
            setMostrandoFormulario={setMostrandoFormulario}
          />
        )}

        <AddressForm
          direccionCompleta={direccionCompleta}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </div>
    );
  }

  return <CardDirection onAgregarNueva={() => setMostrandoFormulario(true)} />;
};

export default Direccion;
