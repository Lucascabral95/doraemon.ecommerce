interface Props {
  setMostrandoFormulario: (mostrandoFormulario: boolean) => void;
}

const ButtonBackDirection = ({ setMostrandoFormulario }: Props) => {
  return (
    <div className="contenedor-boton-volver-mis-direcciones">
      <div className="cont">
        <button
          onClick={() => setMostrandoFormulario(false)}
          className="boton-volver-mis-direcciones"
        >
          ← Volver a mis direcciones
        </button>
      </div>
    </div>
  );
};

export default ButtonBackDirection;
