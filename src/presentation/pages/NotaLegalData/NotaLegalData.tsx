import React from "react";

import { NOTA_LEGAL_DATA } from "../../../infrastructure/constants";
import {
  DatosIdentificativos,
  SeccionNumerada,
  Subseccion,
} from "../../components/DatosClientes/NotaLegalData/NotaLegalData";
import CuerpoVacioFooter from "../../components/Footer/CuerpoVacioFooter";

const NotaLegal: React.FC = () => {
  const { empresa, legislacion } = NOTA_LEGAL_DATA;

  return (
    <CuerpoVacioFooter
      contenedor={
        <div>
          <h2 className="titulo-mayor">AVISO LEGAL</h2>

          <p className="texto-negro">
            {empresa.denominacionSocial}, responsable del sitio web, en adelante
            RESPONSABLE, pone a disposición de los usuarios el presente
            documento, con el que pretende dar cumplimiento a las obligaciones
            dispuestas en la {legislacion.lssice}, así como informar a todos los
            usuarios del sitio web respecto a cuáles son las condiciones de uso.
          </p>

          <p className="texto-negro">
            Toda persona que acceda a este sitio web asume el papel de usuario,
            comprometiéndose a la observancia y cumplimiento riguroso de las
            disposiciones aquí dispuestas, así como a cualquier otra disposición
            legal que fuera de aplicación.
          </p>

          <p className="texto-negro">
            {empresa.denominacionSocial} se reserva el derecho de modificar
            cualquier tipo de información que pudiera aparecer en el sitio web,
            sin que exista obligación de preavisar o poner en conocimiento de
            los usuarios dichas obligaciones, entendiéndose como suficiente con
            la publicación en el sitio web de {empresa.denominacionSocial}.
          </p>

          <SeccionNumerada numero="1" titulo="DATOS IDENTIFICATIVOS">
            <DatosIdentificativos />
          </SeccionNumerada>

          <SeccionNumerada
            numero="2"
            titulo="DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL"
          >
            <p className="texto-negro">
              El sitio web, incluyendo a título enunciativo pero no limitativo
              su programación, edición, compilación y demás elementos necesarios
              para su funcionamiento, los diseños, logotipos, texto y/o
              gráficos, son propiedad del RESPONSABLE o, si es el caso, dispone
              de licencia o autorización expresa por parte de los autores. Todos
              los contenidos del sitio web se encuentran debidamente protegidos
              por la normativa de propiedad intelectual e industrial, así como
              inscritos en los registros públicos correspondientes.
            </p>

            <p className="texto-negro">
              Independientemente de la finalidad para la que fueran destinados,
              la reproducción total o parcial, uso, explotación, distribución y
              comercialización, requiere en todo caso de la autorización escrita
              previa por parte del RESPONSABLE. Cualquier uso no autorizado
              previamente se considera un incumplimiento grave de los derechos
              de propiedad intelectual o industrial del autor.
            </p>

            <p className="texto-negro">
              Los diseños, logotipos, texto y/o gráficos ajenos al RESPONSABLE y
              que pudieran aparecer en el sitio web, pertenecen a sus
              respectivos propietarios, siendo ellos mismos responsables de
              cualquier posible controversia que pudiera suscitarse respecto a
              los mismos. El RESPONSABLE autoriza expresamente a que terceros
              puedan redirigir directamente a los contenidos concretos del sitio
              web, y en todo caso redirigir al sitio web principal de{" "}
              {empresa.dominios.join(" o ")}.
            </p>

            <p className="texto-negro">
              El RESPONSABLE reconoce a favor de sus titulares los
              correspondientes derechos de propiedad intelectual e industrial,
              no implicando su sola mención o aparición en el sitio web la
              existencia de derechos o responsabilidad alguna sobre los mismos,
              como tampoco respaldo, patrocinio o recomendación por parte del
              mismo.
            </p>

            <p className="texto-negro" style={{ marginBottom: "48px" }}>
              Para realizar cualquier tipo de observación respecto a posibles
              incumplimientos de los derechos de propiedad intelectual o
              industrial, así como sobre cualquiera de los contenidos del sitio
              web, puede hacerlo a través del correo electrónico{" "}
              <a href={empresa.emailLink}>{empresa.email}</a>.
            </p>
          </SeccionNumerada>

          <SeccionNumerada numero="3" titulo="EXENCIÓN DE RESPONSABILIDADES">
            <p className="texto-negro">
              El RESPONSABLE se exime de cualquier tipo de responsabilidad
              derivada de la información publicada en su sitio web siempre que
              esta información haya sido manipulada o introducida por un tercero
              ajeno al mismo.
            </p>

            <Subseccion titulo="Uso de Cookies">
              <p className="texto-negro">
                Este sitio web de puede utilizar cookies técnicas (pequeños
                archivos de información que el servidor envía al ordenador de
                quien accede a la página) para llevar a cabo determinadas
                funciones que son consideradas imprescindibles para el correcto
                funcionamiento y visualización del sitio. Las cookies utilizadas
                tienen, en todo caso, carácter temporal, con la única finalidad
                de hacer más eficaz la navegación, y desaparecen al terminar la
                sesión del usuario. En ningún caso, estas cookies proporcionan
                por sí mismas datos de carácter personal y no se utilizarán para
                la recogida de los mismos.
              </p>

              <p className="texto-negro">
                Mediante el uso de cookies también es posible que el servidor
                donde se encuentra la web reconozca el navegador utilizado por
                el usuario con la finalidad de que la navegación sea más
                sencilla, permitiendo, por ejemplo, el acceso de los usuarios
                que se hayan registrado previamente a las áreas, servicios,
                promociones o concursos reservados exclusivamente a ellos sin
                tener que registrarse en cada visita. También se pueden utilizar
                para medir la audiencia, parámetros de tráfico, controlar el
                progreso y número de entradas, etc, siendo en estos casos
                cookies prescindibles técnicamente pero beneficiosas para el
                usuario. Este sitio web no instalará cookies prescindibles sin
                el consentimiento previo del usuario.
              </p>

              <p className="texto-negro">
                El usuario tiene la posibilidad de configurar su navegador para
                ser alertado de la recepción de cookies y para impedir su
                instalación en su equipo. Por favor, consulte las instrucciones
                de su navegador para ampliar esta información.
              </p>
            </Subseccion>

            <Subseccion titulo="Política de enlaces">
              <p className="texto-negro">
                Desde el sitio web, es posible que se redirija a contenidos de
                terceros sitios web. Dado que el RESPONSABLE no puede controlar
                siempre los contenidos introducidos por los terceros en sus
                respectivos sitios web, no asume ningún tipo de responsabilidad
                respecto a dichos contenidos. En todo caso, procederá a la
                retirada inmediata de cualquier contenido que pudiera
                contravenir la legislación nacional o internacional, la moral o
                el orden público, procediendo a la retirada inmediata de la
                redirección a dicho sitio web, poniendo en conocimiento de las
                autoridades competentes el contenido en cuestión.
              </p>

              <p className="texto-negro">
                El RESPONSABLE no se hace responsable de la información y
                contenidos almacenados, a título enunciativo pero no limitativo,
                en foros, chats, generadores de blogs, comentarios, redes
                sociales o cualquier otro medio que permita a terceros publicar
                contenidos de forma independiente en la página web del
                RESPONSABLE. Sin embargo, y en cumplimiento de lo dispuesto en
                los {legislacion.articulos}, se pone a disposición de todos los
                usuarios, autoridades y fuerzas de seguridad, colaborando de
                forma activa en la retirada o, en su caso, bloqueo de todos
                aquellos contenidos que puedan afectar o contravenir la
                legislación nacional o internacional, los derechos de terceros o
                la moral y el orden público. En caso de que el usuario considere
                que existe en el sitio web algún contenido que pudiera ser
                susceptible de esta clasificación, se ruega lo notifique de
                forma inmediata al administrador del sitio web.
              </p>

              <p className="texto-negro">
                Este sitio web ha sido revisado y probado para que funcione
                correctamente. En principio, puede garantizarse el correcto
                funcionamiento los 365 días del año, 24 horas al día. Sin
                embargo, el RESPONSABLE no descarta la posibilidad de que
                existan ciertos errores de programación, o que acontezcan causas
                de fuerza mayor, catástrofes naturales, huelgas o circunstancias
                semejantes que hagan imposible el acceso a la página web.
              </p>
            </Subseccion>

            <Subseccion titulo="Direcciones IP">
              <p className="texto-negro">
                Los servidores del sitio web podrán detectar de manera
                automática la dirección IP y el nombre de dominio utilizados por
                el usuario. Una dirección IP es un número asignado
                automáticamente a un ordenador cuando éste se conecta a
                Internet. Toda esta información es registrada en un fichero de
                actividad del servidor debidamente inscrito que permite el
                posterior procesamiento de los datos con el fin de obtener
                mediciones únicamente estadísticas que permitan conocer el
                número de impresiones de páginas, el número de visitas
                realizadas a los servidores web, el orden de visitas, el punto
                de acceso, etc.
              </p>
            </Subseccion>
          </SeccionNumerada>

          <SeccionNumerada numero="4" titulo="LEY APLICABLE Y JURISDICCIÓN">
            <p className="texto-negro">
              La ley aplicable en caso de disputa o conflicto de interpretación
              de los términos que conforman los textos legales, así como
              cualquier cuestión relacionada con los servicios de la presente
              web, será la ley española.
            </p>
          </SeccionNumerada>
        </div>
      }
    />
  );
};

export default NotaLegal;
