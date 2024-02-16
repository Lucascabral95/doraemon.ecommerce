import "./Menu.scss"

export default function Menu() {

    return (
        <div className="menu">

            <div className="bienvenida">
                <div className="menu-bienvenida-texto">
                    <span className="bienvenida-texto"> TIENDA OFICIAL DE DORAEMON </span>
                </div>
                <div className="menu-bienvenida-titulo">
                    <h2 className="bienvenida-titulo"> Productos oficiales de Doraemon </h2>
                </div>
            </div>

            <div className="menu-img">
                <img className="img" src="/img/menu-principal-2.jpg" alt="Bienvenida" />
                <img style={{ display: 'none' }} className="img-intermedia" src="/img/menu-secundario-2.jpg" alt="Bienvenida" />
                <img style={{ display: 'none' }} className="img-pequeña" src="/img/menu-terciario-2.jpg" alt="Bienvenida" />
            </div>

        </div>
    )
}