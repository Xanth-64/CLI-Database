import Link from 'next/link'
export const NavBar = () => {
    return (
        <div className="navBar-wrapper">
            <div className="logo"> Condominium Logging Interface</div>
            <div className="navBar">
                <div className="navBar-item">
                    <Link href="/READ">Información General </Link>
                </div>
                <div className="navBar-item">
                    <Link href="/crearedificio"> Edificios</Link>
                </div>
                <div className="navBar-item">
                    <Link href="/crearSuceso"> Reportar Suceso </Link>
                </div>

                <div className="navBar-item">
                    <Link href="/createAreaComun"> Areas Comunes</Link>
                </div>
                <div className="navBar-item">
                    <Link href="/facturacionMasiva"> Facturacion Masiva</Link>
                </div>
                <div className="navBar-item">
                    <Link href="/consultarSuceso"> Sucesos</Link>
                </div>
                <div className="navBar-item">
                    <Link href="/createServicio"> Servicios</Link>
                </div>
            </div>
        </div>
    )
}
