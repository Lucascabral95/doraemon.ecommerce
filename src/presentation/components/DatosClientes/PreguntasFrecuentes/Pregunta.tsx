const Pregunta: React.FC<{
  titulo: string;
  children: React.ReactNode;
  marginTop?: string;
}> = ({ titulo, children, marginTop }) => (
  <>
    <h4 className="titulo-azul" style={marginTop ? { marginTop } : undefined}>
      {titulo}
    </h4>
    {children}
  </>
);

export default Pregunta;
