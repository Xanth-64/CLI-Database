const SucesosInformation = ({ Information }) => {
    console.log(Information)
    if (!Information) {
        return <div>No hay Sucesos que Mostrar</div>
    } else {
        return (
            <div>
                {Information.getSucesoByDateRange.map((Info) => {
                    return (
                        <div className="SucesoList" key={JSON.stringify(Info)}>
                            <h3 className="SucesoTitle">Titulo</h3>
                            <div classnName="SucesoDescripcion">{`${Info.titulo}`}</div>
                            <h3 className="SucesoTitle">Descripcion</h3>
                            <div className="SucesoDescripcion">{`${Info.descripcion}`}</div>
                            <h3 className="SucesoTitle">Fecha</h3>
                            <div className="SucesoDescripcion">{`${Info.fecha}`}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default SucesosInformation
