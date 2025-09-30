import React from "react";

import { PRIVACIDAD_DATA } from "../../../infrastructure/constants";
import {
  DatosEmpresa,
  PuntoConFlecha,
  Seccion,
} from "../../components/DatosClientes/CondicionesDeUso";
import CuerpoVacioFooter from "../../components/Footer/CuerpoVacioFooter";

const PoliticaDePrivacidad: React.FC = () => {
  const { empresa, plazos, formularios, enlaces } = PRIVACIDAD_DATA;

  return (
    <CuerpoVacioFooter
      contenedor={
        <div>
          <h2 className="titulo-mayor">POLÍTICA DE PRIVACIDAD</h2>

          <Seccion titulo="Responsable del Tratamiento">
            <p className="texto-negro">
              La empresa responsable del tratamiento de sus datos en virtud de
              esta Política de privacidad es:
            </p>

            <DatosEmpresa />

            <p className="texto-negro">Inscrita en el {empresa.registro}</p>

            <p className="texto-negro">
              En {empresa.nombre} reconocemos la importancia de proteger su
              información personal y estamos comprometidos a tratarla con
              responsabilidad y de conformidad con las leyes de protección de
              datos.
            </p>

            <p className="texto-negro">
              La presente política de privacidad pretende regular todos los
              aspectos relativos al tratamiento de datos de los diferentes
              usuarios que navegan o facilitan sus datos personales a través de
              los diferentes formularios situados en la web.
            </p>
          </Seccion>

          <Seccion titulo="Datos Personales">
            <p className="texto-negro">
              Un dato personal es la información que le identifica o le hace
              identificable. A través de la web, en las casillas establecidas al
              efecto recogemos los datos personales que el usuario nos comunica:
              Nombre, apellidos, correo electrónico, teléfono, dirección postal,
              población, etc.
            </p>

            <p className="texto-negro">
              La visita del usuario a la web no implica que tenga que facilitar
              ninguna información sobre sus datos personales. No obstante, en
              caso de facilitarlos, los datos serán tratados de forma lícita con
              sujeción en todo momento a los principios y derechos recogidos en
              el RGPD 2016/679 de 27 de abril de 2016 y la LOPDGDD 3/2018 del 5
              de diciembre.
            </p>
          </Seccion>

          <Seccion titulo="Finalidad, duración y legitimación del tratamiento:">
            <p className="texto-negro">
              Los datos que el usuario nos proporcione los trataremos con las
              siguientes finalidades:
            </p>

            <PuntoConFlecha>
              Atender la solicitud o petición realizada por el usuario a través
              del{" "}
              <span className="texto-negro-resaltado">
                {formularios.contacto}
              </span>{" "}
              situado en la web. Recogemos y tratamos los datos personales del
              usuario para poder tramitar y gestionar su solicitud, una consulta
              o cualquier petición que realiza a través de dicho formulario.
              Estos datos los conservaremos durante el tiempo necesario para dar
              cumplimiento a su petición y durante el tiempo establecido por la
              ley con una duración mínima de {plazos.minimo}.
            </PuntoConFlecha>

            <p className="texto-negro">
              La base de legitimación del tratamiento de los datos será el
              consentimiento que otorga el usuario al seleccionar la casilla de
              aceptación de nuestra política de privacidad antes de enviar la
              petición. El usuario tiene derecho a revocar su consentimiento en
              cualquier momento sin que ello afecte a la licitud del tratamiento
              basado en el consentimiento previo a su retirada.
            </p>

            <PuntoConFlecha>
              Atender y gestionar la compra realizada por el usuario a través
              del{" "}
              <span className="texto-negro-resaltado">
                {formularios.compra}
              </span>{" "}
              situado en la web. Recogemos y tratamos los datos personales del
              usuario para poder procesar el pedido y posterior pago de los
              productos y servicios que se ofrecen en la web. Estos datos los
              conservaremos durante el tiempo que dure la relación contractual
              entre las partes y durante el tiempo establecido por la ley para
              el cumplimiento de las obligaciones fiscales.
            </PuntoConFlecha>

            <p className="texto-negro">
              La base de legitimación del tratamiento de los datos será la
              ejecución de un contrato de compraventa en el que el interesado es
              parte. En caso que el usuario no facilite sus datos personales no
              se podrá gestionar su compra, no pudiendo prestar el servicio
              solicitado.
            </p>

            <PuntoConFlecha>
              Enviar{" "}
              <span className="texto-negro-resaltado">
                {formularios.newsletter}
              </span>{" "}
              sobre productos y noticias de Doraemon y Shin chan. Bajo el
              consentimiento del usuario recogemos y tratamos sus datos
              personales para poder enviarle información sobre nuestros
              productos, servicios y eventos así como noticias de la marca.
              Estos datos los conservaremos mientras el usuario no revoque su
              consentimiento al tratamiento de los mismos y durante el tiempo
              establecido por la ley con una duración mínima de {plazos.minimo}.
            </PuntoConFlecha>

            <p className="texto-negro">
              La base de legitimación del tratamiento de los datos será el
              consentimiento que otorga el usuario al seleccionar la casilla de
              aceptación de nuestra política de privacidad antes de suscribirse
              a la newsletter en formulario habilitado a tal efecto en la web.
              El usuario tiene derecho a revocar su consentimiento en cualquier
              momento sin que ello afecte a la licitud del tratamiento basado en
              el consentimiento previo a su retirada.
            </p>

            <PuntoConFlecha>
              Dar de alta como "usuario registrado" a través del{" "}
              <span className="texto-negro-resaltado">
                {formularios.registro}
              </span>{" "}
              situado en la web que le permitirá al usuario acceder a su área
              privada de servicios e informarle de nuestras actividades,
              pudiéndole remitir por cualquier medio electrónico comunicaciones
              comerciales de las novedades de nuestros servicios. Estos datos
              los conservaremos mientras el usuario no solicite su baja del
              registro y durante el tiempo establecido por la ley con una
              duración mínima de {plazos.minimo}.
            </PuntoConFlecha>

            <p className="texto-negro">
              La base de legitimación del tratamiento de los datos será el
              consentimiento que otorga el usuario al registrarse a través del
              formulario de registro y seleccionar la casilla de aceptación de
              nuestra política de privacidad antes de enviar su solicitud. El
              usuario tiene derecho a revocar su consentimiento en cualquier
              momento sin que ello afecte a la licitud del tratamiento basado en
              el consentimiento previo a su retirada.
            </p>

            <PuntoConFlecha>
              Mejorar su{" "}
              <span className="texto-negro-resaltado">
                {formularios.experiencia}
              </span>{" "}
              al navegar por la web. Estos datos los conservaremos mientras el
              usuario no revoque su consentimiento al tratamiento de los mismos
              eliminando las cookies y durante el tiempo establecido por la ley
              con una duración mínima de {plazos.minimo}.
            </PuntoConFlecha>

            <p className="texto-negro">
              La base legítima para mejorar su experiencia al navegar por la web
              es el consentimiento que otorga el usuario al aceptar las cookies.
              El usuario tiene derecho a revocar su consentimiento en cualquier
              momento sin que ello afecte a la licitud del tratamiento basado en
              el consentimiento previo a su retirada.
            </p>
          </Seccion>

          <Seccion titulo="Cesión o comunicación de datos personales y transferencias internacionales:">
            <p className="texto-negro">
              Sus datos no se comunicarán ni serán cedidos a terceros salvo que
              exista alguna obligación legal o aquellos prestadores vinculados
              al Responsable que actúan como encargados del tratamiento.
            </p>

            <p className="texto-negro">
              No se realizan transferencias internacionales, para el caso en que
              en algún momento pudieran realizarse, se le comunicarán con el
              objeto de obtener su consentimiento.
            </p>
          </Seccion>

          <Seccion titulo="Actualización de datos">
            <p className="texto-negro">
              Es importante que para que podamos mantener los datos personales
              actualizados, el usuario nos informe siempre que haya habido
              alguna modificación en ellos, en caso contrario, no respondemos de
              la veracidad de los mismos.
            </p>

            <p className="texto-negro">
              El usuario garantiza que los datos personales facilitados son
              veraces garantizando que toda la información facilitada
              corresponde con la situación real, que está puesta al día y es
              exacta, quedando obligado a comunicar cualquier modificación.
            </p>
          </Seccion>

          <Seccion titulo="Datos de Terceros">
            <p className="texto-negro">
              Si el usuario facilita datos de terceras personas para cualquier
              finalidad a {empresa.nombre}, garantiza que ha obtenido estos
              datos de forma lícita, que ha informado previamente a los
              afectados, obteniendo su consentimiento para comunicarlos y que la
              información facilitada es exacta y veraz.
            </p>
          </Seccion>

          <Seccion titulo="Carácter obligatorio de la información solicitada">
            <p className="texto-negro">
              Todos nuestros formularios cuentan con un asterisco (*) en los
              datos obligatorios. Si el usuario no facilita esos campos, o no
              marca la casilla de aceptación de la política de privacidad, no se
              permitirá el envío de la información.
            </p>
          </Seccion>

          <Seccion titulo="Derechos de los interesados">
            <p className="texto-negro">
              Tiene derecho a acceder a sus datos y a obtener confirmación sobre
              su tratamiento, así como una copia de los datos personales objeto
              de tratamiento. Tiene derecho a actualizarlos y solicitar la
              rectificación de los datos que sean inexactos o solicitar la
              supresión cuando los datos no sean necesarios para los fines para
              los que fueron recabados. Puede solicitar la limitación en el
              tratamiento de sus datos y oponerse al tratamiento de los mismos
              revocando su consentimiento, así como ejercer el derecho a la
              portabilidad de los datos. Del mismo modo, tiene derecho a no ser
              objeto de decisiones basadas únicamente en el tratamiento
              automatizado de sus datos personales. Puede ejercer sus derechos
              contactando con nosotros: Travessera de Gràcia, 17-21 Entresuelo
              C-D - 08021 BARCELONA (Barcelona). Email:{" "}
              <a href={empresa.emailLink}>{empresa.email}</a>
            </p>

            <p className="texto-negro">
              Si considera que sus derechos no se han atendido debidamente,
              tiene derecho a presentar una reclamación ante la Agencia Española
              de Protección de Datos{" "}
              <a href={enlaces.aepd} target="_blank" rel="noopener noreferrer">
                www.aepd.es
              </a>
            </p>
          </Seccion>

          <Seccion titulo="Tratamiento de datos de Menores de edad">
            <p className="texto-negro">
              Quien facilita los datos a través de los formularios de esta web y
              acepta su tratamiento declara ser mayor de {plazos.edadMinima},
              quedando prohibido el acceso y uso del portal a menores de dicha
              edad. Si en algún momento, el Responsable detecta que un menor de{" "}
              {plazos.edadMinima} ha proporcionado datos de carácter personal,
              procederemos a la cancelación de los mismos. Asimismo, los padres
              o tutores podrán en cualquier caso dirigirse a {empresa.nombre}{" "}
              para bloquear la cuenta de acceso de los menores a su cargo que se
              hubieran registrado falseando su identidad.
            </p>
          </Seccion>

          <Seccion titulo="Tratamiento de Cookies">
            <p className="texto-negro">
              Una cookie es un pequeño archivo que se descarga y almacena en el
              ordenador del usuario cuando este accede a una página web. Las
              Cookies permiten a la web, entre otras cosas, almacenar y
              recuperar información sobre los hábitos de navegación del usuario
              o de su equipo y, dependiendo de la información que contengan y de
              la forma en que utilice su equipo, pueden utilizarse para
              reconocer al usuario.
            </p>

            <p className="texto-negro">
              El usuario tiene la opción de impedir la generación de cookies,
              mediante la selección de la correspondiente opción en su programa
              de navegador. Puede obtener más información leyendo nuestra
              Política de Cookies.
            </p>
          </Seccion>
        </div>
      }
    />
  );
};

export default PoliticaDePrivacidad;
