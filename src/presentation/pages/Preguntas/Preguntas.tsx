import React from "react";

import { PREGUNTAS_DATA } from "../../../infrastructure/constants/preguntasData.constants";
import ContactoTexto from "../../components/DatosClientes/PreguntasFrecuentes/ContactoTexto";
import Pregunta from "../../components/DatosClientes/PreguntasFrecuentes/Pregunta";
import DatosContacto from "../../components/DatosClientes/PreguntasFrecuentes/DatosContacto";
import CuerpoVacioFooter from "../../components/Footer/CuerpoVacioFooter";

const Preguntas: React.FC = () => {
  const { plazos, avisos } = PREGUNTAS_DATA;

  return (
    <CuerpoVacioFooter
      contenedor={
        <div>
          <p className="texto-negro-resaltado">PREGUNTAS FRECUENTES</p>

          <p className="aviso-navidad">{avisos.navidad.titulo}</p>
          <p className="texto-rojo">{avisos.navidad.mensaje}</p>

          <h3 className="subtitulo-rojo">{avisos.festivo.titulo}</h3>
          <p className="texto-rojo">{avisos.festivo.mensaje}</p>

          <h4 className="titulo-rojo">{avisos.constitucion.titulo}</h4>
          <p className="texto-rojo">{avisos.constitucion.mensaje1}</p>
          <p className="texto-rojo">{avisos.constitucion.mensaje2}</p>

          <Pregunta titulo="¿CIERRA ALGÚN DÍA LA TIENDA ONLINE?">
            <p className="texto-negro">
              De lunes a viernes laborables, en principio, salen pedidos todos
              los días (ténganse en cuenta los festivos nacionales, de Cataluña
              y locales de Barcelona).
            </p>
          </Pregunta>

          <Pregunta titulo="¿CUÁNTO TARDARÁ EN LLEGAR MI PEDIDO?">
            <p className="texto-negro">
              Su pedido te llegará en 1 a 2 días hábiles a través de la empresa
              de transporte SEUR. Consultar siempre, la política de envíos,
              puede variar en función de la temporada (navidad, rebajas, black
              friday...)
            </p>
          </Pregunta>

          <Pregunta titulo="¿QUÉ OCURRE SI NO ESTOY EN CASA CUANDO VIENEN A ENTREGARME EL PAQUETE?">
            <p className="texto-negro">
              SEUR es la empresa encargada de realizar el transporte. En caso de
              ausencia, SEUR dejará un aviso en la dirección de entrega, y
              volverá a pasar una segunda vez. Si no le encontrasen esta segunda
              vez, el paquete lo dejarían en la oficina más cercana para su
              recogida allí. Debe tenerse en cuenta que no es posible elegir la
              franja horaria de entrega, por lo que recomendamos que faciliten
              una dirección de entrega donde vaya a haber siempre alguien (por
              ejemplo, una oficina, su lugar de trabajo, una tienda, etc).
            </p>
          </Pregunta>

          <Pregunta titulo="¿CÓMO SE EFECTÚA UN CAMBIO/DEVOLUCIÓN?">
            <p className="texto-negro">
              Hay tres motivos de cambio/devolución del artículo:
            </p>

            <p className="texto-sub">
              - El/los artículos no se corresponde/n con lo que usted compró o
              ha llegado en mal estado.
            </p>

            <ContactoTexto>
              En este caso, debe contactar con Atención al Cliente
            </ContactoTexto>

            <p className="texto-negro">
              explicando el motivo del cambio/devolución y adjuntando
              fotografías, en un plazo máximo de {plazos.reportar} desde su
              recepción. Si procede, LUK Internacional gestionará una recogida
              para devolver ese/os artículo/s, y una vez lo recibamos, LUK
              Internacional procederá al envío correcto del/los producto/s, si
              fuera necesario. En este caso, LUK Internacional se hará cargo de
              todos gastos derivados, es decir, LUK asumirá los costes en el
              cambio de producto cuando presente un fallo de fabricación o si el
              producto entregado no se corresponde con el producto comprado y
              facturado.
            </p>

            <p className="texto-sub">
              - Quiere devolver los productos por motivos ajenos a nosotros.
            </p>

            <ContactoTexto>
              En este caso, debe contactar inmediatamente con Atención al
              Cliente
            </ContactoTexto>

            <p className="texto-negro">
              para informar de ello. Tenemos que recibir el producto, dentro del
              plazo de {plazos.devolver} desde su recepción, en perfecto estado
              y en su embalaje original si lo tuviera. Será usted quien gestione
              la devolución, enviando el producto con la empresa de mensajería
              que usted elija, y haciéndose cargo de todos los gastos derivados.
            </p>

            <p className="texto-negro">
              Sólo se aceptarán los productos en estado nuevo y completo en la
              siguiente dirección:
            </p>

            <DatosContacto />

            <p className="texto-negro">
              El usuario asumirá los gastos de transporte y riesgos derivados
              del envío de los productos devueltos por causas ajenas y no
              imputables a LUK. Las devoluciones de dinero se efectuarán siempre
              después de la recepción del producto en nuestro almacén y la
              verificación del estado en que se encuentra. Cuando el usuario
              realice una devolución, LUK procederá con la devolución de la
              cantidad pagada por el producto pero no devolverá, en ningún caso
              los gastos de transporte.
            </p>

            <p className="texto-sub">
              - Quiere cambiar un/unos producto/s por motivos ajenos a nosotros
              (por ejemplo, cambio de talla, color, etc).
            </p>

            <ContactoTexto>
              En este caso, debe contactar inmediatamente con Atención al
              Cliente
            </ContactoTexto>

            <p className="texto-negro">
              para informar de ello. Tenemos que recibir el producto, dentro del
              plazo de {plazos.devolver} desde su recepción, en perfecto estado
              y en su embalaje original si lo tuviera. Será usted quien gestione
              la devolución del/los productos a cambiar, enviando el producto
              con la empresa de mensajería que usted elija, y haciéndose cargo
              de todos los gastos derivados.
            </p>

            <p className="texto-negro">
              La devolución del dinero se efectuará siempre después de la
              recepción del producto en nuestro almacén y la verificación del
              estado en que se encuentra. Recibirá el dinero en un plazo máximo
              de {plazos.reembolso} mediante el mismo método de pago con el que
              hizo el pedido.
            </p>

            <p className="texto-negro">
              LUK procederá con la devolución de la cantidad pagada por el
              producto pero no devolverá, en ningún caso los gastos de
              transporte. Debido a que no realizamos cambios, para adquirir el
              nuevo producto que usted desea tiene que realizar un nuevo pedido
              desde el principio independiente del que ya había realizado.
            </p>

            <p className="texto-negro">
              Sólo se aceptarán los productos en estado nuevo y completo en la
              siguiente dirección:
            </p>

            <DatosContacto />
          </Pregunta>

          <Pregunta
            titulo="¿CÓMO PUEDO SABER SI HAY DISPONIBILIDAD DE UN PRODUCTO EN CONCRETO, SI NO LO ENCUENTRO EN LA WEB?"
            marginTop="60px"
          >
            <p className="texto-negro">
              Si no encuentra el producto concreto que usted desea en nuestra
              web, esto significa que no está disponible. Solo los productos
              mostrados en la web son los que se pueden comprar.
            </p>
          </Pregunta>

          <Pregunta titulo="¿REALIZÁIS ENVÍOS A TODA ESPAÑA?" marginTop="60px">
            <p className="texto-negro">
              No, solamente se realizan envíos a península y Baleares. No se
              hacen envíos a Canarias, Ceuta ni Melilla.
            </p>
          </Pregunta>

          <Pregunta
            titulo="¿REALIZÁIS ENVÍOS FUERA DE ESPAÑA?"
            marginTop="60px"
          >
            <p className="texto-negro">
              Solamente se hacen envíos a Portugal, excepto Madeira y Azores.
            </p>
          </Pregunta>

          <Pregunta titulo="¿ENVOLVÉIS PARA REGALO?" marginTop="60px">
            <p className="texto-negro">No, no disponemos de esa opción.</p>
          </Pregunta>

          <Pregunta titulo="¿RECIBIRÉ UN GADGET DE REGALO?" marginTop="60px">
            <p className="texto-negro">
              Sí, todos los envíos llevan un gadget de regalo. Este depende del
              importe de su compra. En ningún caso habrá más de un gadget de
              regalo. Los artículos considerados gadget de regalo no están a la
              venta. Hasta fin de existencias.
            </p>
          </Pregunta>

          <Pregunta titulo="¿TENÉIS TIENDA FÍSICA?" marginTop="60px">
            <p className="texto-negro">
              No, no tenemos tienda física en ninguna ciudad. Solamente la
              tienda online.
            </p>
          </Pregunta>

          <Pregunta
            titulo="¿PUEDO HACER EL PEDIDO ONLINE Y RECOGER EL PAQUETE EN VUESTRO ALMACÉN?"
            marginTop="60px"
          >
            <p className="texto-negro">
              No, en ningún caso existe esta posibilidad de recogida ya que se
              trata de una tienda exclusivamente online.
            </p>
          </Pregunta>

          <Pregunta
            titulo="¿PUEDO PAGAR CONTRA REEMBOLSO O PAYPAL?"
            marginTop="60px"
          >
            <p className="texto-negro">
              No, solamente está disponible la opción de pago con tarjeta de
              crédito o débito.
            </p>
          </Pregunta>
        </div>
      }
    />
  );
};

export default Preguntas;
