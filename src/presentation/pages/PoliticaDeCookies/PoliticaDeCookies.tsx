import React from "react";

import { COOKIES_DATA } from "../../../infrastructure/constants";
import CuerpoVacioFooter from "../../../Components/Footer/SectionsFooter/CuerpoVacioFooter";
import {
  PuntoConFlecha,
  Seccion,
} from "../../components/DatosClientes/CondicionesDeUso";
import { NavegadorPasos } from "../../components/DatosClientes/PoliticaDeCookies/PoliticaDeCookies";
import { TablaCookies } from "../../components/DatosClientes/PoliticaDeCookies/TablaCookies";

const PoliticaDeCookies: React.FC = () => {
  const { navegadores } = COOKIES_DATA;

  return (
    <CuerpoVacioFooter
      contenedor={
        <div>
          <h2 className="titulo-mayor">POLÍTICA DE COOKIES</h2>

          <p className="texto-negro">
            Esta política de cookies tiene por finalidad informar de manera
            clara y precisa sobre las cookies que se utilizan en nuestra web.
          </p>

          <p className="texto-negro">
            Utilizamos{" "}
            <span className="texto-negro-resaltado">cookies propias</span> y de
            terceros para mejorar nuestros servicios, personalizar nuestro sitio
            web, facilitar la navegación de nuestros usuarios, proporcionarle
            una mejor experiencia en el uso del sitio web, identificar problemas
            para mejorar el mismo, hacer mediciones y estadísticas de uso y
            mostrarle publicidad relacionada con sus preferencias mediante el
            análisis del uso del sitio web.
          </p>

          <p className="texto-negro">
            Le informamos de que podemos utilizar cookies en su equipo a
            condición de que el usuario haya dado su consentimiento, salvo en
            los supuestos en los que las cookies sean necesarias para la
            navegación por nuestro sitio web.
          </p>

          <p style={{ marginTop: "36px" }} className="texto-negro">
            En caso de que preste su consentimiento, podremos utilizar cookies
            que nos permitirán tener más información acerca de sus preferencias
            y personalizar nuestro sitio web de conformidad con sus intereses
            individuales.
          </p>

          <Seccion titulo="¿QUÉ SON LAS COOKIES?">
            <p className="texto-negro">
              Las cookies y otras tecnologías similares tales como local shared
              objects, flashcookies o píxeles, son herramientas empleadas por
              los servidores Web para almacenar y recuperar información acerca
              de sus visitantes, así como para ofrecer un correcto
              funcionamiento del sitio.
            </p>
          </Seccion>

          <Seccion titulo="TIPOS DE COOKIES">
            <p className="texto-negro">
              Tipos de cookies en función de la entidad que las gestione:
            </p>

            <PuntoConFlecha>
              Cookies propias: son aquellas que se envían al equipo terminal del
              usuario desde un equipo o dominio gestionado por el titular de la
              página web y desde la que se presta el servicio solicitado por el
              usuario.
            </PuntoConFlecha>

            <PuntoConFlecha>
              <span className="texto-negro-resaltado">
                Cookies de terceros:
              </span>{" "}
              son aquellas que se envían al equipo terminal del usuario desde un
              equipo o dominio que no es gestionado por el titular de la página
              web desde la que se presta el servicio solicitado por el usuario,
              sino por otra entidad que trata los datos obtenidos través de las
              cookies. Asimismo, en el caso de que las cookies sean instaladas
              desde un equipo o dominio gestionado por el propio titular del
              sitio web pero la información que se recoja mediante éstas sea
              gestionada por un tercero, también serán consideradas como cookies
              de terceros.
            </PuntoConFlecha>

            <p className="texto-negro">Tipos de cookies según la finalidad:</p>

            <PuntoConFlecha>
              <span className="texto-negro-resaltado">Cookies técnicas:</span>{" "}
              son aquellas que permiten al usuario la navegación a través de una
              página web, plataforma o aplicación y la utilización de las
              diferentes opciones o servicios que en ella existan, incluyendo
              aquellas que el editor utiliza para permitir la gestión y
              operativa de la página web y habilitar sus funciones y servicios,
              como, por ejemplo, controlar el tráfico y la comunicación de
              datos, identificar la sesión, acceder a partes de acceso
              restringido, recordar los elementos que integran un pedido,
              realizar el proceso de compra de un pedido, gestionar el pago,
              controlar el fraude vinculado a la seguridad del servicio,
              realizar la solicitud de inscripción o participación en un evento,
              contar visitas a efectos de la facturación de licencias del
              software con el que funciona el servicio (sitio web, plataforma o
              aplicación), utilizar elementos de seguridad durante la
              navegación, almacenar contenidos para la difusión de vídeos o
              sonido, habilitar contenidos dinámicos (por ejemplo, animación de
              carga de un de un texto o imagen) o compartir contenidos a través
              de redes sociales.
            </PuntoConFlecha>

            <p className="texto-negro">
              También pertenecen a esta categoría, por su naturaleza técnica,
              aquellas cookies que permiten la gestión, de la forma más eficaz
              posible, de los espacios publicitarios que, como un elemento más
              de diseño o "maquetación" del servicio ofrecido al usuario, el
              editor haya incluido en una página web, aplicación o plataforma en
              base a criterios como el contenido editado, sin que se recopile
              información de los usuarios con fines distintos, como puede ser
              personalizar ese contenido publicitario u otros contenidos.
            </p>

            <PuntoConFlecha>
              <span className="texto-negro-resaltado">
                Cookies de preferencias o personalización:
              </span>{" "}
              son aquellas que permiten recordar información para que el usuario
              acceda al servicio con determinadas características que pueden
              diferenciar su experiencia de la de otros usuarios, como, por
              ejemplo, el idioma, el número de resultados a mostrar cuando el
              usuario realiza una búsqueda, el aspecto o contenido del servicio
              en función del tipo de navegador a través del cual el usuario
              accede al servicio o de la región desde la que accede al servicio,
              etc.
            </PuntoConFlecha>

            <PuntoConFlecha>
              <span className="texto-negro-resaltado">
                Cookies de análisis o medición:
              </span>{" "}
              son aquellas que permiten al responsable de las mismas el
              seguimiento y análisis del comportamiento de los usuarios de los
              sitios web a los que están vinculadas, incluida la cuantificación
              de los impactos de los anuncios. La información recogida mediante
              este tipo de cookies se utiliza en la medición de la actividad de
              los sitios web, aplicación o plataforma, con el fin de introducir
              mejoras en función del análisis de los datos de uso que hacen los
              usuarios del servicio.
            </PuntoConFlecha>

            <PuntoConFlecha>
              <span className="texto-negro-resaltado">
                Cookies de publicidad comportamental:
              </span>{" "}
              son aquéllas que permiten la gestión, de la forma más eficaz
              posible, de los espacios publicitarios que hay en la página web.
              Estas cookies almacenan información del comportamiento de los
              usuarios obtenida a través de la observación continuada de sus
              hábitos de navegación, lo que permite desarrollar un perfil
              específico para mostrar publicidad en función del mismo.
            </PuntoConFlecha>

            <PuntoConFlecha>
              <span className="texto-negro-resaltado">
                Cookies de geolocalización:
              </span>{" "}
              se utilizan para saber en qué lugar se encuentra un usuario cuando
              solicita un servicio. Esta cookie es anónima y se usa por ejemplo
              para ofrecerle la información adecuada dependiendo del país en el
              que se encuentre.
            </PuntoConFlecha>
          </Seccion>

          <Seccion titulo="Tipos de Cookies según plazo de tiempo que permanecen activadas:">
            <PuntoConFlecha>
              <span className="texto-negro-resaltado">Cookies de sesión:</span>{" "}
              son aquellas diseñadas para recabar y almacenar datos mientras el
              usuario accede a una página web. Se suelen emplear para almacenar
              información que solo interesa conservar para la prestación del
              servicio solicitado por el usuario en una sola ocasión (por
              ejemplo, una lista de productos adquiridos) y desaparecen al
              terminar la sesión.
            </PuntoConFlecha>

            <PuntoConFlecha>
              <span className="texto-negro-resaltado">
                Cookies persistentes:
              </span>{" "}
              son aquellas en las que los datos siguen almacenados en el
              terminal y pueden ser accedidos y tratados durante un periodo
              definido por el responsable de la cookie, y que puede ir de unos
              minutos a varios años.
            </PuntoConFlecha>
          </Seccion>

          <Seccion titulo="COOKIES UTILIZADAS EN NUESTRA WEB">
            <div style={{ marginTop: "36px" }}>
              <TablaCookies />
            </div>
          </Seccion>

          <Seccion titulo="¿CÓMO SE DESHABILITAN LAS COOKIES EN LOS NAVEGADORES?">
            <div style={{ marginTop: "36px" }}>
              <p className="texto-negro">
                El usuario puede, en cualquier momento, permitir, bloquear o
                eliminar las cookies instaladas en su equipo mediante la
                modificación de los parámetros de configuración del navegador
                instalado en su ordenador:
              </p>

              {navegadores.map((navegador, index) => (
                <NavegadorPasos
                  key={index}
                  nombre={navegador.nombre}
                  link={navegador.link}
                  pasos={navegador.pasos}
                  soporte={navegador.soporte}
                  textoSoporte={navegador.textoSoporte}
                  esUltimo={index === navegadores.length - 1}
                />
              ))}

              <p className="texto-negro">
                La desactivación de las cookies no impide la navegación por el
                sitio web, aunque el uso de algunos de sus servicios podrá ser
                limitado y, por tanto, su experiencia de navegación podrá ser
                menos satisfactoria.
              </p>
            </div>
          </Seccion>

          <Seccion titulo="RETIRAR EL CONSENTIMIENTO">
            <p className="texto-negro">
              El usuario podrá retirar en cualquier momento su consentimiento
              relacionado con la Política de Cookies, y podrá eliminar las
              cookies almacenadas en su equipo a través de los ajustes y
              configuraciones de su navegador de Internet, indicados
              anteriormente, así como accediendo a nuestro panel de
              configuración:
            </p>

            <span className="texto-fondo-gris">[CONFIGURAR COOKIES]</span>

            <p style={{ marginTop: "16px" }} className="texto-negro">
              La presente Política de Cookies se podrá modificar cuando así lo
              exija la legislación vigente en cada momento o cuando hubiera
              alguna variación en el tipo de cookies utilizadas en el sitio web.
              Por ello, le recomendamos revisar esta política cada vez que
              acceda a nuestro sitio web con el objetivo de estar adecuadamente
              informado sobre cómo y para qué usamos las cookies.
            </p>
          </Seccion>
        </div>
      }
    />
  );
};

export default PoliticaDeCookies;
