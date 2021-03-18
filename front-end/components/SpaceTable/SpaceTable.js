import SpaceRow from './SpaceRow'

const SpaceTable = ({ spaces }) => {
    const items = spaces.map((item) => {
        return (
            <li key={item.id}>
                <SpaceRow
                    state={item.estado}
                    type={item.tipo}
                    number={item.numero}
                    personID={item.personaID}
                />
                <button type="button" className="t-btn danger">
                    Eliminar
                </button>
            </li>
        )
    })
    return (
        <div className="t-container">
            <h1>Área común</h1>
            <div className="t-dark">
                <SpaceRow state="Estado" type="Tipo" number="Número" />
            </div>
            <div className="t-list">
                <ul>{items}</ul>
            </div>
        </div>
    )
}

export default SpaceTable
