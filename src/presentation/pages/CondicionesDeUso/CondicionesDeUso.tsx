import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { CONDICIONES_DATA } from "../../../infrastructure/constants";
import {
  ContactoCliente,
  DatosEmpresa,
  PuntoConFlecha,
  Seccion,
} from "../../components/DatosClientes/CondicionesDeUso";
import CuerpoVacioFooter from "../../components/Footer/CuerpoVacioFooter";

const CondicionesDeUso: React.FC = () => {
  const { empresa, contacto, plazos, avisos, envio, enlaces } =
    CONDICIONES_DATA;

  return (
    <CuerpoVacioFooter
      contenedor={
        <div>
          <h4 className="aviso-navidad">{avisos.navidad.titulo}</h4>
          <p className="texto-rojo">{avisos.navidad.mensaje}</p>

          <h4 className="subtitulo-rojo">{avisos.festivo.titulo}</h4>
          <p className="texto-rojo">{avisos.festivo.mensaje}</p>

          <h2 className="titulo-mayor">
            TÉRMINOS Y CONDICIONES DE CONTRATACIÓN
          </h2>

          <p className="texto-negro-resaltado">
            TÉRMINOS Y CONDICIONES GENERALES DE CONTRATACIÓN CONFORME A LA LEY
            34/2002
          </p>

          <p className="texto-negro">
            www.doraemon.lukinternacional.com y
            www.shinchan.lukinternacional.com son dominios titularidad de{" "}
            {empresa.nombre} domiciliada en TRAVESSERA DE GRÀCIA, 17 ENTL. C-D -
            08021 BARCELONA, C.I.F. {empresa.cif} e inscrita en el Registro
            Mercantil de Barcelona, en el Tomo 6830, Folio 171, Hoja Número
            81366, Libro 6108, Inscripción: 1ª.
          </p>

          <p className="texto-negro">
            Nuestros datos de contacto son:{" "}
            <span className="texto-azul-hover">
              <a href={contacto.emailLink}>{contacto.email}</a>
            </span>
          </p>

          <p className="texto-negro">TEL: {empresa.telefono}</p>

          <Seccion titulo="PRIMERA: OBJETO">
            <p className="texto-negro">
              Los presentes Términos y Condiciones regulan la navegación a
              través de las Páginas Webs www.doraemon.lukinternacional.com y
              www.shinchan.lukinternacional.com (en adelante "la Página Web"),
              la adquisición de la condición de Usuario, los derechos y
              obligaciones asociados a tal condición, así como las transacciones
              comerciales y la utilización de los servicios que figuran en la
              misma.
            </p>

            <p style={{ margin: "42px 0px" }} className="texto-negro">
              La Página Web está gestionada por {empresa.nombre} con domicilio
              en C/ {empresa.direccion}, con CIF {empresa.cif}. La adquisición
              de la condición de usuario permite navegar a través de las zonas
              de acceso restringido que figuren en la Página Web, la utilización
              de los servicios para los que sea necesaria la identificación
              previa y la adquisición de los bienes que pudiesen ofertarse a
              través de la misma.
            </p>
          </Seccion>

          <Seccion titulo="SEGUNDA: REQUISITOS PARA LA ADQUISICIÓN DE LA CONDICIÓN DE USUARIO">
            <p className="texto-negro">
              Pueden adquirir la condición de Usuario las personas mayores de
              edad y con plena capacidad para contratar que suscriban los
              presentes Términos y Condiciones de Uso (en adelante "el
              Usuario"). La adquisición de la condición de Usuario implica la
              lectura y aceptación expresa y sin reserva alguna de los términos
              integrantes de los presentes Términos y Condiciones que manifiesta
              haber conocido previamente a su aceptación, pudiendo ser
              almacenadas y reproducidas por este.
            </p>

            <p className="texto-negro">
              Existen dos niveles de usuario bien diferenciados, cada nivel le
              confiere distintas funciones:
            </p>

            <p className="texto-negro">
              <span className="texto-negro-resaltado">
                - Usuario de Nivel 1:
              </span>{" "}
              será aquel usuario que realice la compra como invitado sin
              registrarse, el cual se cataloga como usuario sin registro.
            </p>

            <p className="texto-negro">
              <span className="texto-negro-resaltado">
                - Usuario de Nivel 2:
              </span>{" "}
              será el usuario que se registre con nombre de usuario y
              contraseña, completando todos los campos de datos personales
              solicitados a tal efecto.
            </p>

            <p className="texto-negro">
              Este usuario podrá administrar su cuenta, realizando todos los
              cambios que sean necesarios y realizar consultas acerca de sus
              facturas e histórico de pedidos.
            </p>

            <p className="texto-negro">
              El Usuario de nivel 2 podrá acceder al Servicio a través de la
              Página Web utilizando el nombre de usuario y contraseña. El nombre
              de usuario y contraseña generados que permitirán al Usuario
              identificarse y utilizar el servicio tienen carácter estrictamente
              personal y confidencial. El Usuario será responsable de mantener
              la confidencialidad de las mismas. En consecuencia, el Usuario
              acepta expresamente que {empresa.nombre} presuma que los usos del
              servicio realizados utilizando sus claves de identificación son
              realizados por el usuario registrado, salvo que este hubiese
              comunicado previamente el extravío o sustracción de las mismas.
            </p>

            <p className="texto-negro">
              La contraseña podrá ser modificada libremente por el Usuario, a
              través de los procedimientos que {empresa.nombre} tiene
              establecidos al efecto. La contraseña sustituida quedará anulada
              como medio de identificación, en el mismo momento en que se genere
              la nueva.
            </p>

            <p className="texto-negro">
              {empresa.nombre} podrá bloquear el acceso y utilización de la
              página Web cuando lo estime necesario por motivos de seguridad. El
              Servicio quedará bloqueado automáticamente en el supuesto que se
              produzcan tres errores sucesivos en la consignación de las claves
              de Usuario para su acceso o utilización. Asimismo,{" "}
              {empresa.nombre} se reserva el derecho de contactar con aquella
              persona que por algún motivo no haya finalizado su registro con el
              único fin de poder ayudarla a finalizar el mismo. En caso de que
              los datos facilitados sean incorrectos o falsos, o bien, cuando{" "}
              {empresa.nombre} perciba directa o indirectamente que no hay
              voluntad de finalizar el registro, podrá borrar los datos
              indicados por estas personas, ya que en ningún caso habrán
              finalizado el proceso de alta y alcanzado el estado de usuario
              registrado.
            </p>

            <p style={{ marginBottom: "42px" }} className="texto-negro">
              {empresa.nombre} adoptará las medidas organizativas y técnicas
              necesarias en sus equipos informáticos para lograr una adecuada
              utilización del Servicio por los Usuarios y evitar accesos no
              autorizados cuyo objeto sea proceder a revelaciones no autorizadas
              del contenido de la información financiera del Usuario accesible a
              través del Servicio.
            </p>
          </Seccion>

          <Seccion titulo="TERCERA: REALIZACIÓN DE UN PEDIDO">
            <p style={{ marginBottom: "42px" }} className="texto-negro">
              El producto o los productos objeto de contratación tendrán
              incorporada la siguiente información:
            </p>

            <p className="texto-negro">1.- Precio e impuestos</p>
            <p className="texto-negro">
              Los precios expuestos en la Web están indicados en euros, incluyen
              tanto los posibles descuentos como el IVA aplicable a la fecha del
              pedido, pero no incluyen los gastos de envío, los cuales están
              indicados separadamente.
            </p>

            <p className="texto-negro">
              2.- Gastos de entrega: podrán ser consultados al 'Mostrar la cesta
              de la compra'
            </p>
            <p style={{ marginBottom: "36px" }} className="texto-negro">
              3.- Condiciones de validez de la oferta, en su caso
            </p>

            <p style={{ margin: "36px 0px" }} className="texto-negro">
              Para realizar un pedido, deberá seguir el procedimiento de compra
              online y hacer clic en la aceptación de LOS TÉRMINOS Y CONDICIONES
              DE CONTRATACIÓN Y NUESTRA POLÍTICA DE PRIVACIDAD.
            </p>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              Una vez elegido el producto, el Usuario deberá introducir el
              producto/s en la cesta mediante "añadir al carrito" y navegando
              por la Página podrá ir añadiendo los productos deseados.
            </p>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              A continuación, se pedirá al Usuario que valide su compra,
              aceptando, en tal caso, todas y cada una de las condiciones de
              contratación. En cuanto el Usuario haya validado definitivamente
              la opción elegida, se abrirá la zona segura en la que podrá
              realizar el pago y posteriormente verá una pantalla de
              confirmación y recibirá, por correo electrónico, un acuse de
              recibo en el que constarán todos los términos de la opción
              contratada y la factura correspondiente, momento a partir del cual
              la venta será efectiva. Para más información sobre el pago, puedo
              consultar la cláusula SEPTIMA- Facturación, Precio y Pago.
            </p>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              {empresa.nombre} se reserva el derecho de no aceptar el suministro
              a cualquier persona por cualquier razón, así como de cancelar un
              pedido si considera que no puede verificar la información de envío
              y facturación.
            </p>

            <p className="texto-negro">
              {empresa.nombre} de conformidad con lo previsto en el artículo
              27.1 de la Ley 34/2002, de 11 de julio, de servicios de la
              sociedad de la información y de comercio electrónico, hace constar
              expresamente que archivará el documento electrónico en el que se
              registre la contratación del Servicio.
            </p>

            <p style={{ marginBottom: "42px" }} className="texto-negro">
              Toda la documentación será generada en idioma español para la
              versión española y en idioma portugués para la versión portuguesa.
            </p>
          </Seccion>

          <Seccion titulo="CUARTA: DISPONIBILIDAD">
            <p className="texto-negro">
              Las ofertas de productos y precios son válidas mientras estén
              visibles en la Página Web y limitadas a las existencias
              disponibles. Los productos que temporalmente no tengan
              existencias, se mostrarán como tal y no podrán ser cargados a la
              cesta de la compra. En el improbable caso de después de que haya
              introducido su pedido, el producto no esté disponible, le
              informaremos por correo electrónico o por teléfono de dicha
              situación de conformidad con la información que hayamos recibido
              de nuestros proveedores.
            </p>
          </Seccion>

          <Seccion titulo="QUINTA: DEVOLUCIONES">
            <p className="texto-negro">
              Hay tres motivos de cambio/devolución del artículo:
            </p>

            <p style={{ margin: "36px 0px" }} className="texto-sub">
              - El/los artículos no se corresponde/n con lo que usted compró, ha
              llegado en mal estado o con un defecto de fábrica.
            </p>

            <ContactoCliente>
              En estos casos, debe contactar con Atención al Cliente
            </ContactoCliente>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              antes de {plazos.reportar24h} desde la recepción del pedido. Tiene
              que explicar el motivo del cambio/devolución.
            </p>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              En un plazo máximo de {plazos.reportar7dias} desde la recepción,
              si procede, LUK Internacional gestionará una recogida para
              devolver ese/os artículo/s, y una vez lo recibamos, LUK
              Internacional procederá al envío correcto del/los producto/s, si
              fuera necesario.
            </p>

            <p style={{ marginBottom: "42px" }} className="texto-negro">
              En este caso, LUK Internacional se hará cargo de todos gastos
              derivados, es decir, LUK asumirá los costes en el cambio de
              producto cuando presente un fallo de fabricación o si el producto
              entregado no se corresponde con el producto comprado.
            </p>

            <p className="texto-sub">
              - Quiere devolver los productos por motivos ajenos a nosotros.
            </p>

            <ContactoCliente>
              En este caso, debe contactar inmediatamente con Atención al
              Cliente
            </ContactoCliente>

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

            <DatosEmpresa />

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

            <ContactoCliente>
              En este caso, debe contactar inmediatamente con Atención al
              Cliente
            </ContactoCliente>

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

            <p style={{ marginBottom: "20px" }} className="texto-negro">
              Sólo se aceptarán los productos en estado nuevo y completo en la
              siguiente dirección:
            </p>

            <DatosEmpresa />

            <p style={{ margin: "36px 0px" }} className="texto-negro">
              Asimismo, el derecho de desistimiento no será aplicable a los
              pedidos que incluyan productos precintados que no sean aptos para
              ser devueltos por razones de protección de la salud o de higiene,
              estén protegidos por derechos de propiedad intelectual, entre
              otros, y que hayan sido desprecintados tras la entrega (por
              ejemplo, ropa interior, mascarillas, DVDs, etc).
            </p>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              LUK garantiza tener todo el interés de resolver cualquier
              situación de cambio o reemplazo de la mejor forma posible, por eso
              si surge algún problema, no dude en ponerse en contacto con
              nosotros (véase cláusula DECIMOTERCERA.-Contacto).
            </p>

            <p style={{ marginBottom: "42px" }} className="texto-negro">
              Resolución de litigios en línea (Online Dispute Resolution)
              Conforme al Art. 14.1 del Reglamento (UE) 524/2013, la Comisión
              Europea facilita una plataforma de acceso gratuito para la
              resolución de conflictos online entre el USUARIO y el PRESTADOR,
              sin necesidad de recurrir a los tribunales de justicia, mediante
              la intervención de un tercero, llamado Organismo de resolución de
              litigios, que actúa de intermediario entre ambos. Este organismo
              es neutral y dialogará con ambas partes para lograr un acuerdo,
              pudiendo finalmente sugerir y/o imponer una solución al conflicto.
              Enlace a la plataforma ODR:{" "}
              <a href={enlaces.odr} target="_blank" rel="noopener noreferrer">
                {enlaces.odr}
              </a>
            </p>
          </Seccion>

          <Seccion titulo="SEXTA: ENVÍO Y ENTREGA">
            <p className="texto-negro">
              El tiempo de entrega estimado es de{" "}
              <span className="texto-negro-resaltado">1 a 2 días hábiles</span>{" "}
              desde que el pedido sale de nuestras instalaciones en Barcelona.
              No obstante, debe tenerse en cuenta que el pedido saldrá el mismo
              día de su compra siempre y cuando esta se realice{" "}
              <span className="texto-negro-resaltado">
                antes de las 15:00 (lunes-jueves) y antes de las 12:00 (viernes)
              </span>
              . Si se realiza más tarde, su pedido saldrá al siguiente día
              laboral en ambos casos.
            </p>

            <p className="texto-negro">
              Debido a que{" "}
              <span className="texto-negro-resaltado">
                el almacén se encuentra en Barcelona
              </span>
              , tengan en cuenta los festivos en Cataluña, fiestas locales de
              Barcelona, así como los festivos nacionales.
            </p>

            <p className="texto-negro">
              Será imprescindible que el usuario indique una dirección de
              entrega que esté garantizada dentro del territorio Español
              (excepto Melilla, Ceuta e Islas Canarias) o en Portugal (excepto
              Madeira y Azores). También será imprescindible que informe y/o
              confirme su número de teléfono en el momento de realizar el pedido
              y efectuar la compra.
            </p>

            <p className="texto-negro">
              Los productos comprados en la Página Web serán enviados a la
              dirección de entrega indicada por el usuario en el momento de la
              compra.
            </p>

            <p className="texto-negro">
              Hay que tener en cuenta que los plazos de aprobación del pago
              varían en función de la forma de pago y en base a ello la
              expedición puede sufrir demoras.
            </p>

            <p className="texto-negro">
              Se define como{" "}
              <span className="texto-negro-resaltado">
                días laborables de Lunes a Viernes no festivo (incluye festivos
                locales)
              </span>
              . La empresa encargada del transporte de su pedido es Logística
              24, S.A. (SEUR) y el servicio de entrega será siempre SEUR 24
              HORAS.
            </p>

            <p className="texto-negro">
              El{" "}
              <span className="texto-negro-resaltado">coste de transporte</span>{" "}
              se puede consultar en todo momento visualizando la 'Cesta de la
              compra' y se calcula automáticamente en el momento de confirmar su
              pedido, en base a las siguientes variables:
            </p>

            <p className="texto-negro">{envio.hasta45}</p>
            <p className="texto-negro">{envio.mas45}</p>

            <p className="texto-negro">
              En ningún caso LUK será responsable de:
            </p>

            <PuntoConFlecha>
              1- El plazo de aprobación de su pago que viene dado por Servired
              (para más información consulten la cláusula SEPTIMA: Facturación y
              pago).
            </PuntoConFlecha>

            <PuntoConFlecha>
              2- La empresa de mensajería (SEUR), si los conductores no dejan
              constancia en los sucesivos intentos de entrega del pedido tras
              las primeras 72 hs. (días hábiles) que se establecen para el
              primer intento de entrega.
            </PuntoConFlecha>

            <p className="texto-negro">
              Asimismo, LUK no es responsable de los fallos en la entrega que
              pudieran deberse a culpa o negligencia de la empresa de mensajería
              encargada de gestionar la misma o de los fallos que pudieran
              presentar las redes de telecomunicaciones respecto de la modalidad
              de descarga. Estas incidencias serán asumidas y gestionadas por la
              empresa de transporte y/o telecomunicaciones dentro de su normal
              funcionamiento.
            </p>
          </Seccion>

          <Seccion titulo="SÉPTIMA: FACTURACIÓN, PRECIO Y PAGO">
            <p className="texto-negro">
              <span className="texto-negro-resaltado">{empresa.nombre}</span> se
              reserva el derecho de modificar los precios de venta en cualquier
              momento, excepto para los pedidos ya realizados.
            </p>

            <p style={{ margin: "36px 0px" }} className="texto-negro">
              Formas de pago y Seguridad: Se aceptan pagos mediante:
            </p>

            <p className="texto-negro">
              1.-{" "}
              <span className="texto-negro-resaltado">Tarjeta de crédito</span>{" "}
              (Visa o Mastercard) o débito. Cada una de las transacciones que
              implican la transmisión de datos personales o bancarios realizadas
              en la Página Web se realizan de modo seguro (servired). La Página
              Web utiliza un servidor basado en la tecnología de seguridad
              estándar SSL (Secure Socked Layer). Toda la información que nos
              transmita viaja cifrada a través de la red.
            </p>

            <PuntoConFlecha>
              Los datos sobre su tarjeta de crédito no quedan registrados en
              ninguna base de datos sino que van directamente al TPV (Terminal
              Punto de Venta del Banco). Una vez confirmada la realización del
              pago se procederá a la realización del envío. Se le solicitarán,
              al menos, los siguientes datos:
            </PuntoConFlecha>

            <PuntoConFlecha>Nombre del titular</PuntoConFlecha>
            <PuntoConFlecha>Número de tarjeta</PuntoConFlecha>
            <PuntoConFlecha>Fecha de caducidad</PuntoConFlecha>
            <PuntoConFlecha>
              Código de Validación que coincide con las 3 últimas cifras del
              número impreso en cursiva en el reverso de su tarjeta, ofreciendo
              de esta forma, más garantías acerca de la seguridad de la
              transacción.
            </PuntoConFlecha>
          </Seccion>

          <Seccion titulo="OCTAVA: RESPONSABILIDAD">
            <p className="texto-negro">El Usuario está obligado a:</p>

            <PuntoConFlecha>
              Comunicar a {empresa.nombre} todos los datos necesarios para el
              acceso y utilización de los servicios que exijan identificación
              previa que deberán ser veraces, actuales y ajustados a la
              realidad. En el caso contrario, {empresa.nombre} no será
              responsable en ningún caso en posibles retrasos o fallos en la
              entrega como consecuencia del error u omisión de estos datos
            </PuntoConFlecha>

            <PuntoConFlecha>
              Adoptar las medidas de seguridad necesarias, tanto personales como
              materiales, para mantener la confidencialidad de su nombre de
              usuario y contraseña, así como notificar inmediatamente a{" "}
              {empresa.nombre} la pérdida, extravío, sustracción, robo o acceso
              ilegítimo de su nombre de Usuario, así como su conocimiento por
              terceras personas.
            </PuntoConFlecha>

            <PuntoConFlecha>
              Hacer un uso adecuado de los Servicios incluidos en la página Web,
              siempre de conformidad con el ordenamiento jurídico.
            </PuntoConFlecha>

            <PuntoConFlecha>
              A no llevar a cabo actividad alguna que dificulte o interfiera en
              el funcionamiento de los Servicios, incluidos en la página Web.
            </PuntoConFlecha>

            <PuntoConFlecha>
              Al pago de los productos que hubiese contratado a través de la
              Página Web y a los gastos de envío y gestión de cobro, si lo
              hubiere.
            </PuntoConFlecha>

            <PuntoConFlecha>
              A respetar los términos y condiciones de uso de los productos
              objeto de adquisición.
            </PuntoConFlecha>

            <p className="texto-negro">
              El Usuario será responsable, de los daños y perjuicios que hubiere
              podido ocasionar a terceros, por los datos aportados, con carácter
              enumerativo y no limitativo como consecuencia de las siguientes
              actuaciones:
            </p>

            <PuntoConFlecha>
              Utilización de datos no actualizados, falsos o que no se
              corresponden con la realidad.
            </PuntoConFlecha>

            <PuntoConFlecha>
              Utilización por parte de terceros de las claves personales del
              Usuario.
            </PuntoConFlecha>

            <PuntoConFlecha>
              De la inclusión en la Página Web de comentarios o contenidos que
              pudieran resultar injuriosos, obscenos, xenófobos, que constituyan
              apología de la violencia, o que de cualquier forma atente contra
              la moral, el orden público, los derechos fundamentales o resulten
              contrarios al ordenamiento jurídico, vigente.
            </PuntoConFlecha>

            <p className="texto-negro">
              <span className="texto-negro-resaltado">{empresa.nombre}</span>{" "}
              queda obligado a suministrar las claves de acceso al servicio, así
              como garantizar su confidencialidad e integridad.
            </p>

            <p className="texto-negro" style={{ margin: "36px 0px" }}>
              Asimismo, {empresa.nombre} es responsable de atender con la mayor
              diligencia posible todas las consultas que pueda ordenar el
              Usuario derivadas de la utilización de los servicios incluidos en
              la página Web.
            </p>

            <p className="texto-negro" style={{ marginBottom: "36px" }}>
              Los productos y servicios que se ofertan a través de la Página Web
              cumplen con lo dispuesto con el ordenamiento jurídico español.{" "}
              {empresa.nombre} no es responsable respecto de aquellos productos
              que no sean conformes respecto a lo dispuesto en el ordenamiento
              jurídico de otros países a los que pudieran prestarse los
              servicios y/o remitirse los productos ofertados a través de la
              Página Web.
            </p>

            <p className="texto-negro">
              <span className="texto-negro-resaltado">{empresa.nombre}</span>{" "}
              queda liberada de cualquier responsabilidad derivada de:
            </p>

            <PuntoConFlecha>
              Un uso indebido de la Página Web por parte del Usuario.
            </PuntoConFlecha>

            <PuntoConFlecha>
              Los daños, pérdidas que pudieran sufrir como consecuencia de
              sucesos que no hubieran podido preverse, o que previstos fueran
              inevitables, bien por caso fortuito o fuerza mayor.
            </PuntoConFlecha>

            <PuntoConFlecha>
              Cualquier fallo, error técnico, accidente, avería, manipulación,
              interrupción en el Servicio o cualquier otra incidencia que
              pudiera surgir en productos, equipos o servicios técnicos ajenos a{" "}
              {empresa.nombre} cuyo uso sea necesario para la prestación del
              Servicio.
            </PuntoConFlecha>

            <p className="texto-negro">
              De igual forma, {empresa.nombre} declina toda responsabilidad que
              se derive del intercambio de información entre usuarios a través
              de la Página Web, recayendo la responsabilidad de las
              manifestaciones difundidas en esta página Web a quienes las hayan
              realizado.
            </p>

            <p style={{ margin: "36px 0px" }} className="texto-negro">
              {empresa.nombre} declina toda responsabilidad que se derive de la
              divulgación, puesta a disposición de terceros y/o descarga de
              cualquier contenido realizada por los usuarios, correspondiendo
              dicha responsabilidad a dicho usuario.
            </p>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              {empresa.nombre} no se responsabiliza por las interrupciones que
              pueda sufrir el servicio de Internet o por superar los posibles
              intentos de descargas permitidos.
            </p>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              {empresa.nombre} cooperará, si es requerido por orden judicial o
              por las autoridades pertinentes, en la identificación de las
              personas responsables de aquellos usos que violen la ley.
            </p>
          </Seccion>

          <Seccion titulo="NOVENA: ENLACES A CONTENIDOS">
            <p style={{ marginBottom: "36px" }} className="texto-negro">
              Queda prohibida la inclusión de enlaces electrónicos a la presente
              página Web salvo que medie la autorización expresa de{" "}
              {empresa.nombre}.
            </p>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              En el caso de que en la presente página Web se contengan enlaces a
              contenidos titularidad de terceros, {empresa.nombre} no asume
              responsabilidad alguna por la información contenida en dichas
              páginas Web de terceros o por la información contenida en páginas
              Web de terceros vinculadas de algún modo a la Página Web.
            </p>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              {empresa.nombre} retirará cualquier enlace en cuanto tenga
              conocimiento por cualquier medio de la ilicitud de su contenido o
              de que desde los mismos se lesionan bienes o derechos de un
              tercero.
            </p>
          </Seccion>

          <Seccion titulo="DÉCIMA: PROPIEDAD INTELECTUAL E INDUSTRIAL">
            <p style={{ marginBottom: "36px" }} className="texto-negro">
              La Página Web, su código fuente y los contenidos que alberga se
              encuentran protegidos por la Ley de Propiedad Intelectual. No
              podrán ser objeto de explotación, reproducción, distribución,
              modificación, comunicación pública, cesión o transformación, salvo
              que medie autorización expresa y por escrito de {empresa.nombre}.
            </p>

            <p className="texto-negro">
              El diseño, imágenes, rótulos, signos distintivos, nombre
              comercial, las marcas, logos, productos y servicios que contiene
              esta página Web se encuentran protegidos por ley de Propiedad
              Industrial.
            </p>

            <p className="texto-negro">
              Todos los derechos sobre el contenido de esta página Web
              pertenecen a {empresa.nombre}, que posee legítimamente en
              exclusiva los derechos de explotación sobre los mismos, salvo
              aquéllos de empresas con las que haya firmado el correspondiente
              contrato para la provisión de contenidos y están protegidos por
              las normas nacionales e internacionales de propiedad intelectual e
              industrial y les serán de aplicación, igualmente, las presentes
              condiciones.
            </p>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              El acceso a esta página Web no otorga a los usuarios derecho, ni
              titularidad alguna sobre los derechos de propiedad intelectual o
              industrial ni de los contenidos que alberga. Los usuarios que
              accedan a esta página Web no podrán copiar, modificar, distribuir,
              transmitir, reproducir, publicar, ceder ni vender los elementos
              anteriormente mencionados o crear nuevos productos o servicios
              derivados de la información obtenida sin que medie autorización
              expresa y por escrito de {empresa.nombre}. Queda terminantemente
              prohibida la alteración del contenido o estructura de esta página
              Web por parte del usuario.
            </p>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              {empresa.nombre} se reserva la posibilidad de ejercer las acciones
              judiciales que correspondan contra los usuarios que violen o
              infrinjan los derechos de propiedad intelectual e industrial.
            </p>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              En caso de que el usuario detecte cualquier actividad susceptible
              de vulnerar algún derecho de Propiedad Intelectual, Industrial o
              de cualquier tipo de derecho, solicitamos que nos lo comunique a
              través de: véase cláusula DECIMOTERCERA.-CONTACTO
            </p>
          </Seccion>

          <Seccion titulo="UNDÉCIMA: PROTECCIÓN DE DATOS PERSONALES">
            <p style={{ marginBottom: "36px" }} className="texto-negro">
              {empresa.nombre} es el Responsable del tratamiento de los datos
              personales del Interesado y le informa que estos datos serán
              tratados de conformidad con lo dispuesto en las normativas
              vigentes en protección de datos personales, el Reglamento (UE)
              2016/679 de 27 de abril de 2016 (GDPR), por lo que se le facilita
              la siguiente información del tratamiento:
            </p>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              Fin del tratamiento: gestión del uso de los servicios incluidos en
              la página Web, su navegación a través de la misma y la tramitación
              de las solicitudes y pedidos realizados por los Usuarios de
              nuestros servicios ofrecidos a través de esta Web y su
              facturación. Los datos personales que se marcan con un asterisco
              en el formulario de alta de usuario son imprescindibles para la
              finalidad expuesta, la ausencia de dichos datos implicaría la
              anulación de su pedido.
            </p>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              El Usuario garantiza que es el titular de los datos personales
              facilitados y que estos son auténticos. Serán responsabilidad del
              usuario las consecuencias de facilitar datos falsos. En caso de
              variación en los datos facilitados, el usuario se compromete a
              comunicarlo a través del proceso habilitado para tal fin en "mi
              cuenta"
            </p>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              De acuerdo con lo dispuesto en la referida normativa,{" "}
              {empresa.nombre} manifiesta que sólo recoge los datos
              estrictamente necesarios para ofrecer los servicios derivados de
              su actividad y demás prestaciones, si bien se reserva el derecho
              de utilizar los datos que consten en sus bases de datos para
              realizar estudios estadísticos de los Usuarios registrados y del
              uso que dan a las aplicaciones.
            </p>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              {empresa.nombre} se compromete y garantiza el tratamiento de los
              datos de carácter personal con arreglo a lo dispuesto en la
              normativa de aplicación ya citada y a la que resulte vigente en
              cada momento, así como la máxima confidencialidad con respecto a
              los datos de carácter personal facilitados, tanto por parte de{" "}
              {empresa.nombre} como de los empleados de la compañía que tengan o
              pudieren tener acceso a los referidos datos.
            </p>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              {empresa.nombre} garantiza, asimismo, que cumplimos con normas de
              seguridad aceptadas de manera general para proteger la información
              que se le facilita por el Usuario, tanto durante la transmisión
              como durante la recepción de ésta y su almacenamiento. Criterios
              de conservación de los datos: se conservarán mientras exista un
              interés mutuo para mantener el fin del tratamiento y cuando ya no
              sea necesario para tal fin, se suprimirán con medidas de seguridad
              adecuadas para garantizar la pseudonimización de los datos o la
              destrucción total de los mismos. Comunicación de los datos: Los
              datos no se comunicarán a terceros, salvo por obligación legal.
            </p>

            <p className="texto-negro-resaltado">DERECHOS DE USUARIO</p>

            <PuntoConFlecha>
              Derecho a retirar el consentimiento en cualquier momento.
            </PuntoConFlecha>

            <PuntoConFlecha>
              Derecho de acceso, rectificación, portabilidad y supresión de sus
              datos y a la limitación u oposición a su tratamiento.
            </PuntoConFlecha>

            <PuntoConFlecha>
              Derecho a presentar una reclamación ante la Autoridad de control
              (agpd.es) si considera que el tratamiento no se ajusta a la
              normativa vigente.
            </PuntoConFlecha>

            <p className="texto-negro">
              Datos de contacto para ejercer sus derechos:
            </p>

            <p className="texto-negro">
              {empresa.nombre}. {empresa.direccion} o al correo electrónico{" "}
              <span className="texto-azul-hover">
                <a href={`mailto:${empresa.emailInfo}`}>{empresa.emailInfo}</a>
              </span>
            </p>
          </Seccion>

          <Seccion titulo="DECIMOSEGUNDA: NUEVAS FUNCIONALIDADES Y MODIFICACIÓN DE LAS CONDICIONES DEL CONTRATO">
            <p style={{ marginBlock: "36px" }} className="texto-negro">
              {empresa.nombre} podrá añadir nuevas funcionalidades a la Página
              Web. En caso de que dicha implantación suponga una modificación de
              los Términos y Condiciones de Uso lo pondrá en conocimiento del
              Usuario para su aceptación, a través de la página Web, por e-mail,
              por medio de comunicación equivalente o cualquiera de los canales
              habituales que utiliza {empresa.nombre} para el envío de
              comunicaciones.
            </p>

            <p style={{ marginBlock: "36px" }} className="texto-negro">
              Si el Usuario no estuviera de acuerdo con las mismas, dispondrá de
              un plazo de {plazos.modificacion} desde la comunicación para
              resolver el contrato mediante comunicación fehaciente a{" "}
              {empresa.nombre} y proceder con la cancelación de la cuenta de
              usuario. El transcurso del referido plazo de {plazos.modificacion}{" "}
              sin que el Usuario haya manifestado nada en contrario, implicará
              la plena aceptación de las nuevas condiciones.
            </p>

            <p style={{ marginBlock: "36px" }} className="texto-negro">
              {empresa.nombre} se reserva el derecho a incorporar todo tipo de
              mejoras y modificaciones en el Servicio, ya sea en cuanto al
              acceso al mismo o en cuanto a cualquier otro requisito o
              circunstancia que en cada caso estime conveniente.
            </p>
          </Seccion>

          <Seccion titulo="DECIMOTERCERA: CONTACTO">
            <p style={{ marginBlock: "36px" }} className="texto-negro">
              Para cualquier pregunta o consulta durante el proceso de registro
              de usuario, rectificación de datos, proceso de compra de productos
              físicos, por cambios y devoluciones, o bien, acerca de información
              general del producto, así como ofertas y promociones, el Usuario
              podrá dirigirse a {empresa.nombre}, a través de los siguientes
              medios:
            </p>

            <PuntoConFlecha>
              A través de la dirección de correo electrónico:{" "}
              <span className="texto-azul-hover">
                <a href={contacto.emailLink}>{contacto.email}</a>
              </span>
            </PuntoConFlecha>

            <PuntoConFlecha>
              Por teléfono, marcando el número: {contacto.telefono} El personal
              del servicio de Atención al Cliente lo podrá atender en español y
              catalán.
            </PuntoConFlecha>

            <p style={{ marginBottom: "36px" }} className="texto-negro">
              <FaArrowRightLong
                color="#878E97"
                style={{ marginRight: "10px" }}
              />
              Mediante el formulario que se encuentra en el apartado "Formulario
              de Contacto" ubicado en la parte inferior de la página Web.
            </p>
          </Seccion>

          <Seccion titulo="DECIMOCUARTA: JURISDICCIÓN Y LEGISLACIÓN APLICABLES">
            <p style={{ marginBottom: "0px" }} className="texto-negro">
              Estos términos y condiciones de uso se regirán por la legislación
              española.
            </p>
            <p className="texto-negro">
              Salvo lo dispuesto en el ordenamiento jurídico vigente, cualquier
              controversia se someterá a la exclusiva jurisdicción de los
              tribunales de Barcelona (España).
            </p>
          </Seccion>
        </div>
      }
    />
  );
};

export default CondicionesDeUso;
