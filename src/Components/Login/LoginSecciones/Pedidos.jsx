import CuerpoVacio from "./CuerpoVacio";

export default function Pedidos() {

    return (
        <>
            <CuerpoVacio
                sinCuadrado="si"
                titulo="MIS PEDIDOS"
                texto="No has realizado ningún pedido."
                textoExtra="Hola"
                textoAbono="Estos son los pedidos que has ralizado desde que se creó tu cuenta."
            />
        </>
    )
}