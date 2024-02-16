import CuerpoVacio from "./CuerpoVacio";

export default function Abono() {
    return (
        <>
            <CuerpoVacio
                sinCuadrado="si"
                titulo="FACTURAS POR ABONO"
                texto="No has recibido ningun factura por abono."
                textoExtra="Hola"
                textoAbono="Facturas por abono que has recibido por pedidos cancelados."
            />
        </>
    )
}